"use client"

import { useTheme } from 'next-themes'
import { Switch } from './ui/switch'
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import * as motion from "motion/react-client"

const ThemeTogggle = () => {

  const {theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if(!mounted) {
    return <div className='flex items-center space-x-2'>
      <Sun className={`h-4 w-4 transition-all duration-300 ${theme == "light" ? "text-yellow-500" : "text-muted-foreground"}`} />
       <Switch disabled />
       <Moon className={`h-4 w-4 transition-all duration-300 ${theme == "dark" ? "text-blue-400" : "text-muted-foreground"}`} />
    </div>
  }

  const handleThemeChange = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light"
    // Use setTimeout to ensure smooth transition
    setTheme(newTheme)
  }

  return (
    <div className='flex items-center space-x-2 transition-all duration-300'>
      <motion.div
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center"
      >
        <Sun className={`h-4 w-4 transition-all duration-300 ${theme == "light" ? "text-yellow-500 opacity-100" : "text-muted-foreground opacity-60"}`} />
      </motion.div>
      <Switch 
        checked={theme == "dark"} 
        onCheckedChange={handleThemeChange}
        className="transition-all duration-300"
      />
      <motion.div
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center"
      >
        <Moon className={`h-4 w-4 transition-all duration-300 ${theme == "dark" ? "text-blue-400 opacity-100" : "text-muted-foreground opacity-60"}`} />
      </motion.div>
    </div>
  )
}

export default ThemeTogggle