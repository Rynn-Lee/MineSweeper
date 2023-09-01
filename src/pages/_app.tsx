import Particlesbg from '@/configs/ParticlesBG'
import AppLayout from '@/layouts/AppLayout'
import { services } from '@/services'
import '@/styles/index.sass'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'


export default function App({ Component, pageProps }: AppProps) {
  const [particles, setParticles] = useState(true)
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const toggleParticles = () => {
    setParticles(!particles)
    services.localstorage.setItem('particles', !particles)
  }

  useEffect(()=>{
    setParticles(services.localstorage.getItem('particles'))
  }, [])

  return(
    <AppLayout setParticles={toggleParticles} particles={particles} isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}>
      {particles ? <Particlesbg isDarkTheme={isDarkTheme}/> : <></>}
      <Component {...pageProps} />
    </AppLayout>
  )
}
