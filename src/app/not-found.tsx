import { robotoMono } from "@/ui/fonts";
import Link from "next/link";

export default function NotFount () {
  return (
    <main className="flex flex-col justify-center items-center gap-4 min-h-screen ">
      <h1 className={`text-2xl ${robotoMono.className}`}  >
        Parece que buscas algún proyecto secreto
      </h1>
      <span>
        - 404 -
      </span>
      <section>
        <Link
          className="px-4 py-2 bg-zinc-600 text-white rounded hover:bg-zinc-700
          hover:text-amber-400 hover:scale-110 transition"
          href="/"
        >
          Regresar
        </Link>
      </section>
    </main>
  )
}