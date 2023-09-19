import { invoke } from '@tauri-apps/api/tauri'

export default function Interface({styles, getters, setters}: any){
  const callrust = async() => {
    invoke<string>('greet', { msg: 'Rynn Lee' })
      .then((data: any) => console.log("Rust responded: ", data))
      .catch((error: any) => console.error(error))
  }

  return(
    <> 
    <span className={styles.title}>INTERFACE</span>
    <div className={styles.option}>
      <span>Language</span>
      <span className={styles.impact}>Coming Soon!</span>
    </div>
    <div className={styles.option}>
      <span>Call Rust</span>
      <span className={styles.impact} onClick={callrust}>ababa</span>
    </div>
    </>
  )
}