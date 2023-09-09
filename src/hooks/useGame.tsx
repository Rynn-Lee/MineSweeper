import { useEffect, useState } from 'react'

export const useGame = () => {
  const [field, setField] = useState()
  const [gameSettings, setGameSettings] = useState({
    x: 10,
    y: 10,
    multiplier: 1,
    tossBombs: false,
    mode: 'singleplayer',
    revealEmpty: true
  })

  const create = () =>{
    const bombsAmount = Math.round((gameSettings.multiplier / 10) * ((gameSettings.x-0.5) * (gameSettings.y-0.5)))
    const field = Array.from(Array(gameSettings.x), () => Array(gameSettings.y).fill({
      clicked: false,
      isBomb: false,
      bombsAround: 0,
      markedAsBomb: false
    }))
    setField(filler(field, bombsAmount))
  }

  const filler = (field: any, bombsAmount: number) => {
    const result = JSON.parse(JSON.stringify(field))
    let counter = 0
    while(counter < bombsAmount){
      const coords = randomizer()
      if(!result[coords.x][coords.y].isBomb){
        result[coords.x][coords.y].isBomb = true
        counter += 1
      }
    }
    return result
  }

  const set = (values: any) => {
    setGameSettings({...gameSettings, ...values})
  }

  const randomizer = () => {
    return {x: Math.floor(Math.random() * gameSettings.x), y: Math.floor(Math.random() * gameSettings.y),}
  }

  return {create, field, set, gameSettings}
}