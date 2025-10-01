"use client"

import { useTranslation } from 'react-i18next'
import { Camera, Palette, Users, Award } from 'lucide-react'

export function About() {
  const { t } = useTranslation()

  const skills = [
    { icon: Camera, label: 'photography' },
    { icon: Palette, label: 'editing' },
    { icon: Users, label: 'composition' },
    { icon: Award, label: 'lighting' },
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about')}</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium">{t('name')}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about_text')}
              </p>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('skills')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="font-medium">{t(skill.label)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}