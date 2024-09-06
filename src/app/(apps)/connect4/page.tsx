import { robotoMono } from "@/ui/fonts";
import { Table } from "./components/Table";
import { RestartButton } from "./components/RestartButton";
import { GameProvider } from "./context/Game";

export default function Connect4 () {

  return (
    <>
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
