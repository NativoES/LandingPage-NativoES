"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Play, Volume2, Maximize2, Settings } from "lucide-react"

export default function PageWork() {
  const [data, setData] = useState([])
  const language = "es" // puedes obtenerlo dinámicamente

  const loadData = async (lang) => {
    try {
      const url = `http://localhost:5000/api/form-study?locale=${lang}`
      const res = await fetch(url)
      const response = await res.json();

      const items = Array.isArray(response) ? response : [response]
      setData(items)
    } catch (error) {
      console.error("Error al cargar los datos:", error)
    }
  }

  useEffect(() => {
    loadData(language)
  }, [language])

  console.log("data: ", data);


  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Nuestro modo de trabajo</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => {
            const contenido = item[language]
            const titulo = contenido?.titulo
            const descripcion = contenido?.descripcion
            const icono = contenido?.typeIcon
            const isVideo = contenido?.media?.type?.includes("video")

            console.log("descripcion: ", contenido)

            return (
              <div key={index} className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-2">{titulo}</h2>
                  <div
                    className="text-sm mb-4"
                    dangerouslySetInnerHTML={{ __html: descripcion }}
                  />
                </div>

                {/* Mostrar video si es iframe, si no, mostrar imagen */}
                {isVideo ? (
                  <div className="relative rounded-lg overflow-hidden shadow-md"
                  >
                    <iframe
                      src={contenido?.media?.type?.url}
                      title="YouTube video player"
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={`/placeholder.svg?height=250&width=400`}
                      width={400}
                      height={250}
                      alt={titulo}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button className="bg-white rounded-full p-1.5">
                          <Play className="w-4 h-4 text-black" />
                        </button>
                        <span className="text-xs">0:00 / 0:59</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4" />
                        <Settings className="w-4 h-4" />
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
