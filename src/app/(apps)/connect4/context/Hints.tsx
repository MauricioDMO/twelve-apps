"use client"

import { createContext, useState, Dispatch, SetStateAction } from "react";

interface HintsContextType {
  hints: boolean;
  setHints: Dispatch<SetStateAction<boolean>>;
}

export const HintsContext = createContext<HintsContextType | undefined>(undefined);

export const HintsProvider = ({ children }: { children: React.ReactNode }) => {
  const [hints, setHints] = useState(false);

  return (
    <HintsContext.Provider value={{ hints, setHints }}>
      {children}
    </HintsContext.Provider>
  );
}