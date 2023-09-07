import styles from '@styles/ui.module.sass'
import { useRef, useEffect } from 'react'

export function Toggle({state, fn}: any){
  return(
    <button className={`${styles.toggle} ${state ? styles.toggleOn : styles.toggleOff}`} onClick={fn}>{state ? "ON" : "OFF"}</button>
  )
}

export function StepToggle({initial, from, to, by, fn}: any){
  const step = useRef(initial)
  const stepUp = () => {
    if((step.current + by) > to){
      step.current = from
    }
    else{
      step.current = step.current + by
    }
    fn(step.current)
  }
  const stepDown = () => {
    if((step.current - by) < from){
      step.current = to
    }
    else{
      step.current = step.current - by
    }
    fn(step.current)
  }

  useEffect(()=>{
    !step.current && (step.current = initial)
    console.log('called')
  }, [initial])

  return(
    <button className={styles.toggle} onClick={stepUp} onContextMenuCapture={(e)=>{e.preventDefault(); stepDown}}>{step.current}</button>
  )
}

export function LevelProgress({data}: any){
  return(
    <div className={styles.levelProgress}>
      <span style={{width: data + "%"}}/><span style={{width: 100 - data + "%"}}/>
    </div>
  )
}