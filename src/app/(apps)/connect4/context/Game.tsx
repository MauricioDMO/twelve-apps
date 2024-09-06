"use client";

import { createContext, useState } from "react";

export const GameContext = createContext({
  table: Array(42).fill(0),
  player: 1,
  winner: 0,
  setTable: (table: any[]) => {},
  setPlayer: (player: number) => {},
  setWinner: (winner: number) => {}
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState(Array(42).fill(0));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);

  return (
    <GameContext.Provider value={{ table, setTable, player, setPlayer, winner, setWinner }}>
      {children}
    </GameContext.Provider>
  );
};