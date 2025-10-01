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
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">{t('name')}</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="transition-colors hover:text-foreground/80">
            {t('about')}
          </a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')} className="transition-colors hover:text-foreground/80">
            {t('gallery')}
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="transition-colors hover:text-foreground/80">
            {t('contact')}
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}