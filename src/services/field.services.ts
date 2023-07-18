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
            clicked: false
          })
        }
      }
    }
    await generateField()
    return newArr
  }
}