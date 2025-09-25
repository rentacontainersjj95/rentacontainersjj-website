"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen */}
        <motion.div
          className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/containers/aboutus.png"
            alt="Sobre Nosotros"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   50vw"
            priority
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-600 mb-4">
            RENTACONTAINERSJJ S.A.S. es una empresa dedicada al diseño, fabricación y adecuación de contenedores tipo oficina, ofreciendo soluciones innovadoras, funcionales y de alta calidad para proyectos empresariales, industriales y comerciales. Nos enfocamos en satisfacer las necesidades de nuestros clientes mediante un servicio confiable, ágil y orientado a la eficiencia, garantizando el cumplimiento de estándares técnicos y ambientales, así como el bienestar de nuestros colaboradores.
          </p>
          <p className="text-gray-600">
            Con años de experiencia en la industria, somos el socio de confianza
            para empresas que buscan eficiencia, seguridad y versatilidad en
            sus operaciones.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
