import { A } from "@solidjs/router";
import { ThemeToggle } from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";

export default function Home() {
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

      {/* Hero Section */}
      <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Создаю современные веб-приложения с использованием cutting-edge технологий.
            Специализируюсь на React, SolidJS, TypeScript и Node.js.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <A
              href="/about"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 text-lg"
            >
              Узнать больше
            </A>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 text-lg">
              Мои проекты
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div class="grid md:grid-cols-3 gap-8 mt-20">
          <div class="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Code icon"
              >
                <title>Clean code</title>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Чистый код</h3>
            <p class="text-muted-foreground">
              Пишу поддерживаемый и масштабируемый код с использованием лучших практик.
            </p>
          </div>

          <div class="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Performance icon"
              >
                <title>High performance</title>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Производительность</h3>
            <p class="text-muted-foreground">
              Оптимизирую приложения для максимальной скорости и эффективности.
            </p>
          </div>

          <div class="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Design icon"
              >
                <title>Modern design</title>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Современный дизайн</h3>
            <p class="text-muted-foreground">Создаю красивые и интуитивно понятные интерфейсы.</p>
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
