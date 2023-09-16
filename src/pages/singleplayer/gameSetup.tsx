import Link from "next/link";
import styles from '@styles/pages/gamesetup.module.sass'
import Image from "next/image";
import { ChooseField, Toggle } from "@/components/UI";
import { useRouter } from "next/router";

export default function Gamesetup({setters, getters}: any){
  const router = useRouter()
  const setField = (x: number, y: number) => setters.game.set({x: Number(x), y: Number(y)})
  const setMultiplier = (multiplier: number) => setters.game.set({multiplier: Number(multiplier)})
  const setGame = () => {
    setters.game.create()
    router.push('/singleplayer/SingleplayerField')
  }

  return(
    <div className={styles.gamesetup}>
      <div className={styles.top}><Link href="/"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link> Setup game</div>
      <div className={styles.window}>
        <div className={styles.wrapper}>
          <fieldset className={styles.description}>
            <legend>Tips</legend>
            *Bomb multiplier = XP multiplier<hr/>
            *Reveal Empty - Like in the classic MineSweeper, the game will reveal all the empty cells for you. Note that you will NOT get any exp for auto-revealed cells
          </fieldset>
          <fieldset className={styles.setup}>
            <legend>Game Settings</legend>
            <span>Field: <ChooseField initial={0} variants={['10x10', '20x20', '30x30', '40x40', '50x50', '150x150', '120x120', '100x100']} fn={setField} mode="field"/></span>
            <span>Bombs: <ChooseField initial={0} variants={['x1', 'x2', 'x3', 'x4', 'x5']} fn={setMultiplier} mode="multiplier"/></span>
            <span>Reveal Empty Cells: <Toggle state={getters.game.gameSettings.revealEmpty} fn={()=>setters.game.set({revealEmpty: !getters.game.gameSettings.revealEmpty})}/></span>
            <span><button className={styles.startGame} onClick={setGame}>Start Game</button></span>
          </fieldset>
          <fieldset className={styles.settings}>
            <legend>Game</legend>
            <span>Field: {getters.game.gameSettings.x}x{getters.game.gameSettings.y} ({getters.game.gameSettings.x * getters.game.gameSettings.y} cells)</span>
            <span>Bomb multiplier: x{getters.game.gameSettings.multiplier}</span>
            <span>XP per cell: {getters.game.gameSettings.multiplier * (getters.game.gameSettings.x + getters.game.gameSettings.y)}xp</span>
          </fieldset>
        </div>
      </div>
    </div>
  )
}