import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { PhotoGallery } from "./components/photo-gallery";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import { LayoutProvider } from "./components/layout-switcher";

// Фотографии из папки public/photos
// Правильно формируем путь с BASE_URL
const base = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + "/";

const portfolioPhotos = [
  `${base}photos/DSC09940.jpg`,
  `${base}photos/DSC09941.jpg`,
  `${base}photos/DSC09945.jpg`,
  `${base}photos/DSC09947.jpg`,
  `${base}photos/DSC09951.jpg`,
  `${base}photos/DSC09952.jpg`,
  `${base}photos/DSC09957.jpg`,
  `${base}photos/DSC09959.jpg`,
  `${base}photos/DSC09961.jpg`,
  `${base}photos/DSC09963.jpg`,
  `${base}photos/DSC09964.jpg`,
  `${base}photos/DSC09967.JPG`,
  `${base}photos/DSC09969.jpg`,
  `${base}photos/DSC09972.jpg`,
  `${base}photos/DSC09974.jpg`,
  `${base}photos/DSC09977.jpg`,
  `${base}photos/DSC09978.jpg`,
  `${base}photos/DSC09982.jpg`,
  `${base}photos/DSC09984.jpg`,
  `${base}photos/DSC09985.jpg`,
  `${base}photos/DSC09988.jpg`,
  `${base}photos/DSC09989.jpg`,
  `${base}photos/DSC09991.jpg`,
  `${base}photos/DSC09993.jpg`,
  `${base}photos/DSC09995.jpg`,
  `${base}photos/DSC09997.jpg`,
  `${base}photos/DSC09999.jpg`,
];

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LayoutProvider>
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
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default App;
