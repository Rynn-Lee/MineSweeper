import Particlesbg from '@/configs/ParticlesBG'
import AppLayout from '@/layouts/AppLayout'
import { services } from '@/services'
import '@/styles/index.sass'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  const [particles, setParticles] = useState(true)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>()

  const toggleParticles = () => {
    setParticles(!particles)
    services.localstorage.setItem('particles', !particles)
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    document.documentElement.setAttribute("dark-theme", `${!isDarkTheme}`);
    services.localstorage.setItem('darkTheme', !isDarkTheme)
  }

  useEffect(()=>{
    setParticles(services.localstorage.getItem('particles'))

    const themePreload = services.localstorage.getItem('darkTheme') || true
    setParticles(themePreload)
    document.documentElement.setAttribute("dark-theme", `${!themePreload}`);
  }, [])

  return(
    <AppLayout
      setParticles={toggleParticles}
      particles={particles}
      isDarkTheme={isDarkTheme}
      setIsDarkTheme={setIsDarkTheme}
      toggleTheme={toggleTheme}>
      {particles ? <Particlesbg isDarkTheme={isDarkTheme}/> : <></>}
      <Component {...pageProps} />
    </AppLayout>
  )
}
