import styles from '@styles/bottombar.module.sass'
import Image from 'next/image'
import { useState } from 'react'

export default function AccountSettings({getters, setters}: any){
  const [newUsername, setNewUername]: any = useState()

  const setAccountName = () => {
    if(!newUsername || newUsername.length < 4){return}
    setters.setUserData({...getters.userData, accountName: newUsername})
  }

  return(
    <>
      <div className={styles.accountSettingsWrapper} style={getters.windows.account ? {display: 'block'} : {display: 'none'}} onClick={()=>setters.setWindows({...getters.windows, account: false})}></div>
      <div className={`${styles.accountSettings} ${!getters.windows.account ? styles.hideAccounts : ""}`}>
        <div className={styles.section}>
          <span className={styles.title}>Change Nickname</span>
          <div>
            <input type="text" className={styles.input} value={newUsername} onChange={(e)=>setNewUername(e.target.value.replace(/[^A-Za-z0-9]/,''))} maxLength={21}/>
            <button onClick={setAccountName}><Image src={getters?.settings?.assets?.check} alt="check" width={20} height={20}/></button>
          </div>
        </div>
      </div>
    </>
  )
}