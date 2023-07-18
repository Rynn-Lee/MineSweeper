import { useEffect } from "react"

export function GameField({gameField, sweepCell}: any){

  useEffect(()=>{
    console.log("GAMEFIELD CHANGED")
  }, [gameField])

  return(
    <div className="gamefield">
      {gameField?.map((row: any, indexrow: number) => (
        <div key={indexrow}>
          {row.map((cell: any, indexcell: number)=>(
            <div key={indexcell} onClick={()=>sweepCell(indexrow, indexcell)} className={`${cell.clicked ? "clicked" : ""} ${(cell.clicked && cell.isBomb) ? "bombed" : ""}`}></div>
          ))}
        </div>
      ))}
    </div>
  )
}