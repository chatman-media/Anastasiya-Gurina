import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { PhotoGallery } from "./components/photo-gallery";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";

// Фотографии из папки public/photos
// В dev режиме используем /photos/, в production - с base path
const baseUrl = import.meta.env.BASE_URL;

const portfolioPhotos = [
  `${baseUrl}photos/DSC09940.jpg`,
  `${baseUrl}photos/DSC09941.jpg`,
  `${baseUrl}photos/DSC09945.jpg`,
  `${baseUrl}photos/DSC09947.jpg`,
  `${baseUrl}photos/DSC09951.jpg`,
  `${baseUrl}photos/DSC09952.jpg`,
  `${baseUrl}photos/DSC09957.jpg`,
  `${baseUrl}photos/DSC09959.jpg`,
  `${baseUrl}photos/DSC09961.jpg`,
  `${baseUrl}photos/DSC09963.jpg`,
  `${baseUrl}photos/DSC09964.jpg`,
  `${baseUrl}photos/DSC09967.JPG`,
  `${baseUrl}photos/DSC09969.jpg`,
  `${baseUrl}photos/DSC09972.jpg`,
  `${baseUrl}photos/DSC09974.jpg`,
  `${baseUrl}photos/DSC09977.jpg`,
  `${baseUrl}photos/DSC09978.jpg`,
  `${baseUrl}photos/DSC09982.jpg`,
  `${baseUrl}photos/DSC09984.jpg`,
  `${baseUrl}photos/DSC09985.jpg`,
  `${baseUrl}photos/DSC09988.jpg`,
  `${baseUrl}photos/DSC09989.jpg`,
  `${baseUrl}photos/DSC09991.jpg`,
  `${baseUrl}photos/DSC09993.jpg`,
  `${baseUrl}photos/DSC09995.jpg`,
  `${baseUrl}photos/DSC09997.jpg`,
  `${baseUrl}photos/DSC09999.jpg`,
];

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
  );
}

export default App;
