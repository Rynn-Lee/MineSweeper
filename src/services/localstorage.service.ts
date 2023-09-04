export const localStorageService = {
  getItem(item: string, setTo?: any){
    const result: any = localStorage.getItem(item) || setTo || null
    if(setTo && (!result || !result.length)){
      this.setItem(item, setTo)
    }
    return JSON.parse(result)
  },
  setItem(item: string, value: any){
    const valueToSet = JSON.stringify(value)
    console.log("CALL TO SET", item, valueToSet)
    try{
      localStorage.setItem(item, valueToSet)
    } catch (error: any) {
      throw new Error(error)
    }
    return true
  },
  removeItem(item: string){
    try{
      localStorage.removeItem(item)
    } catch (error: any) {
      throw new Error(error)
    }
    return true
  },
  compare(item: string, value: string){
    const storageItme = localStorage.getItem(item)
    if(storageItme === value){return true}
    return false
  }
}