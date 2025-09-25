"use client";

import { motion } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenedor del contenido - Solo el formulario centrado */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl px-4">
        {/* Formulario de cotización centrado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md"
        >
          <QuoteForm />
        </motion.div>
      </div>
    </section>
  );
}