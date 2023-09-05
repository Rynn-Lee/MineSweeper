import styles from '@styles/sidebar.module.sass'
import { Toggle } from './UI'

export default function Sidebar({setters, getters}: any){
  return(
    <div className={`${styles.sidebarWrapper}`} style={getters.openSettings ? {width: '100vw'} : {width: 'max-content'}}>
      <div className={styles.closingArea} style={getters.openSettings ? {display: 'block'} : {display: 'none'}} onClick={()=>setters.setOpenSettings(false)}/>

      <div className={`${styles.sidebar} ${getters.openSettings ? styles.sidebarOpen : ""}`}>
        <span className={styles.title}>VISUALS | <span data-impact="high" className={styles.impact}>••••</span> - gpu imapct</span>
        <div className={styles.option}>
          <span>Background particles</span>
          <span className={styles.impact}><span data-impact="high">••••</span><Toggle state={getters.settings.particles} fn={setters.toggles.toggleParticles}/></span>
        </div>
        <div className={styles.option}>
          <span>Transparency</span>
          <span className={styles.impact}><span data-impact="low">••</span><Toggle state={getters.settings.transparency} fn={setters.toggles.toggleTransparency}/></span>
        </div>
        <div className={styles.option}>
          <span>Background Image</span>
          <span className={styles.impact}><span data-impact="none">•</span><Toggle state={getters.settings.background} fn={setters.toggles.toggleBackground}/></span>
        </div>
        <div className={styles.option}>
          <span>Dark Theme</span>
          <span className={styles.impact}><span data-impact="none">•</span><Toggle state={getters.settings.darkTheme} fn={setters.toggles.toggleTheme}/></span>
        </div>
      </div>
    </div>
  )
}