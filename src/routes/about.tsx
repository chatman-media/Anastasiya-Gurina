import { A } from "@solidjs/router";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";

export default function About() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header class="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-4">
              <h1 class="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Anastasiya Gurina
              </h1>
            </div>
            <div class="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* About Content */}
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent">
            Обо мне
          </h1>

          <div class="bg-card rounded-lg p-8 border border-border shadow-sm">
            <div class="prose prose-lg dark:prose-invert max-w-none">
              <p class="text-lg text-muted-foreground mb-6">
                Привет! Я Анастасия - Full Stack Developer с страстью к созданию красивых и
                функциональных веб-приложений.
              </p>

              <h2 class="text-2xl font-semibold mb-4">Мои навыки</h2>
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 class="text-lg font-semibold mb-3">Frontend</h3>
                  <ul class="space-y-2 text-muted-foreground">
                    <li>• React / SolidJS / Next.js</li>
                    <li>• TypeScript / JavaScript</li>
                    <li>• Tailwind CSS / Styled Components</li>
                    <li>• HTML5 / CSS3 / SASS</li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-3">Backend</h3>
                  <ul class="space-y-2 text-muted-foreground">
                    <li>• Node.js / Express</li>
                    <li>• Python / Django</li>
                    <li>• PostgreSQL / MongoDB</li>
                    <li>• REST APIs / GraphQL</li>
                  </ul>
                </div>
              </div>

              <h2 class="text-2xl font-semibold mb-4">Опыт работы</h2>
              <p class="text-muted-foreground mb-6">
                Более 5 лет опыта в разработке веб-приложений различной сложности. Работала как над
                проектами для стартапов, так и для крупных компаний.
              </p>

              <div class="flex flex-col sm:flex-row gap-4">
                <A
                  href="/"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  На главную
                </A>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Скачать резюме
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer class="border-t border-border mt-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="text-center text-muted-foreground">
            <p>&copy; 2024 Anastasiya Gurina. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
