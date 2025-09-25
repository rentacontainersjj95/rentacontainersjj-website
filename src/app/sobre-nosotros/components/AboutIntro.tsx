"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto a la izquierda */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            RENTACONTAINERSJJ es una de las compañías líderes en comercio
            de contenedores a nivel nacional. Compramos y vendemos
            contenedores marítimos nuevos y usados para todas las industrias.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Además de ser una plataforma de comercio de contenedores marítimos,
            RENTACONTAINERSJJ también ofrece servicios de inspección y
            peritaje, cumpliendo estrictamente con las normas y regulaciones
            establecidas por el IICL. Nuestros inspectores certificados por el
            Institute of International Container Lessors (IICL) revisan los
            contenedores y la documentación correspondiente al detalle para
            garantizar que estén listos para el transporte marítimo.
          </p>
        </motion.div>

        {/* Imagen a la derecha */}
        <motion.div
          className="w-full md:w-1/2 h-72 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/about/about-intro.jpg"
            alt="RENTAJJ Containers"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
