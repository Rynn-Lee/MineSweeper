export function Stats({gameProperties}: any){
  return(
    <div className="stats">
      <span>Total Bombs: {gameProperties.totalBombs}</span>
    </div>
  )
}