import Image from "next/image";
import { LevelProgress } from "../UI";
import styles from '@styles/bottombar.module.sass'

export default function UserStats({getters, setters}: any){
  return(
    <div className={styles.userStats} onClick={()=>setters.setWindows({...getters.windows, account: !getters.windows.account})}>
      <div>
        <div className={styles.exp}><span className={styles.exp}>{getters.userData.xpLeft}/{getters.userData.xpNeeded}xp</span><span>{getters.userData.accountName}</span></div>
        <div><span className={styles.lvl}>Lvl {getters.userData.lvl}</span><LevelProgress data={getters?.userData?.wide}/></div>
      </div>
      <span><Image src="https://avatars.githubusercontent.com/u/38906839?v=4" alt="pfp" width={40} height={40} className={styles.profileImage}/></span>
    </div>
  )
}