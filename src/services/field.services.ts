import { boolRandom } from "@/utils/randomizer"

export const filedServices = {
  async createField(gameProperties: any){
    if(gameProperties.width > 30){
      throw new Error("Width is too big...")
    }
    if(gameProperties.height > 18){
      throw new Error("Height is too big...")
    }

    const newArr: any = []
    let bombCounter = 0
    const generateField = async() => {
      for(let i = 0; i<gameProperties.width; i++){
        newArr.push([])
        for(let j = 0; j<gameProperties.height; j++){
          const bomb = boolRandom() 
          bomb && (bombCounter += 1)
          newArr[i].push({
            isBomb: (!bombCounter && (gameProperties.width-1 == i) && (gameProperties.height-1 == j)) ? true : bomb,
            clicked: false,
            bombsAround: 0
          })
        }
      }
    }
    await generateField()
    return newArr
  },
  countBombs(gameProperties: any, gameField: any, row: any, cell: any, highlight: boolean = true){
    let counter: number = 0

    if(cell-1 >= 0){
      gameField[row][cell-1].isBomb && (counter += 1)
    }
    if(row-1 >= 0){
      gameField[row-1][cell].isBomb && (counter += 1)
    }
    if(row-1 >= 0 && cell-1 >= 0){
      gameField[row-1][cell-1].isBomb && (counter += 1)
    }
    if(gameProperties.width != row+1 && cell-1 >= 0){
      gameField[row+1][cell-1].isBomb && (counter += 1)
    }
    if(gameProperties.width != row+1){
      gameField[row+1][cell].isBomb && (counter += 1)
    }
    if(gameProperties.height != cell+1){
      gameField[row][cell+1].isBomb && (counter += 1)
    }
    if(gameProperties.width != row+1 && gameProperties.height != cell+1){
      gameField[row+1][cell+1].isBomb && (counter += 1)
    }
    if(row-1 >= 0 && gameProperties.height != cell+1){
      gameField[row-1][cell+1].isBomb && (counter += 1)
    }

    return {counter, gameField}
  }
}