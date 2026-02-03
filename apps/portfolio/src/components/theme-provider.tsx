'use client'

import * as React from "react"
import { useContext, useState, useEffect } from "react"

type Theme = 'dark' | 'light' | 'system'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState | undefined>(initialState)

// Wrapper component that applies theme classes without direct DOM manipulation
function ThemeWrapper({ theme, children }: { theme: Theme; children: React.ReactNode }) {
  const [appliedTheme, setAppliedTheme] = useState<Theme>('light') // Default to light initially

  useEffect(() => {
    if (theme === 'system') {
      // Detect system theme on client
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setAppliedTheme(systemTheme)
    } else {
      setAppliedTheme(theme)
    }
  }, [theme])

  return (
    <div className={`theme-${appliedTheme}`} data-theme={appliedTheme}>
      {children}
    </div>
  )
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [storageKey])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      <ThemeWrapper theme={theme}>
        <div className="transition-colors duration-300 ease-in-out">
          {children}
        </div>
      </ThemeWrapper>
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}