import styles from '@styles/index.module.sass'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.line}>
        <div className={styles.logo}>MineSweeper Online <span className={styles.version}>v0.0.1</span></div>
        <div className={styles.buttons}>
          <Link href="/lolpage"><button>Singleplayer</button></Link>
          <button disabled>LAN</button>
          <button disabled>Multiplayer</button>
        </div>
      </div>
    </div>
  )
}
