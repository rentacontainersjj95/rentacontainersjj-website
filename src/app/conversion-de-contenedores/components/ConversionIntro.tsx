"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function ConversionIntro() {
  const projects = [
    "Instalaciones de almacenamiento seguro",
    "Unidades de oficina singulares y modulares",
    "Puertas y ventanas para personal",
    "Puertas enrollables para contenedores",
    "Tiendas",
    "Bares y restaurantes",
    "Unidades de bienestar / baños",
    "Unidades de almacenamiento químico",
    "Cubiertas para calderas de biomasa",
    "Longitudes a medida, por ejemplo, contenedores de 16 pies",
    "Comedores",
    "Vestidores",
    "Contenedores para exposiciones",
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-10">
      {/* Texto */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Convertimos Contenedores en Espacios Acogedores
        </h2>
        <p className="text-gray-600 leading-relaxed">
          RENTACONTAINERSJJ ofrece servicios de conversión y modificación de contenedores de primera clase. Nuestro equipo profesional incluye arquitectos, técnicos en AutoCAD y mano de obra calificada. Utilizamos métodos avanzados de prefabricación para convertir contenedores.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Un contenedor puede ser usado como oficina de obra, espacio de estudio o incluso habitaciones de hotel – tú propones la idea y nosotros la hacemos realidad.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Los contenedores son unidades versátiles, fuertes, seguras y resistentes a la intemperie, haciendo sus aplicaciones prácticamente ilimitadas.
        </p>
        <p className="text-gray-600 leading-relaxed">
          En RENTACONTAINERSJJ te ayudamos a materializar tu proyecto de contenedor, desde el diseño hasta los trámites legales. Contamos con arquitectos, ingenieros, diseñadores, carpinteros y abogados que trabajarán contigo según tus necesidades. Con nuestros espacios a medida buscamos reducir nuestra huella de carbono y contribuir a un planeta más verde.
        </p>

        {/* Bullet list de proyectos */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Proyectos de conversión que hemos realizado:
          </h3>
          <ul className="space-y-2 text-gray-600">
            {projects.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <FaCheckCircle className="text-red-600 mt-1 mr-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Imagen derecha */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-[32rem] w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/conversion-de-contenedores/intro.jpg"
          alt="Container Conversion"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
