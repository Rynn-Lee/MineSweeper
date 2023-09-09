import styles from '@styles/ui.module.sass'
import { useRef, useEffect, useState } from 'react'

export function Toggle({state, fn}: any){
  return(
    <button className={`${styles.toggle} ${state ? styles.toggleOn : styles.toggleOff}`} onClick={fn}>{state ? "ON" : "OFF"}</button>
  )
}

export function StepToggle({initial, from, to, by, fn, substract}: any){
  const step = useRef(initial)
  const stepUp = () => {
    if((step.current + by) > to){
      step.current = from
    }
    else{
      step.current = step.current + by
    }
    fn(Number(step.current))
  }
  const stepDown = () => {
    if((step.current - by) < from){
      step.current = to
    }
    else{
      step.current = step.current - by
    }
    fn(Number(step.current))
  }

  // useEffect(()=>{
  //   !step.current && (step.current = initial)
  // }, [initial])

  return(
    <button className={styles.toggle} onClick={stepUp} onContextMenuCapture={(e)=>{e.preventDefault(); stepDown}}>{substract ? to - step.current : step.current}</button>
  )
}

export function ChooseField({initial, variants, fn, mode}: any){
  const [chooseVariant, setChooseVariant] = useState({button: initial, text: variants[initial]})
  useEffect(()=>{
    const split = chooseVariant.text.toString().split('x')
    mode == "field" ? fn(split[0], split[1]) : fn(split[1])
  }, [chooseVariant])
  
  return(
    <div>
      {variants.map((item: any, index: number)=>(
        <span
          key={index}
          style={
            { padding: "5px 10px",
              borderRadius: "10px", margin: "0px 5px",
              background: chooseVariant.button == index ? "#aaaaaa90" : `var(--var-buttons-bg)`,
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--var-transition)'
            }}
            onClick={()=>setChooseVariant({button: index, text: item})}>{item}</span>
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