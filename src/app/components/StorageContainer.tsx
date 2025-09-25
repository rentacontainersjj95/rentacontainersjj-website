"use client";

import Image from "next/image";

interface ContainerCardProps {
  title: string;
  image: string;
  description: string;
}

const phoneNumber = "+573104040273";

const containers: ContainerCardProps[] = [
  { title: "40' Flat Rack Container", image: "/containers/c1.png", description: "Ideal para cargas sobredimensionadas y maquinaria pesada." },
  { title: "40' Reefer High Cube", image: "/containers/c2.png", description: "Ideal para el transporte de productos perecederos, almacenamiento y cadena de frio." },
  { title: "20' Reefer High Cube", image: "/containers/c3.png", description: "Ideal para el transporte de productos perecederos, almacenamiento y cadena de frio." },
  { title: "40' Standard High Cube Container", image: "/containers/c4.png", description: "Contamos con disponibilidad para almacenamiento y transporte maritimo internacional (Food Grade)" },
  { title: "40' Standard High Cube Container Usados como nuevos", image: "/containers/c5.png", description: "Ideal para transformacion y proyectos arquitectonicos a tu medida" },
  { title: "20' Standard Container Usados como nuevos", image: "/containers/c6.png", description: "Ideal para transformacion y proyectos arquitectonicos a tu medida" },
  { title: "20' Standard High Cube Container Nuevo", image: "/containers/c7.png", description: "Un equipo mas alto y mas versatil para el desarrollo de tus operaciones." },
  { title: "20' Standard Container Usados como nuevos", image: "/containers/c8.png", description: "Ideal para transformacion y proyectos arquitectonicos a tu medida" },
];

export default function ContainersSection() {
  const handleWhatsApp = (title: string) => {
    const message = `Hola, me interesa recibir más información sobre el ${title}.`;
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contenedores de almacenamiento</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desliza para conocer el precio de nuestros contenedores y obtener
            una cotización rápida. Los valores pueden diferir según la ubicación
            y están sujetos a cambios por la TRM.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {containers.map((container, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              {/* Contenedor de imagen con tamaño fijo */}
              <div className="w-full h-48 flex justify-center items-center bg-gray-100 p-4">
                <Image
                  src={container.image}
                  alt={container.title}
                  width={250}
                  height={160}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: "250px", maxHeight: "160px" }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{container.title}</h3>

                {(container.title === "40' Standard High Cube Container" ||
                  container.title === "20' Standard High Cube Container Nuevo") && (
                  <span className="text-red-500 font-semibold mb-2">Nuevo</span>
                )}

                <p className="text-gray-600 mb-4 text-sm">{container.description}</p>

                <button
                  onClick={() => handleWhatsApp(container.title)}
                  className="mt-auto flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}