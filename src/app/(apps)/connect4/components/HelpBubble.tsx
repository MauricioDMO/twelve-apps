"use client"

import { IconQuestionMark } from "@tabler/icons-react"

export function HelpBubble() {
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
      className="absolute bottom-4 left-4 p-2 cursor-pointer bg-sky-500 text-white rounded-full transition hover:scale-110">
      <IconQuestionMark stroke={2}/>
    </div>
    <dialog
      onClick={closeHelp}
      id="help"
      className="p-4 fixed top-0 bg-zinc-800 text-white rounded-lg backdrop:backdrop-blur">
      <h2 className="text-2xl mb-2">Ayuda</h2>
      <p>
        Para jugar, presiona las teclas del 1 al 7 para colocar una ficha en la columna correspondiente.
      </p>
      <p>
        Presiona la barra espaciadora para reiniciar el juego.
      </p>
      <button
        className="bg-zinc-600 text-white p-2 rounded-lg mt-4 mx-auto block"
        onClick={closeHelp}>
        Cerrar
      </button>
    </dialog>
  </>
}