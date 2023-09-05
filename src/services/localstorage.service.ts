export const localStorageService = {
  getItem(item: string, setTo?: any){
    if(typeof setTo == 'function'){
      setTo = setTo()
    }

    let result: any = localStorage.getItem(item) || null
    if(setTo && (!result || !result.length)){
      this.setItem(item, setTo)
      result = setTo
    }

    if(typeof result == "string"){
      return(result)
    }
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