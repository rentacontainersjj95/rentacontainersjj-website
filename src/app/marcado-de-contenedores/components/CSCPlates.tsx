"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CSCPlates() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Texto */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          ¿Qué son las placas CSC?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          La Convención Internacional para la Seguridad de los Contenedores (CSC), establecida en 1972 por la ONU y la Organización Marítima Internacional, define los requisitos internacionales de seguridad para la inspección y mantenimiento de contenedores de carga.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Los principales objetivos de la CSC son:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Garantizar la seguridad durante el transporte y manejo de contenedores</li>
          <li>Establecer regulaciones de seguridad uniformes a nivel internacional</li>
          <li>Delegar a organizaciones autorizadas las tareas de prueba, inspección y aprobación de contenedores para transporte internacional</li>
        </ul>
        <p className="text-gray-600 leading-relaxed font-semibold">
          En RENTACONTAINERSJJ, todos nuestros contenedores cuentan con placas CSC válidas y certificadas.
        </p>
      </motion.div>

      {/* Imagen derecha */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/containers/placa-csc.jpg"
          alt="Placas CSC de certificación internacional para contenedores"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}