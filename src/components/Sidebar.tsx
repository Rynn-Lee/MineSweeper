import styles from '@styles/sidebar.module.sass'
import { StepToggle, Toggle } from './UI'
import React from 'react'

export default function SidebarMemo({setters, getters}: any){
  const changeScale = (scale: number) => setters.toggles.toggleScale(scale)

  return(
    <div className={`${styles.sidebarWrapper}`} style={getters.windows.settings ? {width: '100vw'} : {width: 'max-content'}}>
      <div className={styles.closingArea} style={getters.windows.settings ? {display: 'block'} : {display: 'none'}} onClick={()=>setters.setWindows({...getters.windows, settings: false})}/>

      <div className={`${styles.sidebar} ${getters.windows.settings ? styles.sidebarOpen : ""}`}>
        <span className={styles.title}>VISUALS | <span data-impact="high" className={styles.impact}>•••</span> - gpu impact</span>
        <div className={styles.option}>
          <span>Background particles</span>
          <span className={styles.impact}><span data-impact="high">•••</span><Toggle state={getters.settings.particles} fn={setters.toggles.toggleParticles}/></span>
        </div>
        <div className={styles.option}>
          <span>Transparency</span>
          <span className={styles.impact}><span data-impact="low">•</span><Toggle state={getters.settings.transparency} fn={setters.toggles.toggleTransparency}/></span>
        </div>
        <div className={styles.option}>
          <span>Animations</span>
          <span className={styles.impact}><span data-impact="low">•</span><Toggle state={getters.settings.animations} fn={setters.toggles.toggleAnimations}/></span>
        </div>
        <div className={styles.option}>
          <span>Background Image</span>
          <span className={styles.impact}><Toggle state={getters.settings.background} fn={setters.toggles.toggleBackground}/></span>
        </div>
        <div className={styles.option}>
          <span>Dark Theme</span>
          <span className={styles.impact}><Toggle state={getters.settings.darkTheme} fn={setters.toggles.toggleTheme}/></span>
        </div>

        
        <span className={styles.title}>INTERFACE</span>
        <div className={styles.option}>
          <span>Language</span>
          <span className={styles.impact}>Coming Soon!</span>
        </div>
      </div>
    </div>
  )
}


export const Sidebar = React.memo(SidebarMemo)