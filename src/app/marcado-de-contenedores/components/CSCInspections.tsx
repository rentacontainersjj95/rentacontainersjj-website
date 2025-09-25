"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

export default function CSCInspections() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
      {/* Imagen izquierda */}
      <motion.div
        className="md:w-1/2 relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/containers/csc-inspections.jpg"
          alt="Inspecciones CSC de contenedores"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Texto */}
      <motion.div
        className="md:w-1/2 space-y-6"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Inspecciones CSC Regulares para Mantener la Seguridad
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Los contenedores de envío deben ser inspeccionados a intervalos regulares para garantizar su seguridad. 
          Los propietarios de contenedores deben revisarlos periódicamente con la ayuda de auditores e inspectores certificados.
        </p>

        <h3 className="text-xl font-semibold text-gray-800">
          Los 2 programas de inspección recomendados por la CSC:
        </h3>
        <ul className="list-disc list-inside text-gray-600 space-y-4">
          <li>
            <FaCheckCircle className="inline text-red-600 mr-2" />
            <strong>Periodic Examination Scheme (PES):</strong> 
            Los contenedores deben ser examinados dentro de los 5 años posteriores a su fabricación. Tras el primer servicio, deben inspeccionarse cada treinta meses. La placa CSC normalmente indica la próxima fecha de examen (NED).
          </li>
          <li>
            <FaShieldAlt className="inline text-red-600 mr-2" />
            <strong>Approved Continuous Examination Programme (ACEP):</strong> 
            Si un contenedor es reparado o inspeccionado bajo ACEP, se marca con el número del esquema en la placa CSC, usualmente mediante un decal. Los países contratantes deben hacer pública la lista de esquemas ACEP.
          </li>
        </ul>

        <p className="text-gray-600 leading-relaxed">
          <strong>RENTACONTAINERJJ, tu solución integral para cumplimiento CSC:</strong> 
          Contamos con un equipo de inspectores certificados que revisan cada aspecto de la conformidad CSC e IICL para nuestros clientes. 
          Te liberamos de papeleos y mantenimientos proporcionando los mejores servicios de inspección y certificación.
        </p>
      </motion.div>
    </section>
  );
}