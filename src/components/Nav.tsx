import { A, useLocation } from "@solidjs/router";
import { ThemeToggle } from "~/components/theme-toggle";

export default function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav class="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-8">
            <A
              href="/"
              class="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              Anastasiya Gurina
            </A>
            <div class="hidden md:flex items-center space-x-6">
              <A
                href="/"
                class={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Главная
              </A>
              <A
                href="/about"
                class={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Обо мне
              </A>
              <A
                href="#"
                class="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                Проекты
              </A>
              <A
                href="#"
                class="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                Контакты
              </A>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
