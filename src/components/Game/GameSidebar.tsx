export default function GameSidebar({styles, getters, setters}: any){
  return(
    <div className={styles.sidebar}>
      Cells Left: {Number(getters.game.gameSettings.cells) - Number(getters.game.player.clicked)}<br/>
      Bombs: {Number(getters.game.gameSettings.totalBombs)}
    </div>
  )
}