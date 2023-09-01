import Particlesbg from '@/configs/ParticlesBG'
import { useToggles } from '@/hooks/useToggles'
import AppLayout from '@/layouts/AppLayout'
import { services } from '@/services'
import '@/styles/index.sass'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

interface settings {
  particles?: boolean | null
  darkTheme?: boolean | null
  background?: boolean | null
}

export default function App({ Component, pageProps }: AppProps) {
  const toggle: any = useToggles()
  const [settings, setSettings] = useState({
    particles: null,
    darkTheme: null,
    background: null
  })

  const toggleParticles = () => setSettings((prevSettings) => ({...prevSettings, particles: toggle.toggle(prevSettings.particles, 'particles')}))
  const toggleTheme = () => setSettings((prevSettings) => ({...prevSettings, darkTheme: toggle.toggle(prevSettings.darkTheme, 'darkTheme', 'dark-theme')}))
  const toggleBackground = () => setSettings((prevSettings) => ({...prevSettings, background: toggle.toggle(prevSettings.background, 'background')}))
  const [toggles] = useState({toggleBackground, toggleParticles, toggleTheme})

  useEffect(()=>{
    if(!settings.darkTheme){
      setSettings({
        particles: services.localstorage.getItem('particles'),
        darkTheme: services.localstorage.getItem('darkTheme'),
        background: services.localstorage.getItem('background')
      })
    }
    console.log(settings)
    document.documentElement.setAttribute("dark-theme", `${settings.darkTheme}`);
  }, [])

  return(
    <AppLayout
      toggles={toggles}
      settings={settings}
      setSettings={setSettings}>
      {settings.particles ? <Particlesbg darkTheme={settings.darkTheme}/> : <></>}
      <Component {...pageProps} />
    </AppLayout>
  )
}
