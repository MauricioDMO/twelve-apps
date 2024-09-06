"use client"

import { useGame } from "../hooks/useGame"
import style from "./Table.module.css"
import { Token } from "./Token"

export function Table () {
  const { table } = useGame()

  return (
    <section className="relative size-full aspect-[7/6] max-w-md">
      <div className="grid grid-cols-7 size-full bg-blue-900 rounded-t-xl place-items-center">
        {table.map((cell, index) => (
          <Token key={index} position={index} cell={cell} />
        ))
        }
      </div>
      <div className={`absolute inset-0 size-full rounded-t-xl pointer-events-none ${style.tableMask}`} />
    </section>
  )
}