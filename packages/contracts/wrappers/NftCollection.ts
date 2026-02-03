import { Address, beginCell, Cell, contractAddress, SendMode, Dictionary } from '@ton/core';
import type { Contract, ContractProvider, Sender } from '@ton/core';

export type NftCollectionConfig = {
  ownerAddress: Address;
  royaltyAddress: Address;
  royaltyPercent: number;
  nextItemIndex: number;
  collectionContent: Cell;
  nftItemCode: Cell;
};

export function nftCollectionConfigToCell(config: NftCollectionConfig): Cell {
  return beginCell()
    .storeUint(config.nextItemIndex, 64)
    .storeAddress(config.ownerAddress)
    .storeAddress(config.royaltyAddress)
    .storeRef(config.collectionContent)
    .storeRef(config.nftItemCode)
    .storeUint(config.royaltyPercent, 16)
    .endCell();
}

export class NftCollection implements Contract {
  constructor(
    readonly address: Address,
    readonly init?: { code: Cell; data: Cell }
  ) {}

  static createFromAddress(address: Address) {
    return new NftCollection(address);
  }

  static createFromConfig(config: NftCollectionConfig, code: Cell, workchain = 0) {
    const data = nftCollectionConfigToCell(config);
    const init = { code, data };
    return new NftCollection(contractAddress(workchain, init), init);
  }

  async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
    await provider.internal(via, {
      value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell().endCell(),
    });
  }

  async sendMintNft(
    provider: ContractProvider,
    via: Sender,
    opts: {
      value: bigint;
      itemIndex: number;
      nftContent: Cell;
    }
  ) {
    await provider.internal(via, {
      value: opts.value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell()
        .storeUint(1, 32) // op: mint
        .storeUint(opts.itemIndex, 64)
        .storeRef(opts.nftContent)
        .endCell(),
    });
  }

  async sendBatchMint(
    provider: ContractProvider,
    via: Sender,
    opts: {
      value: bigint;
      nftContents: Map<number, Cell>;
    }
  ) {
    // Create dictionary for batch minting
    const dict = Dictionary.empty(Dictionary.Keys.Uint(64), Dictionary.Values.Cell());
    opts.nftContents.forEach((content, index) => {
      dict.set(index, content);
    });

    await provider.internal(via, {
      value: opts.value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell()
        .storeUint(2, 32) // op: batch_mint
        .storeUint(opts.nftContents.size, 8)
        .storeDict(dict)
        .endCell(),
    });
  }

  async sendChangeOwner(
    provider: ContractProvider,
    via: Sender,
    opts: {
      value: bigint;
      newOwner: Address;
    }
  ) {
    await provider.internal(via, {
      value: opts.value,
      sendMode: SendMode.PAY_GAS_SEPARATELY,
      body: beginCell()
        .storeUint(3, 32) // op: change_owner
        .storeAddress(opts.newOwner)
        .endCell(),
    });
  }

  async getCollectionData(provider: ContractProvider): Promise<{
    nextItemIndex: bigint;
    collectionContent: Cell;
    ownerAddress: Address;
  }> {
    const result = await provider.get('get_collection_data', []);
    return {
      nextItemIndex: result.stack.readBigNumber(),
      collectionContent: result.stack.readCell(),
      ownerAddress: result.stack.readAddress(),
    };
  }

  async getNftAddressByIndex(provider: ContractProvider, index: number): Promise<Address> {
    const result = await provider.get('get_nft_address_by_index', [{ type: 'int', value: BigInt(index) }]);
    return result.stack.readAddress();
  }

  async getRoyaltyParams(provider: ContractProvider): Promise<{
    royaltyPercent: bigint;
    royaltyBase: bigint;
    royaltyAddress: Address;
  }> {
    const result = await provider.get('royalty_params', []);
    return {
      royaltyPercent: result.stack.readBigNumber(),
      royaltyBase: result.stack.readBigNumber(),
      royaltyAddress: result.stack.readAddress(),
    };
  }
}
