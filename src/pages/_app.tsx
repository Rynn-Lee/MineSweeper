import AppLayout from '@/layouts/AppLayout'
import type { AppProps } from 'next/app'
import { MemoizedParticles } from '@/configs/ParticlesBG'
import { useObserver } from '@/hooks/useObserver'
import { useToggles } from '@/hooks/useToggles'
import { useState } from 'react'
import '@/styles/index.sass'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface settings {
  particles?: boolean | null
  darkTheme?: boolean | null
  background?: boolean | null
  transparency?: boolean | null
  animations?: boolean | null
}
interface windows {
  settings?: boolean | null
  account?: boolean | null
}
interface userData {
  accountName?: string,
  experience?: number,
  xpNeeded?: number,
  xpLeft?: number,
  lvl?: number,
  image?: string
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const toggle: any = useToggles()
  const [isSetup, setIsSetup] = useState(true)
  const [settings, setSettings] = useState<settings>({})
  const [windows, setWindows] = useState<windows>({})
  const [userData, setUserData] = useState<userData>({
    accountName: 'NewMineSweeper',
    experience: 0,
    xpNeeded: 100,
    xpLeft: 0,
    lvl: 1,
    image: ''
  })

  const [toggles] = useState({
    toggleParticles: ()=>setSettings((prevSettings) => ({...prevSettings, particles: toggle.toggle(prevSettings.particles, 'particles')})),
    toggleTheme: ()=>setSettings((prevSettings) => ({...prevSettings, darkTheme: toggle.toggle(prevSettings.darkTheme, 'darkTheme', 'dark-theme')})),
    toggleBackground: ()=>setSettings((prevSettings) => ({...prevSettings, background: toggle.toggle(prevSettings.background, 'background')})),
    toggleTransparency: ()=>setSettings((prevSettings) => ({...prevSettings, transparency: toggle.toggle(prevSettings.transparency, 'transparency', 'transparency')})),
    toggleAnimations: ()=>setSettings((prevSettings) => ({...prevSettings, animations: toggle.toggle(prevSettings.animations, 'animations', 'animations')}))
  })

  const setters = {setWindows, toggles, setSettings, setIsSetup: ()=>setIsSetup(false), setUserData}
  const getters = {windows, settings, userData, isSetup}
  const observer = useObserver(userData, "userData", true)

  const variants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  return(
      <AppLayout
        toggles={toggles}
        setters={setters}
        getters={getters}>
        {settings.particles ? <MemoizedParticles darkTheme={settings.darkTheme}/> : <></>}
        <AnimatePresence mode='wait' initial={false}>
            <motion.div
              transition={{duration: getters.settings.animations ? 0.1 : 0}}
              key={router.route}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={variants}
              className='content'>
              <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
      </AppLayout>
  )
}
