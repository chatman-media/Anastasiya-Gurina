'use client';

import { useRouter } from 'next/navigation';
import { useTelegramWebApp } from './providers/telegram-provider';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import { nfts } from '@/lib/nfts';
import { NFTCard } from '@/components/nft-card';

export default function HomePage() {
  const router = useRouter();
  const { user } = useTelegramWebApp();
  const tonAddress = useTonAddress();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h1 className="text-2xl font-bold">Anastasiya Gurina</h1>
              <p className="text-sm text-muted-foreground">NFT Photography Gallery</p>
            </div>
            <TonConnectButton />
          </div>

          {/* User Info */}
          {user && (
            <div className="bg-card rounded-lg p-3 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Welcome back</p>
                  <p className="font-medium text-sm">
                    {user.firstName} {user.lastName}
                    {user.username && (
                      <span className="text-muted-foreground ml-2">@{user.username}</span>
                    )}
                  </p>
                </div>
                {tonAddress && (
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-0.5">Wallet</p>
                    <p className="font-mono text-xs text-primary">
                      {tonAddress.slice(0, 6)}...{tonAddress.slice(-4)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Info Banner */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 mb-6 border border-primary/20">
          <h2 className="font-semibold mb-1">Exclusive Photography NFTs</h2>
          <p className="text-sm text-muted-foreground">
            Collect unique digital art on the TON blockchain. Each NFT is a limited edition piece.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <p className="text-2xl font-bold text-primary">{nfts.length}</p>
            <p className="text-xs text-muted-foreground">Total NFTs</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <p className="text-2xl font-bold text-primary">
              {nfts.filter((n) => n.available).length}
            </p>
            <p className="text-xs text-muted-foreground">Available</p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border text-center">
            <p className="text-2xl font-bold text-primary">5</p>
            <p className="text-xs text-muted-foreground">TON Each</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nfts.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                onClick={() => router.push(`/nft/${nft.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-muted-foreground space-y-1 py-6">
          <p>All NFTs are minted on the TON blockchain</p>
          <p>Photographer: Anastasiya Gurina © 2024</p>
        </div>
      </div>
    </div>
  );
}
