"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaHashtag, FaWeightHanging, FaBox, FaClipboardCheck } from "react-icons/fa";

const markings = [
  {
    title: "Número de Contenedor",
    description: `Secuencia alfanumérica única con 7 números y 4 letras. Ayuda a identificar contenedores internacionalmente.
- Prefijo del propietario: primeras 3 letras mayúsculas del nombre de la compañía.
- Identificador de categoría de equipo: U – contenedores de carga, J – contenedores desmontables, Z – trailers/chasis.
- Número de serie: seis dígitos asignados al propietario.
- Dígito de verificación: determina si el ID es válido.`,
    icon: FaHashtag,
  },
  {
    title: "Código ISO",
    description: `Asignado por BIC para evitar complicaciones al nombrar contenedores.
- Primer carácter: longitud.
- Segundo carácter: ancho y altura.
- Tercer carácter: tipo de contenedor.
- Cuarto carácter: contenedor con resistencia reducida.`,
    icon: FaBox,
  },
  {
    title: "Peso Máximo y Capacidad",
    description: `- Peso máximo: el máximo que puede cargar incluyendo el contenedor.
- Peso del contenedor: peso real vacío.
- Carga máxima (Max Payload): diferencia entre el peso máximo y el peso del contenedor.
- Volumen máximo (Cube – Max): volumen máximo en capacidad cúbica.`,
    icon: FaWeightHanging,
  },
  {
    title: "Placa CSC y Stickers ACEP/PES",
    description: `- Todos los contenedores para transporte internacional deben tener una placa CSC válida.
- Los contenedores comerciales deben pasar inspecciones regulares bajo ACEP o PES.
- Marcas operativas obligatorias: advertencias para el público al transportar o cargar contenedores.`,
    icon: FaClipboardCheck,
  },
];

export default function MarkingOfContainers() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">
      {/* Imagen arriba */}
      <motion.div
        className="w-full relative h-80 rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
    src="/containers/markings.jpg"
    alt="Marcas en contenedores"
    fill
    className="object-cover"
    priority
  />
      </motion.div>

      {/* Texto abajo */}
      <motion.div
        className="w-full space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          ¿Qué son las marcas en los contenedores?
        </h2>
        <p className="text-gray-600 leading-relaxed text-center">
          Los contenedores transportados por camiones gigantes muestran información vital en sus puertas traseras.
          Es obligatorio que los contenedores revelen detalles según la ley para garantizar la seguridad de la carga y las personas.
        </p>

        <div className="space-y-6">
          {markings.map((mark, idx) => {
            const Icon = mark.icon;
            return (
              <div key={idx} className="flex gap-4 items-start">
                <Icon className="text-red-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{mark.title}</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {mark.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-gray-600 leading-relaxed">
          Estas son las principales marcas que deben mostrarse en los contenedores para uso comercial. 
          Los contenedores que <span className="font-semibold text-teal-600">RENTACONTAINERSJJ</span> vende o arrienda 
          son inspeccionados y marcados regularmente para que nuestros clientes no tengan que preocuparse por trámites. 
          Si necesitas ayuda para marcar tu contenedor o actualizar la información,{" "}
          <span className="font-semibold text-teal-600">RENTACONTAINERSJJ</span> te asistirá.
        </p>
      </motion.div>
    </section>
  );
}
