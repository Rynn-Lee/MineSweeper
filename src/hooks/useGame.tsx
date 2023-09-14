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
    clicked: 1
  })

  const create = () =>{
    const bombsAmount = Math.round((gameSettings.multiplier / 20) * ((gameSettings.x-0.5) * (gameSettings.y-0.5)))
    const field = Array.from(Array(gameSettings.x), () => Array(gameSettings.y).fill({
      clicked: false,
      isBomb: false,
      bombsAround: 0,
      markedAsBomb: false
    }))
    set({
      totalBombs: bombsAmount,
      cells: (gameSettings.x*gameSettings.y)-bombsAmount,
      xpPerCell: gameSettings.multiplier * (gameSettings.x + gameSettings.y)
    })
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

  const click = async(x: number, y: number) => {
    const newArr = JSON.parse(JSON.stringify(field))
    
    const ifContinue = async() => {
      const bombsAround = await countBombsAround(x, y)
      if(!bombsAround){
        await recursion(x, y, newArr)
      }
      else{
        newArr[x][y].clicked = true
        newArr[x][y].bombsAround = bombsAround
      }
    }

    newArr[x][y].clicked = true
    newArr[x][y].isBomb
      ? bombed(newArr, x, y)
      : gameSettings.revealEmpty
        ? await ifContinue()
        : await countBombsAround(x, y, newArr)

    console.log(memorySizeOf(newArr))
    setField(newArr)
  }

  const bombed = (newArr: any, x: number, y: number) => {
    newArr[x][y].bombsAround = 9
    player.current = {exp: 0, clicked: 1}
  }

  const addExp = async (newArr: any, x: number, y: number) => {
    newArr[x][y].bombsAround = await countBombsAround(x, y)
    player.current.clicked == gameSettings.cells && playerWin()
    return {
      exp: player.current.exp + gameSettings.xpPerCell,
      clicked: player.current.clicked + 1
    }
  }
  
  const playerWin = () => {
    fn(player.current.exp)
    player.current = {exp: 0, clicked: 1}
  }

  const countBombsAround = async(x: number, y: number, newArr?: any) => {
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
    if(newArr){
      if(counter){
        newArr[x][y].bombsAround = counter
      }
      else{
        newArr[x][y] = {clicked: true}
      }
    }
    return counter
  }

  const recursion = async(x: number, y: number, newArr: any) => {
    let xOffset = x-1, yOffset = y-1
    while(xOffset <= x+1){
      while(yOffset <= y+1){
        if(newArr[xOffset]?.[yOffset]){
          let bombsAround
          if(!newArr[xOffset][yOffset].clicked){
            bombsAround = await countBombsAround(xOffset, yOffset)
          }
          if(bombsAround){
            newArr[xOffset][yOffset].bombsAround = newArr[xOffset][yOffset].isBomb ? 9 : bombsAround
            newArr[xOffset][yOffset].bombsAround != 9 && (newArr[xOffset][yOffset].clicked = true)
          }
          else{
            if(!newArr[xOffset][yOffset].clicked){
              newArr[xOffset][yOffset] = {clicked: true}
              await recursion(xOffset, yOffset, newArr)
            }
          }
        }
        yOffset+=1
      }
      yOffset=y-1
      xOffset+=1
    }
  }

  const clear = () => {
    setField([[]])
  }

  const randomizer = () => ({x: Math.floor(Math.random() * gameSettings.x), y: Math.floor(Math.random() * gameSettings.y)})



  function memorySizeOf(obj: any) {
    var bytes = 0;
  
    function sizeOf(obj:any) {
      if (obj !== null && obj !== undefined) {
        switch (typeof obj) {
          case "number":
            bytes += 8;
            break;
          case "string":
            bytes += obj.length * 2;
            break;
          case "boolean":
            bytes += 4;
            break;
          case "object":
            var objClass = Object.prototype.toString.call(obj).slice(8, -1);
            if (objClass === "Object" || objClass === "Array") {
              for (var key in obj) {
                if (!obj.hasOwnProperty(key)) continue;
                sizeOf(obj[key]);
              }
            } else bytes += obj.toString().length * 2;
            break;
        }
      }
      return bytes;
    }
  
    function formatByteSize(bytes: any) {
      if (bytes < 1024) return bytes + " bytes";
      else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KiB";
      else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MiB";
      else return (bytes / 1073741824).toFixed(3) + " GiB";
    }
  
    return formatByteSize(sizeOf(obj));
  }

  return {create, field, set, gameSettings, click, clear}
}