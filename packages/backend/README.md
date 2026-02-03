# @workspace/backend

Backend API for Anastasiya Gurina NFT Gallery built with Hono and Bun.

## Features

- **NFT Management**: Browse, purchase, and manage NFTs
- **Payment Processing**: TON blockchain payment verification
- **RESTful API**: Clean, documented API endpoints
- **Type-safe**: Full TypeScript support
- **Fast**: Built on Bun runtime

## Development

```bash
# Start dev server with hot reload
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Type check
bun run type-check
```

## API Endpoints

### NFT Routes (`/api/nft`)

- `GET /` - Get all NFTs
- `GET /:id` - Get NFT by ID
- `GET /:id/metadata` - Get NFT metadata (TEP-64 format)
- `POST /:id/purchase` - Purchase NFT
- `GET /:id/owner` - Get NFT owner

### Payment Routes (`/api/payments`)

- `POST /invoice` - Create payment invoice
- `POST /verify` - Verify TON transaction
- `GET /status/:hash` - Get payment status

## Environment Variables

```env
PORT=8000
NODE_ENV=development
TON_RECIPIENT_ADDRESS=your_ton_wallet_address
TONCENTER_API_KEY=your_api_key
```

## Integration

### From Telegram Mini App

```typescript
// Fetch NFTs
const response = await fetch('http://localhost:8000/api/nft');
const { nfts } = await response.json();

// Purchase NFT
const purchase = await fetch('http://localhost:8000/api/nft/0/purchase', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    buyerAddress: tonAddress,
    transactionHash: txHash,
  }),
});
```

## TODO

- [ ] Implement TON blockchain transaction verification
- [ ] Add database integration (SQLite/PostgreSQL)
- [ ] Add authentication & authorization
- [ ] Implement webhook for payment notifications
- [ ] Add rate limiting
- [ ] Add caching layer
- [ ] Add logging service
