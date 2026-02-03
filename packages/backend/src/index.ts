import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { prettyJSON } from 'hono/pretty-json';
import { nftRouter } from './api/nft/routes';
import { paymentsRouter } from './api/payments/routes';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', cors({
  origin: [
    'http://localhost:5173', // Portfolio dev
    'http://localhost:3000', // Telegram app dev
    'https://aleksandrkireev.github.io', // Production
  ],
  credentials: true,
}));
app.use('*', prettyJSON());

// Health check
app.get('/', (c) => {
  return c.json({
    name: 'Anastasiya Gurina NFT API',
    version: '1.0.0',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.route('/api/nft', nftRouter);
app.route('/api/payments', paymentsRouter);

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not Found', path: c.req.path }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Error:', err);
  return c.json({
    error: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  }, 500);
});

const port = process.env.PORT || 8000;

console.log(`🚀 Backend running on http://localhost:${port}`);

export default {
  port,
  fetch: app.fetch,
};
