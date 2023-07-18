export const boolRandom = () => {
  const result = Math.round(Math.random()*10)
  return result < 9 ? false : true
}