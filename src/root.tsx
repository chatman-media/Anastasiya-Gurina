"use client"

import './index.css' // css import is automatically injected in exported server components
import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { PhotoGallery } from './components/photo-gallery'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { ThemeProvider } from './components/theme-provider'
import './lib/i18n'

export function Root(_props: { url: string }) {
  // Get photos from public/photos directory
  const photos = [
    '/photos/DSC09940.jpg',
    '/photos/DSC09941.jpg',
    '/photos/DSC09945.jpg',
    '/photos/DSC09947.jpg',
    '/photos/DSC09951.jpg',
    '/photos/DSC09952.jpg',
    '/photos/DSC09957.jpg',
    '/photos/DSC09959.jpg',
    '/photos/DSC09961.jpg',
    '/photos/DSC09963.jpg',
    '/photos/DSC09964.jpg',
    '/photos/DSC09967.JPG',
  ]

  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <PhotoGallery photos={photos} />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
