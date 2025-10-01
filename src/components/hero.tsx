"use client"

import { useTranslation } from 'react-i18next'
import { ArrowDown } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background hero-gradient">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t('welcome')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            {t('profession')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t('description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg btn-primary" asChild>
              <a href="#gallery">
                {t('view_gallery')}
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg btn-outline" asChild>
              <a href="#contact">
                {t('contact_me')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}