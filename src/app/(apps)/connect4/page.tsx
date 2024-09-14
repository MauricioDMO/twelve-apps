import { robotoMono } from "@/ui/fonts";
import type { Metadata } from 'next';
import { GlobalCss } from './components/GlobalCss';
import { RestartButton } from "./components/RestartButton";
import { Table } from "./components/Table";
import { GameProvider } from "./context/Game";
import { Panel } from "./components/Panel";
import { ResetWinsButton } from "./components/ResetWinsButton";
import { HelpBubble } from "./components/HelpBubble";
 
export const metadata: Metadata = {
  title: '12 Apps - Conecta 4',
  description: 'Juego de conecta 4',
}

export default function Connect4 () {

  return (
    <>
      <GlobalCss />
      <div className="bg-gradient-to-br from-slate-700 via-slate-900 to-black">
        <h1 className={`text-2xl py-4 text-center ${robotoMono.className}`} >
          Conecta 4
        </h1>
        <section className="w-full px-4 place-items-center grid">
          <GameProvider>
            <Panel />
            <Table />
            <section className="flex gap-2 my-8">
              <RestartButton />
              <ResetWinsButton />
            </section>
          </GameProvider>
        </section>
        <HelpBubble />
      </div>
    </>
  )
}
