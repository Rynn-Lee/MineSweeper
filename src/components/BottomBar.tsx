import { assets } from '@/assets/assets'
import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import UserStats from './Bottombar/UserStats'

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
        <UserStats getters={getters} setters={setters}/>
      </div> : <></>}
    </>
  )
}