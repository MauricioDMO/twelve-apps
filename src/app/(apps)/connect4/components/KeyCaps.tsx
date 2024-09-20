import { robotoMono } from "@/ui/fonts"
import { Key } from "./Key"

export function KeyCaps () {
  return (
    <section className={`h-16 py-2 gap-2 grid grid-cols-7 w-full max-w-md ${robotoMono.className}`}>
      {Array.from({ length: 7 }, (_, i) => (
        <Key key={i} className="text-slate-500/80 size-full"
        fontWeight={700} fontClassName={robotoMono.className}
        text={`${i + 1}`} keyTrigger={`${i + 1}`} />
      ))}
    </section>
  )
}