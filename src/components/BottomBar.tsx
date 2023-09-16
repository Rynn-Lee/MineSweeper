import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'
import React from 'react'
import UserStats from './Bottombar/UserStats'

export default function BottomBarMemo({setters, getters}: any){
  return(
    <>
      <div className={styles.bottombar}>
        <div>
          <span className={styles.icons} onClick={()=>setters.setWindows({...getters.windows, settings: !getters.windows.settings})}>
            <Image src={getters?.settings?.assets?.settings} alt="settings" width={20} height={20}/>
          </span>
        </div>
        <UserStats getters={getters} setters={setters}/>
      </div>
    </>
  )
}

export const BottomBar = React.memo(BottomBarMemo)