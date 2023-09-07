import styles from '@styles/pages/index.module.sass'
import Link from 'next/link'

export default function Home({getters, setters}: any) {
  return (
    <div className={styles.index}>
      <div className={styles.line}>
        <div className={styles.logo}>MineSweeper Online <span className={styles.version}>v0.0.1</span></div>
        <div className={styles.buttons}>
          <Link href="/singleplayer/Gamesetup"><button>Singleplayer</button></Link>
          <button disabled>LAN</button>
          <button disabled>Multiplayer</button>
        </div>
      </div>
    </div>
  )
}
