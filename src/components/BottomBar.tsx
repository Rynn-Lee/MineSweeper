import { assets } from '@/assets/assets'
import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'

export default function BottomBar({setOpenSettings, openSettings}: any){
  return(
    <div className={styles.bottombar}>
      <div>
        <span className={styles.icons} onClick={()=>setOpenSettings(!openSettings)}>
          <Image src={assets.settings} alt="settings" width={20} height={20}/>
        </span>
      </div>
      <div>
        Login First!
      </div>
    </div>
  )
}