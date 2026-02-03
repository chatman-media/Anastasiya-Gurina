import type { Config } from '@ton/blueprint';

export const config: Config = {
  network: {
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    type: 'testnet',
    version: 'v2',
    key: process.env.TONCENTER_API_KEY || '',
  },
};
