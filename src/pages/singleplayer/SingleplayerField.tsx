import styles from '@styles/pages/singleplayerfield.module.sass'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Field from './Field'
import GameSidebar from '@/components/Game/GameSidebar'

export default function SingleplayerField({setters, getters}: any){
  const isDragging = useRef<any>(false)
  useEffect(()=>{
    !setters.game.field && setters.game.create()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const dragControl = (event: any, info: any) => {
    event.type === 'pointermove' && (isDragging.current = true)
    event.type === 'pointerup' && setTimeout(() => isDragging.current = false, 100);
  }

  return(
    <div className={styles.singleplayer}>
      <div className={styles.top}><Link href="/singleplayer/Gamesetup" onClick={setters.game.clear}><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link>Game Field</div>
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
          <Field
            getters={getters}
            setters={setters}
            styles={styles}
            isDragging={isDragging}/>
        </motion.div>
        <GameSidebar
          styles={styles}
          getters={getters}
          setters={setters}/>
      </div>
    </div>
  )
}