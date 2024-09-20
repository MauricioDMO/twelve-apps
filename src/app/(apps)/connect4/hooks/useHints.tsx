"use client"

import { useContext } from "react";
import { HintsContext } from "../context/Hints";

export const useHints = () => {
  const context = useContext(HintsContext);
  if (!context) {
    throw new Error("useHints must be used within a HintsProvider");
  }
  const { hints, setHints } = context;

  return { hints, setHints };
} 