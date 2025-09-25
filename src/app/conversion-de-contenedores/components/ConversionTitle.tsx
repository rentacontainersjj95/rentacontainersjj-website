"use client";

import { motion } from "framer-motion";

export default function ConversionTitle() {
  return (
    <section
      className="relative h-[20vh] md:h-[25vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/conversion-de-contenedores/conversion-bg.jpg')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Texto */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-3xl md:text-5xl font-bold text-white text-center"
      >
        Conversión de Contenedores
      </motion.h1>
    </section>
  );
}
