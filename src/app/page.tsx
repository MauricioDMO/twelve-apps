import { FixingPC } from "@/components/icons/FixingPC";
import { type AppProps, App } from "@/components/App";

const LIST_OF_APPS: AppProps[] = [
  {
    url: '/connect4',
    codeUrl: 'https://github.com/MauricioDMO/twelve-apps/tree/main/src/app/(apps)/connect4',
    name: 'Conecta 4',
    description: "Crear el juego de Conecta 4",
    requirements: [
      'Tablero de 7x6',
      'Fichas Rojas y Amarillas',
      'No hay que implementar una funcionalidad que te permita jugar contra la App',
      'Al seleccionar la columna se coloca la ficha en la parte inferior',
      'Guardar el número partidas ganadas de cada equipo',
      'Dos botones para reiniciar la partida en marcha y para resetear el contador de victorias y derrotas'
    ],
    image: '/img/example.png',
    randomColor: true
  }
]

export default function Home () {
  return (
    <main className="flex flex-col justify-items-center items-center my-24">
      <h1
        className="text-4xl font-bold text-center text-amber-400"
      >
        Reto de 12 aplicaciones
      </h1>
      <section className="max-w-[80ch] my-12 grid md:grid-cols-5 place-items-center px-4">
        <FixingPC className="max-w-lg w-full h-auto md:col-span-2" />
        <div className="text-pretty flex flex-col gap-4 leading-relaxed md:col-span-3">
          <p className="text-xl">
            Hola, soy Mauricio Martínez, desarrollador FrontEnd.
          </p>
          <p>
          Presento un proyecto único, fruto de un reto personal inspirado por MoureDev: desarrollar
          12 aplicaciones en un año.
          </p>
          <p>
            Cada una representa un desafío para demostrar y mejorar mis habilidades, aportando soluciones
            creativas al desarrollo de software.
          </p>
          <p>
          Este viaje mensual no solo enriquece mi portafolio, sino que también fortalece mi desarrollo
          profesional en el área de frontend.
          </p>
        </div>
      </section>
      <ol>
        {LIST_OF_APPS.map((app, index) => (
          <li key={index} className='my-8 mx-4 max-w-4xl'>
            <App {...app} />
          </li>
        ))}
      </ol>
    </main>
  )
}
