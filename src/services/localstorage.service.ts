export const localStorageService = {
  getItem(item: string){
    const result: any = localStorage.getItem(item) || null
    return JSON.parse(result)
  },
  setItem(item: string, value: any){
    const valueToSet = JSON.stringify(value)
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