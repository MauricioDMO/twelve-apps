import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

import { robotoMono } from "@/ui/fonts";

export default function AppLayout ({children} : { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-zinc-800 text-white p-2 px-4 flex justify-between items-center">
        <Link href="/" className="bg-zinc-600 rounded px-2 py-1 hover:scale-105 hover:bg-zinc-500 transition duration-300">
          <IconArrowLeft stroke={2} height="100%" />
        </Link>
        <h1 className={`text-2xl font-extralight ${robotoMono.className}`}>Reto de 12 aplicaciones</h1>
      </header>
      <main className="flex-grow relative">
        {children}
      </main>
      <footer className="bg-zinc-800 text-white p-4">
        <p>
          Hecho por <a href="https://mauriciodmo.com" className="underline" target="_blank">Mauricio Martínez</a>
        </p>
      </footer>
    </div>
  )
}