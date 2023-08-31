import styles from '@styles/ui.module.sass'

export function Toggle({state, fn}: any){
  return(
    <button className={`${styles.toggle} ${state ? styles.toggleOn : styles.toggleOff}`} onClick={fn}>{state ? "ON" : "OFF"}</button>
  )
}
