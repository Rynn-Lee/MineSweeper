export function GameOver({gameProperties, setField}: any){
  return(
    <div className="gameover">
      GAME OVER!<br/>
      <table>
        <tbody>
          <tr>
            <td>Clicked: </td>
            <td>{gameProperties?.clicks}</td>
          </tr>
          <tr>
            <td>Field: </td>
            <td>{gameProperties?.width} x {gameProperties?.height}</td>
          </tr>
          <tr>
            <td>Score: </td>
            <td>{gameProperties?.userScore}</td>
          </tr>
          <tr>
            <td>Bomb multiplyer: </td>
            <td>x{gameProperties?.multiplyer}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={setField}>Play again!</button>
    </div>
  )
}