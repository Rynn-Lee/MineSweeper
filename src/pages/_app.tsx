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
  const [isSetup, setIsSetup] = useState(true)
  const [settings, setSettings] = useState<settings>({
    particles: null,
    darkTheme: null,
    background: null,
  })

  const [toggles] = useState({
    toggleParticles: ()=>setSettings((prevSettings) => ({...prevSettings, particles: toggle.toggle(prevSettings.particles, 'particles')})),
    toggleTheme: ()=>setSettings((prevSettings) => ({...prevSettings, darkTheme: toggle.toggle(prevSettings.darkTheme, 'darkTheme', 'dark-theme')})),
    toggleBackground: ()=>setSettings((prevSettings) => ({...prevSettings, background: toggle.toggle(prevSettings.background, 'background')}))
  })

  return(
    <AppLayout
      toggles={toggles}
      settings={settings}
      setSettings={setSettings}
      isSetup={isSetup}
      setIsSetup={()=>setIsSetup(false)}>
      {settings.particles ? <Particlesbg darkTheme={settings.darkTheme}/> : <></>}
      <Component {...pageProps} />
    </AppLayout>
  )
}
