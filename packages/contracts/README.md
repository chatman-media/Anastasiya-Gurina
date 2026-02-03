# @workspace/contracts

TON blockchain smart contracts for Anastasiya Gurina NFT Gallery.

## Structure

- `contracts/` - FunC smart contracts
  - `nft_collection.fc` - Main NFT collection contract (TEP-62 compliant)
- `wrappers/` - TypeScript wrappers for contracts
  - `NftCollection.ts` - Collection contract wrapper
- `scripts/` - Deployment and interaction scripts
- `tests/` - Contract tests using TON Sandbox

## Development

```bash
# Install dependencies
bun install

# Build contracts
bun run build

# Run tests
bun run test

# Deploy (testnet)
bun run deploy
```

## NFT Collection Contract

The collection contract implements TEP-62 standard with:

- **Minting**: Single and batch minting operations
- **Royalties**: Configurable royalty percentage
- **Ownership**: Owner-controlled minting and management
- **Standard compliance**: Full TEP-62 compatibility

### Operations

1. **Mint NFT** (op=1): Mint a single NFT
2. **Batch Mint** (op=2): Mint multiple NFTs at once
3. **Change Owner** (op=3): Transfer collection ownership

### Get Methods

- `get_collection_data()` - Returns collection info
- `get_nft_address_by_index(index)` - Get NFT address by index
- `royalty_params()` - Get royalty configuration
- `get_nft_content(index, content)` - Get NFT metadata

## Usage in Apps

```typescript
import { NftCollection } from '@workspace/contracts/wrappers/NftCollection';

// Create collection instance
const collection = NftCollection.createFromAddress(collectionAddress);

// Get collection data
const data = await collection.getCollectionData(provider);
console.log('Next item index:', data.nextItemIndex);

// Mint NFT (owner only)
await collection.sendMintNft(provider, wallet, {
  value: toNano('0.05'),
  itemIndex: 0,
  nftContent: metadataCell,
});
```

## Environment Variables

Create `.env` file:

```env
TONCENTER_API_KEY=your_api_key_here
WALLET_MNEMONIC=your wallet mnemonic here
```

## Resources

- [TON Docs](https://docs.ton.org/)
- [TEP-62: NFT Standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0062-nft-standard.md)
- [TON Blueprint](https://github.com/ton-org/blueprint)
