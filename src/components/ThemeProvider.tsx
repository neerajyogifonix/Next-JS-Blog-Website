"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider 
      {...props} 
      disableTransitionOnChange={false}
      enableColorScheme={true}
      enableSystem={true}
      storageKey="theme-preference"
    >
      {children}
    </NextThemesProvider>
  )
}