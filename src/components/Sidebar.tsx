import styles from '@styles/sidebar.module.sass'
import { Toggle } from './UI'

export default function Sidebar({openSettings, setOpenSettings, setParticles, particles}: any){
  return(
    <div className={`${styles.sidebarWrapper}`} style={openSettings ? {width: '100vw'} : {width: 'max-content'}}>
      <div className={styles.closingArea} style={openSettings ? {display: 'block'} : {display: 'none'}} onClick={()=>setOpenSettings(false)}/>

      <div className={`${styles.sidebar} ${openSettings ? styles.sidebarOpen : ""}`}>
        <span className={styles.title}>VISUALS</span>
        <div className={styles.option}><span>Background particles</span> <Toggle state={particles} text={"Toggle"} fn={setParticles}/></div>
      </div>
    </div>
  )
}