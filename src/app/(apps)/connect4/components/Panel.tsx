"use client"

import { robotoMono } from "@/ui/fonts";
import { useGame } from "../hooks/useGame";
import { TOKEN } from "../utils/constants";
import tokenStyle from "./Token.module.css";

export function Panel() {
  const { winners, player } = useGame()


  return (
    <section className="w-full max-w-md flex justify-evenly items-center border-b-white border-b p-2">
      <div className={`transition p-2 relative ${player === TOKEN.PLAYER1 ? '-translate-y-1/4' : ''}`} >
        <div className={`relative size-12 aspect-square grid place-items-center rounded-full
          ${tokenStyle.player1}
          ${robotoMono.className}`}>
          <span className="z-10 text-white">{winners.red}</span>

          <div className={`h-1 transition translate-y-2 w-full absolute bottom-0 rounded
            ${player === TOKEN.PLAYER1
              ? 'bg-white scale-x-100' 
              : 'scale-0'}`}/>
        </div>
      </div>
      <span>-</span>
      <div className={`transition p-2 relative ${player === TOKEN.PLAYER2 ? '-translate-y-1/4' : ''}`}>
        <div className={`relative size-12 aspect-square grid place-items-center rounded-full
          ${tokenStyle.player2}
          ${robotoMono.className}`}>
          <span className="z-10 text-white">{winners.yellow}</span>

          <div className={`h-1 transition translate-y-2 w-full absolute bottom-0 rounded
            ${player === TOKEN.PLAYER2 
              ? 'bg-white scale-x-100' 
              : 'scale-0'}`}/>
        </div>
      </div>
    </section>
  );
}