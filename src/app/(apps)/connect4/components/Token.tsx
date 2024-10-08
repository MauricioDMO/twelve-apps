import { useGame } from "../hooks/useGame";
import styles from "./Token.module.css";
import { TOKEN } from "../utils/constants";

export function Token ({ position, cell }: { position: number, cell: number }) {
  const { winner, setCell } = useGame()
  
  const style = 
  `${cell === TOKEN.PLAYER1 ? styles.player1 : ''}
  ${cell === TOKEN.PLAYER2 ? styles.player2 : ''}`

  const ROW = Math.floor(position / 7) + 1
  
  const animationStyle = {
    "--fall": `${ROW * 75}ms`,
    "--start": `-${ROW * 100}%`
  } as React.CSSProperties &
    { "--fall": string, "--start": string }

  return <div
    onClick={() => setCell(position)}
    style={animationStyle}
    className={`size-full aspect-square p-2 grid place-items-center rounded-full select-none
      ${cell !== TOKEN.EMPTY ? 'animate' : ''}
      ${winner !== TOKEN.EMPTY ? 'cursor-not-allowed' : 'cursor-pointer'}`}
  >
    <div
      className={`size-full relative rounded-full ${style}`}/>
  </div>
}