// NFT Service - Business logic for NFT operations
import { PrismaClient } from '@prisma/client';
import type { Nft } from '@prisma/client';

const prisma = new PrismaClient();

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  attributes: Array<{
    trait_type: string;
    value: string;
  }>;
}

class NFTService {
  async getAllNfts(): Promise<Nft[]> {
    return await prisma.nft.findMany({
      orderBy: { nftIndex: 'asc' },
    });
  }

  async getNftById(id: number): Promise<Nft | null> {
    return await prisma.nft.findUnique({
      where: { id },
    });
  }

  async getNftMetadata(id: number): Promise<NFTMetadata | null> {
    const nft = await this.getNftById(id);
    if (!nft) return null;

    const attributes: Array<{ trait_type: string; value: string }> = [
      {
        trait_type: 'Artist',
        value: 'Anastasiya Gurina',
      },
      {
        trait_type: 'Type',
        value: 'Photography',
      },
      {
        trait_type: 'Edition',
        value: nft.edition,
      },
    ];

    if (nft.category) {
      attributes.push({
        trait_type: 'Category',
        value: nft.category,
      });
    }

    if (nft.location) {
      attributes.push({
        trait_type: 'Location',
        value: nft.location,
      });
    }

    if (nft.year) {
      attributes.push({
        trait_type: 'Year',
        value: nft.year.toString(),
      });
    }

    return {
      name: nft.title,
      description: nft.description,
      image: nft.imageUrl,
      attributes,
    };
  }

  async purchaseNft(
    id: number,
    buyerAddress: string,
    transactionHash: string
  ): Promise<{ success: boolean; message: string }> {
    const nft = await this.getNftById(id);

    if (!nft) {
      throw new Error('NFT not found');
    }

    if (!nft.available) {
      throw new Error('NFT is no longer available');
    }

    // TODO: Verify TON transaction
    // TODO: Mint NFT to buyer address

    // Create purchase record
    await prisma.purchase.create({
      data: {
        nftId: id,
        buyerAddress,
        price: nft.price,
        transactionHash,
        status: 'pending',
      },
    });

    // Update NFT
    await prisma.nft.update({
      where: { id },
      data: {
        available: false,
        owner: buyerAddress,
        mintedAt: new Date(),
        transactionHash,
      },
    });

    return {
      success: true,
      message: `NFT #${id} purchased successfully`,
    };
  }

  async getNftOwner(id: number): Promise<string | null> {
    const nft = await this.getNftById(id);
    return nft?.owner || null;
  }
}

export const nftService = new NFTService();
