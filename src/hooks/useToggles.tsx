export const useToggles = () => {
  const toggle = (prevValues: boolean, item: string, attribute: string = "") => {
    item && localStorage.setItem(item, JSON.stringify(!prevValues))
    attribute.length && document.documentElement.setAttribute(attribute, `${!prevValues}`);
    return !prevValues
  }
  const update = (newValue: number, item: string, attribute: string) => {
    localStorage.setItem(item, JSON.stringify(newValue))
    if(attribute.length){
      document.documentElement.setAttribute(attribute, `${newValue}`);
    }
  }
  return {toggle, update}
}