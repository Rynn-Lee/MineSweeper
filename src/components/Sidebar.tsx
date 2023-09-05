import styles from '@styles/sidebar.module.sass'
import { Toggle } from './UI'

export default function Sidebar({setters, getters}: any){
  return(
    <div className={`${styles.sidebarWrapper}`} style={getters.openSettings ? {width: '100vw'} : {width: 'max-content'}}>
      <div className={styles.closingArea} style={getters.openSettings ? {display: 'block'} : {display: 'none'}} onClick={()=>setters.setOpenSettings(false)}/>

      <div className={`${styles.sidebar} ${getters.openSettings ? styles.sidebarOpen : ""}`}>
        <span className={styles.title}>VISUALS</span>
        <div className={styles.option}><span>Background particles</span> <Toggle state={getters.settings.particles} fn={setters.toggles.toggleParticles}/></div>
        <div className={styles.option}><span>Background Image</span> <Toggle state={getters.settings.background} fn={setters.toggles.toggleBackground}/></div>
        <div className={styles.option}><span>Dark Theme</span> <Toggle state={getters.settings.darkTheme} fn={setters.toggles.toggleTheme}/></div>
      </div>
    </div>
  )
}