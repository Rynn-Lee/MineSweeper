import { assets } from '@/assets/assets'
import { services } from '@/services'
import styles from '@styles/loading.module.sass'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading({setters, getters}: any){
  const [fade, setFade] = useState(false)

  useEffect(()=>{
    const setts = {
      particles: services.localstorage.getItem('particles', true),
      darkTheme: services.localstorage.getItem('darkTheme', true),
      background: services.localstorage.getItem('background', true),
      localAccount: services.localstorage.getItem('localAccount', true)
    }
    if(!getters.settings.darkTheme){
      setters.setSettings({
        particles: setts.particles,
        darkTheme: setts.darkTheme,
        background: setts.background,
        localAccount: setts.localAccount
      })
    }
    document.documentElement.setAttribute("dark-theme", `${setts.darkTheme}`);
    setTimeout(()=>setters.setIsSetup(), 100)
  }, [])

  return(
    <div className={`${styles.loading} ${fade ? styles.fade : ""}`}>
      <Image src={assets.loading} alt="loading" width={100} height={100} priority/>
    </div>
  )
}