"use client";

import { motion } from "framer-motion";
import { FaBox, FaHandshake, FaUsers, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "PRODUCTOS DE CALIDAD",
    description:
      "Somos uno de los mayores vendedores y compradores de todo tipo de equipos usados y nuevos.",
    icon: <FaBox className="text-4xl mb-4" />,
    bg: "bg-black",
  },
  {
    title: "VENTAS CONFIABLES",
    description:
      "Tenemos la experiencia y el conocimiento para asegurar que nuestros clientes obtengan los mejores beneficios.",
    icon: <FaHandshake className="text-4xl mb-4" />,
    bg: "bg-red-600",
  },
  {
    title: "EQUIPO PROFESIONAL",
    description:
      "Contamos con un equipo dedicado y eficiente, con pleno dominio de todos los aspectos relacionados con contenedores.",
    icon: <FaUsers className="text-4xl mb-4" />,
    bg: "bg-black",
  },
  {
    title: "SOPORTE AL CLIENTE",
    description: "Solo cuéntanos tus necesidades y nosotros te ayudamos.",
    icon: <FaHeadset className="text-4xl mb-4" />,
    bg: "bg-red-600",
  },
];

export default function AboutFeatures() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`${feature.bg} text-white p-10 flex flex-col items-center text-center`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
