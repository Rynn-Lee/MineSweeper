import { StepToggle, Toggle } from "../UI";

export default function Visuals({styles, getters, setters}: any){
  return(
    <> 
    <span className={styles.title}>VISUALS | <span data-impact="high" className={styles.impact}>•••</span> - gpu impact</span>

    <div className={styles.option}>
      <span>Background particles</span>
      <span className={styles.impact}><span data-impact="high">•••</span><Toggle state={getters.settings.particles} fn={setters.toggles.toggleParticles}/></span>
    </div>
    <div className={styles.option}>
      <span>Transparency</span>
      <span className={styles.impact}><span data-impact="low">•</span><Toggle state={getters.settings.transparency} fn={setters.toggles.toggleTransparency}/></span>
    </div>
    <div className={styles.option}>
      <span>Animations</span>
      <span className={styles.impact}><span data-impact="low">•</span><Toggle state={getters.settings.animations} fn={setters.toggles.toggleAnimations}/></span>
    </div>
    <div className={styles.option}>
      <span>Background Image</span>
      <span className={styles.impact}><Toggle state={getters.settings.background} fn={setters.toggles.toggleBackground}/></span>
    </div>
    <div className={styles.option}>
      <span>Dark Theme</span>
      <span className={styles.impact}><Toggle state={getters.settings.darkTheme} fn={setters.toggles.toggleTheme}/></span>
    </div>
    </>
  )
}