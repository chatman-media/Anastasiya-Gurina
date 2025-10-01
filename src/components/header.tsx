"use client"

import { ThemeSwitcher } from './theme-switcher'
import { LanguageSwitcher } from './language-switcher'
import { useTranslation } from 'react-i18next'

export function Header() {
  const { t } = useTranslation()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/80 to-fuchsia-500/80 text-white shadow-md">
            <span className="text-sm font-bold">AG</span>
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
            {t('name')}
          </h1>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="group relative rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/40"
          >
            {t('about')}
            <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 bg-primary/70 transition-transform duration-200 group-hover:scale-x-100" />
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, 'gallery')}
            className="group relative rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/40"
          >
            {t('gallery')}
            <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 bg-primary/70 transition-transform duration-200 group-hover:scale-x-100" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="group relative rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:bg-muted/40"
          >
            {t('contact')}
            <span className="pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] scale-x-0 bg-primary/70 transition-transform duration-200 group-hover:scale-x-100" />
          </a>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2 rounded-xl bg-muted/40 px-2 py-1 backdrop-blur">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}