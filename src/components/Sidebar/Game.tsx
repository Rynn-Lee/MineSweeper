import { StepToggle, Toggle } from "../UI";

export default function Game({styles, getters, setters}: any){
  return(
    <> 
    <span className={styles.title}>GAME</span>

    <div className={styles.option}>
      <span>Sliding Field</span>
      <span className={styles.impact}><span data-impact="medium">••</span><Toggle state={getters.settings.slidingField} fn={setters.toggles.toggleSlidingField}/></span>
    </div>
    
    {getters.settings.animations
        ?<div className={styles.option}>
          <span>Field Returning Time</span>
          <span className={styles.impact}><span data-impact="low">•</span>
            <StepToggle
              initial={getters?.settings?.fieldBouncing}
              fn={setters.toggles.toggleFieldBouncing}
              substract
              from={250}
              to={1050}
              by={200}/>
          </span>
        </div>  : <></>}
    </>
  )
}