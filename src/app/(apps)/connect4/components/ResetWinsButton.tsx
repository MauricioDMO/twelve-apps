"use client";

import { useGame } from "../hooks/useGame";

export function ResetWinsButton() {
  const { resetWins } = useGame()

  return (
    <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={resetWins}>
      Reiniciar victorias
    </button>
  )
}