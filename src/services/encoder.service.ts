export const encoderService = {
  encode(text: string){
    const result = btoa(text)
    return result
  },
  decode(text: string){
    const result = atob(JSON.parse(text))
    return result
  },
  decodeObject(obj: any){
    if(!obj){return}
    const entries = Object.keys(JSON.parse(obj))
    const objCopy = JSON.parse(obj)
    let isEncoded: boolean = false
    let base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if(base64regex.test(objCopy[entries[0]])){
      isEncoded = true
    }
    console.log(isEncoded)

    if(isEncoded){
      console.log(objCopy)
      entries.map((item: any) => objCopy[item] = JSON.parse(atob(objCopy[item])))
      console.log(objCopy)
      return objCopy
    }
    else{
      console.log(objCopy)
      return objCopy
    }

    // if(!entries){return}
    // const objCopy = JSON.parse(obj)
    // try{
    //   const result = entries.map((item: any) => objCopy[item] = JSON.parse(atob(objCopy[item])))
    // }catch(err){
    //   return objCopy
    // }
    // return objCopy
  }
}