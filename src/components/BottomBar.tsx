import { assets } from '@/assets/assets'
import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LevelProgress } from './UI'

export default function BottomBar({setters, getters}: any){
  const [icon, setIcon] = useState(getters.isDarkTheme)
  useEffect(()=>{
    getters.settings.darkTheme
      ? setIcon(assets.settingsLight)
      : setIcon(assets.settingsDark)
  }, [getters.settings.darkTheme])

  return(
    <>
      {getters.settings.darkTheme != null ?
      <div className={styles.bottombar}>
        <div>
          <span className={styles.icons} onClick={()=>setters.setOpenSettings(!getters.openSettings)}>
            <Image src={icon} alt="settings" width={20} height={20}/>
          </span>
        </div>
        <div className={styles.userStats}>
          <div>
            <span>{getters.userData.login}</span>
            <div><span>Lvl {getters.userData.lvl}</span><LevelProgress getters={getters}/></div>
          </div>
          <span><Image src="https://avatars.githubusercontent.com/u/38906839?v=4" alt="pfp" width={35} height={35} className={styles.profileImage}/></span>
        </div>
      </div> : <></>}
    </>
  )
}