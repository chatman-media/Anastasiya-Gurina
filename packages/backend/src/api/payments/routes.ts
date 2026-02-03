import { Hono } from 'hono';
import { paymentsService } from './service';

export const paymentsRouter = new Hono();

// Create payment invoice
paymentsRouter.post('/invoice', async (c) => {
  try {
    const body = await c.req.json();
    const { nftId, buyerAddress } = body;

    if (!nftId || !buyerAddress) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const invoice = await paymentsService.createInvoice(nftId, buyerAddress);
    return c.json(invoice);
  } catch (error: any) {
    return c.json({ error: error.message || 'Failed to create invoice' }, 500);
  }
});

// Verify payment
paymentsRouter.post('/verify', async (c) => {
  try {
    const body = await c.req.json();
    const { transactionHash } = body;

    if (!transactionHash) {
      return c.json({ error: 'Transaction hash is required' }, 400);
    }

    const verification = await paymentsService.verifyPayment(transactionHash);
    return c.json(verification);
  } catch (error: any) {
    return c.json({ error: error.message || 'Failed to verify payment' }, 500);
  }
});

// Get payment status
paymentsRouter.get('/status/:transactionHash', async (c) => {
  try {
    const transactionHash = c.req.param('transactionHash');
    const status = await paymentsService.getPaymentStatus(transactionHash);

    if (!status) {
      return c.json({ error: 'Payment not found' }, 404);
    }

    return c.json(status);
  } catch (error) {
    return c.json({ error: 'Failed to fetch payment status' }, 500);
  }
});
