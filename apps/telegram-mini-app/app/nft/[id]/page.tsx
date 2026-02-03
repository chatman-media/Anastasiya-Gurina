'use client';

import { use } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { nfts } from '@/lib/nfts';
import { useTelegramWebApp } from '@/app/providers/telegram-provider';
import { useTonAddress } from '@tonconnect/ui-react';

export default function NFTDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { webApp } = useTelegramWebApp();
  const tonAddress = useTonAddress();

  const nft = nfts.find((n) => n.id === parseInt(id));

  if (!nft) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">NFT Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="text-primary hover:underline"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  const handlePurchase = () => {
    if (!tonAddress) {
      webApp?.showAlert('Please connect your TON wallet first');
      return;
    }

    if (!nft.available) {
      webApp?.showAlert('This NFT is no longer available');
      return;
    }

    // TODO: Implement purchase flow with backend API
    webApp?.showConfirm(
      `Purchase "${nft.title}" for ${nft.price} TON?`,
      (confirmed) => {
        if (confirmed) {
          webApp?.showAlert('Coming soon! Payment integration will be available soon.');
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => router.push('/')}
            className="text-muted-foreground hover:text-foreground relative z-20"
            aria-label="Back to gallery"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">NFT Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Image */}
        <div className="rounded-lg overflow-hidden bg-muted flex items-center justify-center" style={{ maxHeight: '50vh' }}>
          <Image
            src={nft.image}
            alt={nft.title}
            width={800}
            height={600}
            className="w-full h-auto max-h-[50vh] object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Info Card */}
        <div className="bg-card rounded-lg border border-border p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-2xl font-bold mb-1">{nft.title}</h2>
                <p className="text-sm text-muted-foreground">#{nft.id}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <p className="text-3xl font-bold text-primary">{nft.price} TON</p>
              </div>
            </div>
            <p className="text-muted-foreground">{nft.description}</p>
          </div>

          {/* Metadata */}
          <div className="pt-4 border-t border-border space-y-2">
            <h3 className="font-semibold mb-3">Details</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Photographer</p>
                <p className="font-medium">{nft.metadata.photographer}</p>
              </div>
              {nft.metadata.camera && (
                <div>
                  <p className="text-muted-foreground">Camera</p>
                  <p className="font-medium">{nft.metadata.camera}</p>
                </div>
              )}
              {nft.metadata.location && (
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">{nft.metadata.location}</p>
                </div>
              )}
              {nft.metadata.date && (
                <div>
                  <p className="text-muted-foreground">Date</p>
                  <p className="font-medium">{nft.metadata.date}</p>
                </div>
              )}
              <div>
                <p className="text-muted-foreground">Status</p>
                <p className={`font-medium ${nft.available ? 'text-green-600' : 'text-red-600'}`}>
                  {nft.available ? 'Available' : 'Sold Out'}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Blockchain</p>
                <p className="font-medium">TON</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          disabled={!nft.available}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
            nft.available
              ? 'bg-primary text-primary-foreground hover:opacity-90 active:scale-95'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          {nft.available ? `Purchase for ${nft.price} TON` : 'Sold Out'}
        </button>

        {!tonAddress && (
          <p className="text-center text-sm text-muted-foreground">
            Connect your wallet to purchase this NFT
          </p>
        )}
      </div>
    </div>
  );
}
