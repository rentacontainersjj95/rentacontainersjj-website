"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SalePurchaseIntro() {
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
          Compra y Venta de Contenedores en toda Colombia
        </h2>
        <p className="text-gray-600 leading-relaxed">
         RENTACONTAINERSJJ vende contenedores nuevos y usados a través de su división de comercio de contenedores. Esta división se enfoca principalmente en la venta de equipos de contenedores a nivel nacional e internacional. RENTACONTAINERSJJ ofrece contenedores Dry de 20ft STD, 40ft STD y 40ft High Cube. También nos especializamos en la venta de equipos especiales como contenedores Open Top, Flat-Rack y contenedores refrigerados marinos.
        </p>
        <p className="text-gray-600 leading-relaxed">
         RENTACONTAINERSJJ cuenta con una amplia red de instalaciones de depósitos en múltiples ubicaciones estratégicas para garantizar que los clientes puedan adquirir contenedores con la máxima flexibilidad y en el menor tiempo posible. RENTACONTAINERSJJ coopera con una amplia gama de proveedores internacionales para asegurar la mayor disponibilidad de contenedores en las ubicaciones deseadas.
        </p>
        <p className="text-gray-600 leading-relaxed">
          RENTACONTAINERSJJ garantiza que los contenedores que proporcionamos son adecuados tanto para almacenamiento doméstico como para transporte nacional e internacional. Todo el equipo se entrega con una certificación de placa CSC válida para garantizar un transporte seguro por tren, barco o camión.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/containers/aboutus.png"
          alt="Compra y Venta de Contenedores"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
