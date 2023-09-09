import styles from '@styles/pages/singleplayerfield.module.sass'
import Image from 'next/image'
import Link from 'next/link'

export default function SingleplayerField({setters, getters}: any){
  return(
    <div className={styles.singleplayer}>
      <div className={styles.top}><Link href="/singleplayer/Gamesetup"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link> Setup game</div>
      <div className={styles.window}>
        {getters?.gameSettings?.field?.map((row: any, indexRow: number)=>(
          <div key={indexRow}>
            {
            row.map((cell: any, indexCell: number) => (
              <div key={indexRow+indexCell} className={styles.cell}></div>
            ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}