export const arrayFiller = (array: any, gameProperties: any) => {
  let bombCounter = 0
  const totalBombs = Math.floor(((gameProperties.height*gameProperties.width)/(gameProperties.height+gameProperties.width))*gameProperties.multiplyer)
  gameProperties.totalBombs = totalBombs
  if(totalBombs >= (gameProperties.width*gameProperties.height)){
    throw new Error("More bombs than the cells!")
  }


  while(bombCounter < totalBombs){
    const place = randCoords(gameProperties)
    console.log(place)
    if(array[place.row][place.cell].isBomb != true){
      array[place.row][place.cell].isBomb = true
      bombCounter = bombCounter + 1
    }
  }
  return {array, gameProperties}
}

const randCoords = (gameProperties: any) => {
  return {
    row: Math.floor(Math.random()*gameProperties.width),
    cell: Math.floor(Math.random()*gameProperties.height)
  }
}