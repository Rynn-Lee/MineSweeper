import { assets } from '@/assets/assets'
import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'

export default function BottomBar({setters, getters}: any){
  return(
    <div className={styles.bottombar}>
      <div>
        <span className={styles.icons} onClick={()=>setters.setOpenSettings(!getters.openSettings)}>
          <Image src={assets.settings} alt="settings" width={20} height={20}/>
        </span>
      </div>
      <div>
        Login First!
      </div>
    </div>
  )
}