"use client"

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { useTranslation } from 'react-i18next'
import PhotoAlbum from 'react-photo-album'
import 'react-photo-album/styles.css'

interface PhotoGalleryProps {
  photos: string[]
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const { t } = useTranslation()
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  // Convert photos to react-photo-album format
  const albumPhotos = photos.map((src, index) => ({
    src,
    width: 800,
    height: 600,
    alt: `${t('gallery')} ${index + 1}`,
  }))

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('gallery')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <PhotoAlbum
          photos={albumPhotos}
          layout="rows"
          targetRowHeight={200}
          onClick={({ index }) => setSelectedPhoto(photos[index])}
          className="cursor-pointer"
          sizes={(containerWidth) => {
            if (containerWidth < 640) return '100vw'
            if (containerWidth < 1024) return '50vw'
            return '33vw'
          }}
          componentsProps={{
            containerProps: {
              className: 'gap-2 md:gap-4'
            },
            imageProps: {
              className: 'rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
            }
          }}
        />

        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <img
                src={selectedPhoto}
                alt={t('gallery')}
                className="max-w-full max-h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTUwSDIyNVYyMDBIMTc1VjE1MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}