import styles from '@styles/index.module.sass'

export default function Home() {
  return (
    <div className={styles.index}>
      <div className={styles.logo}>MineSweeper Online <span className={styles.version}>v0.0.1</span></div>
      <div className={styles.buttons}>
        <span>Singleplayer</span>
        <span>Multiplayer</span>
      </div>
    </div>
  )
}
