"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";
import { LanguageSwitcher } from "./language-switcher";
import { LayoutSwitcher, useLayout } from "./layout-switcher";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export function Header() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isFullWidth } = useLayout();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Показываем header если скроллим вверх или находимся в самом верху
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скрываем header если скроллим вниз и прошли больше 100px
        setIsVisible(false);
        setMobileMenuOpen(false); // Закрываем мобильное меню при скролле
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Закрываем меню после клика
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-20 opacity-0 pointer-events-none"
      }`}
      style={{
        width: isFullWidth ? "calc(100% - 1rem)" : "calc(100% - 2rem)",
        maxWidth: isFullWidth ? "none" : "720px",
        transition:
          "max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className="relative rounded-2xl border border-border/40 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="flex h-12 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/90 to-fuchsia-500/90 text-white shadow-md">
              <span className="text-xs font-bold">AG</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/50"
            >
              {t("about")}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/50"
            >
              {t("gallery")}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-md px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/50"
            >
              {t("contact")}
            </a>
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <div className="hidden md:flex items-center gap-1">
              <LanguageSwitcher />
              <div className="w-px h-4 bg-border/50 mx-1" />
              <LayoutSwitcher />
              <div className="w-px h-4 bg-border/50 mx-1" />
              <ThemeSwitcher />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-3 px-4 space-y-2">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {t("about")}
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, "gallery")}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {t("gallery")}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {t("contact")}
            </a>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 pt-2 border-t border-border/40">
              <LanguageSwitcher />
              <LayoutSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
