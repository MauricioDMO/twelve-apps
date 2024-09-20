"use client"

import { robotoMono } from "@/ui/fonts"
import { IconQuestionMark } from "@tabler/icons-react"
import { Key } from "./Key"
import { useHints } from "../hooks/useHints"

export function HelpBubble() {
  const { hints, setHints } = useHints()

  const openHelp = () => {
    const helpDialog = document.getElementById("help") as HTMLDialogElement
    helpDialog.showModal()
  }

  const closeHelp = () => {
    const helpDialog = document.getElementById("help") as HTMLDialogElement
    helpDialog.close()
  }


  return <>
    <div
      onClick={openHelp}
      className="p-2 cursor-pointer bg-sky-500 text-white rounded-full transition hover:scale-110">
      <IconQuestionMark stroke={2}/>
    </div>
    <dialog
      onClick={closeHelp}
      id="help"
      className="p-4 px-6 fixed top-0 bg-zinc-800 text-white rounded-lg max-w-2xl backdrop:backdrop-blur">
      <h2 className={`text-2xl mb-6 text-center ${robotoMono.className}`}>Ayuda</h2>
      
      <p className="my-2">
        Conecta 4 es un juego de mesa en el que dos jugadores compiten por ser el primero en alinear 4 fichas de su color en horizontal, vertical o diagonal.
      </p>
      
      <hr className="my-6 border-purple-500/50" />

      <div className="grid md:grid-cols-2">
        <div className="grid">
          <p className="py-2 text-center text-balance">
            Para jugar, para jugar puedes presionar los números del 1 al 7 para colocar una ficha en la columna correspondiente.
          </p>
          <section className="grid grid-cols-7 gap-3 max-w-md mx-auto py-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <Key className="size-full" key={i} text={i + 1} keyTrigger={`${i + 1}`} />
            ))}
          </section>
        </div>
        <div className="grid">
          <p className="py-2 text-center text-balance">
            Presiona la barra espaciadora para reiniciar el juego.
          </p>
          <section className="h-16 py-4 mx-auto flex">
            <Key className="size-full" text={"Espacio"} textMargin={100} keyTrigger={" "} />
          </section>
        </div>
      </div>


      <p className={`my-2 tracking-wide text-center ${robotoMono.className}`}>
        <span>¡Buena suerte!</span>
      </p>

      <section
        className="flex gap-4 items-center justify-center"
      >
        <button
          onClick={() => setHints(prev => !prev)}
          className="bg-zinc-600 text-white p-2 rounded-lg mt-4"
        >
          {hints ? "Ocultar" : "Mostrar"} ayudas 💡
        </button>

        <button
          className="bg-zinc-600 text-white p-2 rounded-lg mt-4"
          onClick={closeHelp}>
          Cerrar
        </button>
      </section>
    </dialog>
  </>
}