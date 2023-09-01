export const useToggles = () => {
  const toggle = (prevValues: boolean, item: string, attribute: string = "") => {
    localStorage.setItem(item, JSON.stringify(!prevValues))
    if(attribute.length){
      document.documentElement.setAttribute(attribute, `${!prevValues}`);
    }
    return !prevValues
  }
  
  return {toggle}
}