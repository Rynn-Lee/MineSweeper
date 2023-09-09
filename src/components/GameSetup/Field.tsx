export default function Field({styles, setters, getters}: any){

  const setField = (x: number, y: number) => {
    setters.setGameSettings({...getters.gameSettings, x: x, y: y})
  }

  return(
    <>
      <select className={styles.select}>
        <option onClick={()=>setField(5,5)}>5x5</option>
        <option onClick={()=>setField(10,10)}>10x10</option>
        <option onClick={()=>setField(15,15)}>15x15</option>
        <option onClick={()=>setField(20,20)}>20x20</option>
        <option onClick={()=>setField(25,25)}>25x25</option>
      </select>
    </>
  )
}