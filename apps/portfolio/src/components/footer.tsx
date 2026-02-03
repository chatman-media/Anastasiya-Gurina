"use client"

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 md:px-6 py-8">
        <div className="text-center space-y-4">
          <div>
            <p className="text-lg font-semibold">{t('name')}</p>
            <p className="text-muted-foreground">{t('profession')}</p>
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              {t('about')}
            </a>
            <a href="#gallery" className="hover:text-foreground transition-colors">
              {t('gallery')}
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              {t('contact')}
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p suppressHydrationWarning>© {currentYear} {t('name')}. {t('footer_text')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}