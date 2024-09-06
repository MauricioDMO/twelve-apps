"use client"

import { useContext } from 'react';
import { GameContext } from '../context/Game';
import { checkWinner } from '../utils/checkWinner';
import { TOKEN, redColors, yellowColors } from '../utils/constants';

import confetti from 'canvas-confetti';

export function useGame() {
  const { table, setTable, player, setPlayer, winner, setWinner } = useContext(GameContext);

  const resetGame = () => {
    setTable(Array(42).fill(0));
    setPlayer(1);
    setWinner(0);
  }

  const switchPlayer = () => {
    setPlayer(player === TOKEN.PLAYER1 ? TOKEN.PLAYER2 : TOKEN.PLAYER1)
  }

  const setCell = (index: number) => {
    if (winner !== TOKEN.EMPTY) return 
    const newTable = [...table]

    let i = 35 + index % 7 // 35 is the last row

    while (i >= 0 && newTable[i] !== TOKEN.EMPTY) {
      // go up one row
      i -= 7
    }

    if (i < 0) return // if column is full

    newTable[i] = player

    setTable(newTable)

    const anyWinner = checkWinner({ index: i, table: newTable })
    if (anyWinner) {
      setWinner(anyWinner)

      const confettiSettings = {
        colors: anyWinner === TOKEN.PLAYER1 ? redColors : yellowColors,
        spread: 50,
      }

      confetti({
        angle: 60,
        origin: { x: 0, y: 1 },
        ...confettiSettings
      });
      confetti({
        angle: 120,
        origin: { x: 1, y: 1 },
        ...confettiSettings
      });
    }
    switchPlayer()
  }

  return { resetGame, switchPlayer, setCell, table, player, winner }
}