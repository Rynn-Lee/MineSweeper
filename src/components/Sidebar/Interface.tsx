import { Toggle } from "../UI";

export default function Interface({styles, getters, setters}: any){
  return(
    <> 
    <span className={styles.title}>INTERFACE</span>

    <div className={styles.option}>
      <span>Language</span>
      <span className={styles.impact}>Coming Soon!</span>
    </div>
    </>
  )
}