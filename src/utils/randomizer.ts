export const boolRandom = () => {
  const result = Math.round(Math.random()*10)
  console.log("BOOL RAND", result)
  return result < 9 ? false : true
}