import styles from '@styles/pages/singleplayerfield.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function SingleplayerField({setters, getters}: any){
  const isDragging = useRef<any>(false)

  const dragControl = (event: any, info: any) => {
    event.type === 'pointermove' && (isDragging.current = true)
    event.type === 'pointerup' && setTimeout(() => isDragging.current = false, 100);
  }

  return(
    <div className={styles.singleplayer}>
      <div className={styles.top}><Link href="/singleplayer/Gamesetup"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link>Game Field</div>
      <div className={styles.window}>
        <motion.div
          className={styles.field}
          drag
          dragMomentum={getters.settings.slidingField}
          onDrag={dragControl}
          onDragEnd={dragControl}
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
                    <div
                      key={indexRow+indexCell}
                      className={`${styles.cell} ${cell.clicked ? styles.clickedCell : ""}`}
                      onClick={()=>!isDragging.current && setters.game.click(indexRow, indexCell)}
                      data-bombs={cell.bombsAround}>
                        {cell.bombsAround
                          ? cell.bombsAround < 9
                            ? cell.bombsAround
                            : <Image src={getters.settings.assets.bomb} alt="bomb" width={30} height={30}/>
                          : ""}
                      </div>
                  ))
                  }
                </div>
              ))}
        </motion.div>
      </div>
    </div>
  )
}