import Link from "next/link";
import styles from '@styles/pages/gamesetup.module.sass'
import Image from "next/image";
import { Choose } from "@/components/UI";

export default function Gamesetup({setters, getters}: any){
  return(
    <div className={styles.gamesetup}>
      <div className={styles.top}><Link href="/"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link> Setup game</div>
      <div className={styles.window}>
        <div className={styles.wrapper}>
          <div className={styles.description}>
            *Choose grid area<br/><br/>
            *The higher bomb multiplier is, the more exp you get revealing empty cells, but the more bombs there are
          </div>
          <div className={styles.setup}>
            <span>Field: <Choose initial={0} variants={["5x5", "10x10", "15x15", "20x20", "25x25"]}/> </span>
          </div>
        </div>
      </div>
    </div>
  )
}