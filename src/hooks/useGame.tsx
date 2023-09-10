import { useEffect, useState, useRef } from 'react'

export const useGame = (fn: any) => {
  const [field, setField] = useState<any>()
  const [gameSettings, setGameSettings] = useState({
    x: 10,
    y: 10,
    multiplier: 1,
    tossBombs: false,
    mode: 'singleplayer',
    revealEmpty: true,
    totalBombs: 0,
    cells: 0,
    xpPerCell: 0
  })
  const player = useRef({
    exp: 0,
    clicked: 0
  })

  const create = () =>{
    const bombsAmount = Math.round((gameSettings.multiplier / 10) * ((gameSettings.x-0.5) * (gameSettings.y-0.5)))
    const field = Array.from(Array(gameSettings.x), () => Array(gameSettings.y).fill({
      clicked: false,
      isBomb: false,
      bombsAround: 0,
      markedAsBomb: false
    }))
    set({totalBombs: bombsAmount})
    set({cells: (gameSettings.x*gameSettings.y)-bombsAmount})
    set({xpPerCell: gameSettings.multiplier * (gameSettings.x + gameSettings.y)})
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
    setGameSettings((prevValues: any)=>({...prevValues, ...values}))
  }

  const click = (x: number, y: number) => {
    const newArr = JSON.parse(JSON.stringify(field))

    player.current = {
      exp: player.current.exp + gameSettings.xpPerCell,
      clicked: !newArr[x][y].clicked ? player.current.clicked += 1 : player.current.clicked
    }

    newArr[x][y].clicked = true
    newArr[x][y].bombsAround = newArr[x][y].isBomb ? newArr[x][y].bombsAround = 9 : countBombsAround(x, y)

    if(newArr[x][y].isBomb){
      player.current = {
        exp: 0,
        clicked: 0
      }
    }

    if(player.current.clicked == gameSettings.cells){
      fn(player.current.exp)
      player.current = {
        exp: 0,
        clicked: 0
      }
      console.log("set")
    }

    if(!gameSettings.revealEmpty){
      setField(newArr)
      return
    }
  }

  const add = () => {
    fn(400)
  }

  const countBombsAround = (x: number, y: number) => {
    let xOffset = x-1, yOffset = y-1
    let counter = 0
    while(xOffset <= x+1){
      while(yOffset <= y+1){
        if(field[xOffset]?.[yOffset]?.isBomb){counter += 1}
        yOffset+=1
      }
      yOffset=y-1
      xOffset+=1
    }
    return counter
  }

  const randomizer = () => {
    return {x: Math.floor(Math.random() * gameSettings.x), y: Math.floor(Math.random() * gameSettings.y),}
  }

  return {create, field, set, gameSettings, click, add}
}