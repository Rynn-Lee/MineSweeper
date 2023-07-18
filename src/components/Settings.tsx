export function Settings({gameProperties, setGameProperties, setField}: any){
  return(
    <>
      <div className="sizes">
        <button onClick={(e)=>setGameProperties({...gameProperties, width: 5, height: 5})}>5x5</button>
        <button onClick={(e)=>setGameProperties({...gameProperties, width: 8, height: 8})}>8x8</button>
        <button onClick={(e)=>setGameProperties({...gameProperties, width: 10, height: 10})}>10x10</button>
        <button onClick={(e)=>setGameProperties({...gameProperties, width: 15, height: 15})}>15x15</button>
        <button onClick={(e)=>setGameProperties({...gameProperties, width: 18, height: 18})}>18x18</button>
      </div>
      <div>
        <label>Field W</label>
        <input value={gameProperties.width} onChange={(e)=>setGameProperties({...gameProperties, width: Number(e.target.value)})}/>
      </div>
      <div>
        <label>Field H</label>
        <input value={gameProperties.height} onChange={(e)=>setGameProperties({...gameProperties, height: Number(e.target.value)})}/>
      </div>
      <button onClick={setField}>Start!</button>
    </>
  )
}