import type { Metadata } from 'next'
import { inter } from '@/ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reto de 12 aplicaciones',
  description: 'Proyecto en base de las 12 aplicaciones en un año de MoureDev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-zinc-900 text-white/90 ${inter.className}`}>{children}</body>
    </html>
  );
}
