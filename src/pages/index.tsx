import styles from '@styles/index.module.sass'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.line}>
        <div className={styles.logo}>MineSweeper Online <span className={styles.version}>v0.0.1</span></div>
        <div className={styles.buttons}>
          <button>Singleplayer</button>
          <button disabled>LAN</button>
          <button disabled>Multiplayer</button>
        </div>
      </div>
    </div>
  )
}
