import { robotoMono } from "@/ui/fonts";
import type { Metadata } from 'next';
import { GlobalCss } from './components/GlobalCss';
import { RestartButton } from "./components/RestartButton";
import { Table } from "./components/Table";
import { GameProvider } from "./context/Game";
 
export const metadata: Metadata = {
  title: '12 Apps - Conecta 4',
  description: 'Juego de conecta 4',
}

export default function Connect4 () {

  return (
    <>
      <GlobalCss />
      <h1 className={`text-2xl py-4 text-center ${robotoMono.className}`} >
        Increíble conecta 4
      </h1>
      <section className="w-full px-4 place-items-center grid mt-16">
      <GameProvider>
        <Table />
        <section>
          <RestartButton />
        </section>
      </GameProvider>
      </section>
    </>
  )
}
