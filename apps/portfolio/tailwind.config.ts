import type { Config } from 'tailwindcss';
import baseConfig from '@workspace/ui/tailwind.config';

export default {
  ...baseConfig,
  content: [
    './src/**/*.{ts,tsx}',
    './index.html',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  plugins: [
    ...(baseConfig.plugins || []),
  ],
} satisfies Config;
