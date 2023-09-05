import { assets } from '@/assets/assets'
import { services } from '@/services'
import { CountExperience } from '@/utils/CountExperience'
import styles from '@styles/loading.module.sass'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Loading({setters, getters}: any){
  useEffect(()=>{
    const expData: any = CountExperience(getters.userData.experience)
    const setts = {
      particles: services.localstorage.getItem('particles', true),
      darkTheme: services.localstorage.getItem('darkTheme', true),
      background: services.localstorage.getItem('background', true),
      transparency: services.localstorage.getItem('transparency', true),
      userData: services.enc.decodeObject(services.localstorage.getItem('userData'))
    }
    if(!getters.settings.darkTheme){
      setters.setSettings({
        ...getters.settings,
        particles: setts.particles,
        darkTheme: setts.darkTheme,
        background: setts.background,
        transparency: setts.transparency,
      })
      setters.setUserData({
        ...getters.userData,
        ...expData,
        ...setts.userData
      })
    }
    console.log(setts.userData)
    document.documentElement.setAttribute("dark-theme", `${setts.darkTheme}`);
    document.documentElement.setAttribute("transparency", `${setts.transparency}`);
    setTimeout(()=>setters.setIsSetup(), 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className={`${styles.loading}`}>
      <Image src={assets.loading} alt="loading" width={100} height={100} priority/>
    </div>
  )
}