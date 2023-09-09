export const useToggles = () => {
  const toggle = (prevValues: boolean, item: string, attribute: string = "") => {
    item && localStorage.setItem(item, JSON.stringify(!prevValues))
    attribute.length && document.documentElement.setAttribute(attribute, `${!prevValues}`);
    return !prevValues
  }
  const update = (item: string, newValue: number, attribute: string) => {
    localStorage.setItem(item, JSON.stringify(newValue))
    if(attribute){
      document.documentElement.setAttribute(attribute, `${newValue}`);
    }
    return newValue
  }
  return {toggle, update}
}