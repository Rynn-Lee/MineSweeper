import Link from "next/link";
import styles from '@styles/pages/gamesetup.module.sass'
import Image from "next/image";
import { ChooseField } from "@/components/UI";
import { useRouter } from "next/router";

export default function Gamesetup({setters, getters}: any){
  const router = useRouter()
  const setField = (x: number, y: number) => setters.setGameSettings({...getters.gameSettings, x: Number(x), y: Number(y)})
  const setMultiplier = (multiplier: number) => setters.setGameSettings({...getters.gameSettings, multiplier: Number(multiplier)})
  const setGame = () => {
    setters.setGameSettings({...getters.gameSettings, field: setters.game.create()})
    router.push('/singleplayer/SingleplayerField')
  }

  return(
    <div className={styles.gamesetup}>
      <div className={styles.top}><Link href="/"><Image src={getters?.settings?.assets?.arrowLeft} alt="back" width={30} height={20}/>Back</Link> Setup game</div>
      <div className={styles.window}>
        <div className={styles.wrapper}>
          <fieldset className={styles.description}>
            <legend>Tips</legend>
            *Choose grid area<br/>
            *Bomb multiplier = XP multiplier
          </fieldset>
          <fieldset className={styles.setup}>
            <legend>Game Settings</legend>
            <span>Field: <ChooseField initial={0} variants={['5x5', '10x10', '15x15', '20x20', '25x25', '30x30', '35x35', '40x40']} fn={setField} mode="field"/></span>
            <span>Bombs: <ChooseField initial={0} variants={['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10']} fn={setMultiplier} mode="multiplier"/></span>
            <span><button className={styles.startGame} onClick={setGame}>Start Game</button></span>
          </fieldset>
          <fieldset className={styles.settings}>
            <legend>Game</legend>
            <span>Field: {getters.gameSettings.x}x{getters.gameSettings.y}</span>
            <span>Bomb multiplier: x{getters.gameSettings.multiplier}</span>
            <span>XP per cell: {getters.gameSettings.multiplier * getters.gameSettings.x + getters.gameSettings.y}xp</span>
          </fieldset>
        </div>
      </div>
    </div>
  )
}