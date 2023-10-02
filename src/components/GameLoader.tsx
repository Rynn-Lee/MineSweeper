import { lightAssets, darkAssets } from '@/assets/assets'
import { services } from '@/services'
import { CountExperience } from '@/utils/CountExperience'
import styles from '@styles/loading.module.sass'
import { useEffect } from 'react'

export default function GameLoader({setters, getters}: any){
  useEffect(()=>{
    const expData: any = CountExperience(getters.userData.experience)
    const setts = {
      particles: services.localstorage.getItem('particles', false),
      darkTheme: services.localstorage.getItem('darkTheme', true),
      background: services.localstorage.getItem('background', true),
      transparency: services.localstorage.getItem('transparency', true),
      animations: services.localstorage.getItem('animations', true),
      slidingField: services.localstorage.getItem('slidingField', true),
      movingBackground: services.localstorage.getItem('movingBackground', true),
      fieldBouncing: services.localstorage.getItem('fieldBouncing', 650),
      userData: services.enc.decodeObject(services.localstorage.getItem('userData')),
      warningsIgnoreList: services.enc.decodeObject(services.localstorage.getItem('warningsIgnoreList', '[]')),
    }
    if(!getters.settings.darkTheme){
      setters.setSettings({
        ...getters.settings,
        particles: setts.particles,
        darkTheme: setts.darkTheme,
        background: setts.background,
        transparency: setts.transparency,
        animations: setts.animations,
        slidingField: setts.slidingField,
        movingBackground: setts.movingBackground,
        fieldBouncing: setts.fieldBouncing,
        warningsIgnoreList: setts.warningsIgnoreList,
        assets: setts.darkTheme ? lightAssets : darkAssets
      })
      setters.setUserData({
        ...getters.userData,
        ...expData,
        ...setts.userData
      })
    }
    document.documentElement.setAttribute("dark-theme", `${setts.darkTheme}`);
    document.documentElement.setAttribute("transparency", `${setts.transparency}`);
    document.documentElement.setAttribute("animations", `${setts.animations}`);
    setTimeout(()=>setters.setIsSetup(), 500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div className={`${styles.loading}`}>
      {/* <Image src={getters.assets.loading} alt="loading" width={100} height={100} priority/> */}
    </div>
  )
}