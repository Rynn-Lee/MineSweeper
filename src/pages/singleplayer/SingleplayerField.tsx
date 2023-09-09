import styles from '@styles/pages/singleplayerfield.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function SingleplayerField({setters, getters}: any){
  useEffect(()=>{
    !getters.game.field && setters.game.create()
  }, [])

  return(
    <div className={styles.singleplayer}>
      <div className={styles.top}><Link href="/singleplayer/Gamesetup"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link> Setup game</div>
      <div className={styles.window}>
        <motion.div
          className={styles.field} 
          drag
          dragMomentum={getters.settings.slidingField}
          dragTransition={{bounceStiffness: getters.settings.animations ? getters.settings.fieldBouncing : 3000}}
          dragConstraints={{
            left: -10*(getters.game.gameSettings.x*2),
            right: 10*(getters.game.gameSettings.x*2),
            bottom: 10*(getters.game.gameSettings.y*2),
            top: -10*(getters.game.gameSettings.y*2)
          }}>

              {getters?.game?.field?.map((row: any, indexRow: number)=>(
                <div key={indexRow}>
                  {
                  row.map((cell: any, indexCell: number) => (
                    <div key={indexRow+indexCell} className={styles.cell}></div>
                  ))
                  }
                </div>
              ))}

        </motion.div>
      </div>
    </div>
  )
}