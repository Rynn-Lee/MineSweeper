import { arrayFiller } from "@/utils/arrayFiller"

export const filedServices = {
  async createField(gameProperties: any){
    if(gameProperties.width > 30){
      throw new Error("Width is too big...")
    }
    if(gameProperties.height > 18){
      throw new Error("Height is too big...")
    }
    
    const field: any = []
    const generateField = async() => {
      for(let i = 0; i<gameProperties.width; i++){
        field.push([])
        for(let j = 0; j<gameProperties.height; j++){
          field[i].push({
            isBomb: false,
            clicked: false,
            bombsAround: 0,
            markedAsBomb: false
          })
        }
      }
    }

    await generateField()
    const filledField = arrayFiller(field, gameProperties)
    if(filledField instanceof Error){
      throw filledField
    }
    console.log("SERVICE FIELD", filledField)
    return {field: filledField.array, gameProperties: filledField.gameProperties}
  },
  countBombs(gameProperties: any, gameField: any, row: any, cell: any){
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