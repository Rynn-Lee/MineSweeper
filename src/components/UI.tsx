import styles from '@styles/ui.module.sass'
import { useRef, useEffect, useState } from 'react'

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

export function Choose({initial, variants}: any){
  const [chooseVariant, setChooseVariant] = useState(variants[initial])
  return(
    <div>
      {variants.map((item: any)=>(
        <span key={item} style={{padding: "5px 10px", background: `var(--var-buttons-bg)`, borderRadius: "10px", margin: "0px 5px"}}>{item}</span>
      ))}
    </div>
  )
}

export function LevelProgress({data}: any){
  return(
    <div className={styles.levelProgress}>
      <span style={{width: data + "%"}}/><span style={{width: 100 - data + "%"}}/>
    </div>
  )
}