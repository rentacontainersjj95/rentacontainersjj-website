"use client";

import Image from "next/image";

interface ModularContainer {
  title: string;
  price: string;
  condition: string;
  image: string;
}

const modularContainers: ModularContainer[] = [
  {
    condition: "Nuevo",
    title: "CONTENEDOR MODULAR 20 PIES",
    price: "0,00$",
    image: "/containers/modular-20ft.jpg",
  },
  {
    condition: "Nuevo",
    title: "CONTENEDOR PLEGABLE DE 20 PIES",
    price: "0,00$",
    image: "/containers/modular-foldable-20ft.jpg",
  },
  {
    condition: "Nuevo",
    title: "CONTENEDOR MODULAR PERSONALIZADO",
    price: "0,00$",
    image: "/containers/modular-custom.jpg",
  },
  {
    condition: "Nuevo",
    title: "CONTENEDOR MODULAR DOS PUERTAS",
    price: "0,00$",
    image: "/containers/modular-two-doors.jpg",
  },
];

export default function ModularContainers() {
  const handleWhatsApp = (container: ModularContainer) => {
    const phoneNumber = "+971545179279"; // tu número de WhatsApp
    const message = `Hola! Quiero más información sobre el contenedor:
${container.title}
Precio: ${container.price}
Condición: ${container.condition}`;

    const url = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contenedores Modulares
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre Nuestros Contenedores Modulares: una solución económica y
            práctica para tu espacio de trabajo. Con diseño desarmable, versátil
            y apilable, son fáciles de transportar y almacenar.
          </p>
        </div>

        {/* Grid de contenedores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modularContainers.map((container, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="w-full h-48 relative">
                <Image
                  src={container.image}
                  alt={container.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-2">
                
                <h3 className="text-lg font-bold text-gray-800">
                  {container.title}
                </h3>
                
                

                <button
                  onClick={() => handleWhatsApp(container)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-green-600 transition font-bold"
                >
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
