import { Hono } from 'hono';
import { nftService } from './service';

export const nftRouter = new Hono();

// Get all NFTs
nftRouter.get('/', async (c) => {
  try {
    const nfts = await nftService.getAllNfts();
    return c.json({ nfts });
  } catch (error) {
    return c.json({ error: 'Failed to fetch NFTs' }, 500);
  }
});

// Get NFT by ID
nftRouter.get('/:id', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const nft = await nftService.getNftById(id);

    if (!nft) {
      return c.json({ error: 'NFT not found' }, 404);
    }

    return c.json({ nft });
  } catch (error) {
    return c.json({ error: 'Failed to fetch NFT' }, 500);
  }
});

// Get NFT metadata (for TON blockchain)
nftRouter.get('/:id/metadata', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const metadata = await nftService.getNftMetadata(id);

    if (!metadata) {
      return c.json({ error: 'NFT not found' }, 404);
    }

    return c.json(metadata);
  } catch (error) {
    return c.json({ error: 'Failed to fetch NFT metadata' }, 500);
  }
});

// Purchase NFT (requires authentication)
nftRouter.post('/:id/purchase', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const body = await c.req.json();
    const { buyerAddress, transactionHash } = body;

    if (!buyerAddress || !transactionHash) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const result = await nftService.purchaseNft(id, buyerAddress, transactionHash);
    return c.json(result);
  } catch (error: any) {
    return c.json({ error: error.message || 'Failed to purchase NFT' }, 500);
  }
});

// Check ownership
nftRouter.get('/:id/owner', async (c) => {
  try {
    const id = parseInt(c.req.param('id'));
    const owner = await nftService.getNftOwner(id);

    if (!owner) {
      return c.json({ error: 'NFT not found' }, 404);
    }

    return c.json({ owner });
  } catch (error) {
    return c.json({ error: 'Failed to fetch NFT owner' }, 500);
  }
});
