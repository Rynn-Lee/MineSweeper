import styles from '@styles/sidebar.module.sass'
import React from 'react'
import Visuals from './Sidebar/Visuals'
import Game from './Sidebar/Game'
import Interface from './Sidebar/Interface'

export default function Sidebar({setters, getters}: any){
  return(
    <div className={`${styles.sidebarWrapper}`} style={getters.windows.settings ? {width: '100vw'} : {width: 'max-content'}}>
      <div className={styles.closingArea} style={getters.windows.settings ? {display: 'block'} : {display: 'none'}} onClick={()=>setters.setWindows({...getters.windows, settings: false})}/>
      <div className={`${styles.sidebar} ${getters.windows.settings ? styles.sidebarOpen : ""}`}>
        <Visuals
          styles={styles}
          getters={getters}
          setters={setters}/>
        <Game
          styles={styles}
          getters={getters}
          setters={setters}/>
        <Interface
          styles={styles}
          getters={getters}
          setters={setters}/>
      </div>
    </div>
  )
}


// export const Sidebar = React.memo(SidebarMemo)