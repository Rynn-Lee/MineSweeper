export const useGame = (settings: any) => {
  const create = () =>{
    const bombsAmount = Math.round((settings.multiplier / 10) * ((settings.x-0.5) * (settings.y-0.5)))
    console.log(bombsAmount);
    const field = Array.from(Array(settings.x), () => Array(settings.y).fill({
      clicked: false,
      isBomb: false,
      bombsAround: 0,
      markedAsBomb: false
    }))
    return filler(field, bombsAmount)
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

  
  const randomizer = () => {
    return {x: Math.floor(Math.random() * settings.x),y: Math.floor(Math.random() * settings.y),}
  }

  return {create}
}