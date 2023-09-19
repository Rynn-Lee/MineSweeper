import Image from 'next/image'
import React from 'react'

export function MemoField({getters, setters, styles, isDragging}: any){
  return(
    getters?.game?.field?.map((row: any, indexRow: number)=>(
      <div key={indexRow}>
        {
          row.map((cell: any, indexCell: number) => (
            <div
              key={indexRow+indexCell}
              className={`${styles.cell} ${cell.clicked ? styles.clickedCell : ""}`}
              onClick={()=>!isDragging.current && setters.game.click(indexRow, indexCell)}
              data-bombs={cell.bombsAround}>
                {cell.bombsAround
                  ? cell.bombsAround < 9
                    ? cell.bombsAround
                    : <Image src={getters.settings.assets.bomb} alt="bomb" width={30} height={30}/>
                  : ""}
              </div>
          ))
        }
      </div>
    ))
  )
}

export const Field = React.memo(MemoField)