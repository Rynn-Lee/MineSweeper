import styles from '@styles/ui.module.sass'
import { get } from 'http'
import { useEffect, useRef, useState } from 'react'

export function Toggle({state, fn}: any){
  return(
    <button className={`${styles.toggle} ${state ? styles.toggleOn : styles.toggleOff}`} onClick={fn}>{state ? "ON" : "OFF"}</button>
  )
}

export function LevelProgress({getters, setters}: any){
  const [lvlState, setLvlState] = useState({
    xp: getters?.userData?.experience,
    xpNeeded: 100,
    lvl: 1,
    wide: 0
  })

  useEffect(()=>{

  }, [getters.userData.lvl])

  const countLvl = () => {
    let lvl = {
      xp: lvlState.xp,
      xpNeeded: 100,
      lvl: 1,
      wide: 0
    }

    while(lvl.xp >= lvl.xpNeeded){
      lvl.xp = lvl.xp - lvl.xpNeeded
      lvl.xpNeeded += 150
      lvl.lvl += 1
    }
    lvl.wide = (lvl.xp/lvl.xpNeeded)*100
    setLvlState(lvl)
    console.log("LVL:", lvl)
  }

  useEffect(()=>{
    countLvl()
  }, [])

  return(
    <div className={styles.levelProgress}>
      <span style={{width: lvlState.wide + "%"}}/><span style={{width: 100 - lvlState.wide + "%"}}/>
    </div>
  )
}