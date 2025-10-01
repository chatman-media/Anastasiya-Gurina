import { Header } from './components/header'
import { Hero } from './components/hero'
import { About } from './components/about'
import { PhotoGallery } from './components/photo-gallery'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import { ThemeProvider } from './components/theme-provider'

// Фотографии из папки public/photos
const portfolioPhotos = [
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
  '/photos/DSC09969.jpg',
  '/photos/DSC09972.jpg',
  '/photos/DSC09974.jpg',
  '/photos/DSC09977.jpg',
  '/photos/DSC09978.jpg',
  '/photos/DSC09982.jpg',
  '/photos/DSC09984.jpg',
  '/photos/DSC09985.jpg',
  '/photos/DSC09988.jpg',
  '/photos/DSC09989.jpg',
  '/photos/DSC09991.jpg',
  '/photos/DSC09993.jpg',
  '/photos/DSC09995.jpg',
  '/photos/DSC09997.jpg',
  '/photos/DSC09999.jpg'
]

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <PhotoGallery photos={portfolioPhotos} />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App