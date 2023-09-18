import Link from "next/link";
import styles from '@styles/pages/gamesetup.module.sass'
import Image from "next/image";
import { ChooseField, Select, Toggle } from "@/components/UI";
import { useRouter } from "next/router";

export default function Gamesetup({setters, getters}: any){
  const router = useRouter()
  const setField = (number: number) => setters.game.set({x: Number(number), y: Number(number)})
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
          <fieldset className={styles.setup}>
            <legend>Game Settings</legend>
            {/* <span>Field: <ChooseField initial={0} variants={['10x10', '20x20', '30x30', '40x40', '50x50', '150x150', '120x120', '100x100']} fn={setField} mode="field"/></span>
            <span>Bombs: <ChooseField initial={0} variants={['x1', 'x2', 'x3', 'x4', 'x5']} fn={setMultiplier} mode="multiplier"/></span> */}
            <span>
              <Select text={"Field"}
                      initial={getters.game.gameSettings.x}
                      variants={['10x10', '20x20', '30x30', '40x40', '50x50', '60x60', '70x70', '80x80', '90x90', '100x100', '110x110', '120x120', '130x130', '140x140', '150x150']}
                      values={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]}
                      fn={setField}/>
            </span>
            <span>
              <Select text={"Bomb Multiplier"} 
                      initial={getters.game.gameSettings.multiplier}
                      variants={['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10', 'x11', 'x12', 'x13', 'x14', 'x15']}
                      values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                      fn={setMultiplier}/>
            </span>
            <span>Reveal Empty Cells: <Toggle state={getters.game.gameSettings.revealEmpty} fn={()=>setters.game.set({revealEmpty: !getters.game.gameSettings.revealEmpty})}/></span>
            <span><button className={styles.startGame} onClick={setGame}>Start Game</button></span>
          </fieldset>
          {/* <fieldset className={styles.settings}>
            <legend>Game</legend>
            <span>Field: {getters.game.gameSettings.x}x{getters.game.gameSettings.y} ({getters.game.gameSettings.x * getters.game.gameSettings.y} cells)</span>
            <span>Bomb multiplier: x{getters.game.gameSettings.multiplier}</span>
            <span>XP per cell: {getters.game.gameSettings.multiplier * (getters.game.gameSettings.x + getters.game.gameSettings.y)}xp</span>
          </fieldset> */}
          <fieldset className={styles.description}>
            <legend>Tips</legend>
            *Bomb multiplier = XP multiplier<hr/>
            *Reveal Empty - Like in the classic MineSweeper, the game will reveal all the empty cells for you. Note that you will NOT get any exp for auto-revealed cells
          </fieldset>
        </div>
      </div>
    </div>
  )
}