"use client";

import { createContext, useState } from "react";

type Winners = {
  red: number;
  yellow: number;
  wins: number[];
};

export const GameContext = createContext({
  table: Array(42).fill(0),
  player: 1,
  winner: 0,
  winners: { red: 0, yellow: 0, wins: [] } as Winners,
  setTable: (table: any[]) => {},
  setPlayer: (player: number) => {},
  setWinner: (winner: number) => {},
  setWins: (wins: any) => {},
});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState(Array(42).fill(0));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [winners, setWins] = useState({ red: 0, yellow: 0, wins: [] });

  return (
    <GameContext.Provider value={{ table, setTable, player, setPlayer, winner, setWinner, winners, setWins }}>
      {children}
    </GameContext.Provider>
  );
};