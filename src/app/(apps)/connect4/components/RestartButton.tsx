"use client"

import { useGame } from "../hooks/useGame";

export function RestartButton() {
  const { resetGame } = useGame()

  return (
    <button
      onClick={resetGame}
      className="px-4 py-2 bg-zinc-600 text-white rounded">
      Reiniciar
    </button>
  );
}
