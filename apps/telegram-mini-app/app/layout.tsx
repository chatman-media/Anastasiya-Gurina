import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TelegramProvider } from './providers/telegram-provider';
import { TonConnectProvider } from './providers/ton-connect-provider';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Anastasiya Gurina NFT Gallery',
  description: 'Buy exclusive NFT photography on TON blockchain',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async></script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <TelegramProvider>
          <TonConnectProvider>
            {children}
          </TonConnectProvider>
        </TelegramProvider>
      </body>
    </html>
  );
}
