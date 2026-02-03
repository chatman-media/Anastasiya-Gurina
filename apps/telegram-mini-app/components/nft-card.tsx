'use client';

import Image from 'next/image';
import { NFT } from '@/lib/nfts';

interface NFTCardProps {
  nft: NFT;
  onClick?: () => void;
}

export function NFTCard({ nft, onClick }: NFTCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-200 hover:shadow-lg"
    >
      <div className="relative aspect-square bg-muted pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={nft.image}
            alt={nft.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
        {!nft.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center pointer-events-none">
            <span className="text-white font-medium">Sold Out</span>
          </div>
        )}
      </div>
      <div className="p-3 pointer-events-none">
        <h3 className="font-medium text-sm mb-1 truncate">{nft.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">#{nft.id}</span>
          <span className="text-sm font-bold text-primary">{nft.price} TON</span>
        </div>
      </div>
    </div>
  );
}
