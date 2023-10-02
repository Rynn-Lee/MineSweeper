import { StepToggle, Toggle } from "../UI";

export default function OtherSettings({styles, getters, setters}: any){
  return(
    <> 
    <span className={styles.title}>OTHER SETTINGS</span>

    <div className={styles.option}>
      <span>Reset Warnings</span>
      <span className={styles.button} onClick={()=>setters.setSettings({...getters.settings, warningsIgnoreList: []})}>reset</span>
    </div>
    </>
  )
}