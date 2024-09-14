"use client"

import { useEffect } from "react"
import { useGame } from "../hooks/useGame"
import style from "./Table.module.css"
import { Token } from "./Token"

export function Table () {
  const { table, setCell, resetGame } = useGame()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ("1234567".includes(event.key)) {
        setCell(+event.key - 1)
      }
      else if (event.key === " ") {
        event.preventDefault()
        resetGame()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setCell, resetGame])



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