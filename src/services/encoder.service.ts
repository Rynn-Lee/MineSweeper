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
    const entries = Object.keys(typeof obj == 'string' ? JSON.parse(obj) : obj)
    const objCopy = JSON.parse(JSON.stringify(obj))
    let isEncoded: boolean = false
    let base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    
    if(base64regex.test(objCopy[entries[0]])){
      isEncoded = true
    }

    if(isEncoded){
      entries.map((item: any) => objCopy[item] = JSON.parse(atob(objCopy[item])))
      return objCopy
    }
    else{
      return objCopy
    }
  }
}