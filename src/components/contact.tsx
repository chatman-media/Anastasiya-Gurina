"use client"

import { useTranslation } from 'react-i18next'
import { Mail, Phone, Instagram } from 'lucide-react'
import { Button } from './ui/button'

export function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    { icon: Mail, label: 'email', value: 'anastasiya.gurina@email.com', href: 'mailto:anastasiya.gurina@email.com' },
    { icon: Phone, label: 'phone', value: '+7 (XXX) XXX-XX-XX', href: 'tel:+7XXXXXXXXXX' },
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/stories/gurina___/', username: '@gurina___' },
    // { icon: Facebook, label: 'Facebook', href: '#', username: 'Anastasiya Gurina' },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('contact')}</h3>
              
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t(item.label)}</p>
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t('social_media')}</h3>
              
              {socialLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.username}
                      </a>
                    </div>
                  </div>
                )
              })}
              
              <div className="pt-4">
                <Button className="w-full" asChild>
                  <a href="mailto:anastasiya.gurina@email.com">
                    {t('contact_me')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}