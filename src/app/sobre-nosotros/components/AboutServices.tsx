"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBoxOpen,
  FaTruckMoving,
  FaWarehouse,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";

const services = [
  {
    title: "Comercio de Contenedores",
    description: `En RENTACONTAINERSJJ vendemos todo tipo de contenedores marítimos a precios muy competitivos. 
    Somos los mayores almacenistas de todo tipo de contenedores ISO nuevos y usados en la región. 
    Contamos con varias corporaciones multinacionales como socios de abastecimiento desde hace más de 10 años, 
    lo que nos da acceso a contenedores de calidad para el comercio. 
    Además de contenedores ISO, también contamos con contenedores offshore DNV y contenedores de oficina tipo Flatpack.`,
    image: "/about/comercio-de-contenedores.jpg",
    icon: FaBoxOpen,
  },
  {
    title: "Arrendamiento de Contenedores",
    description: `En RENTACONTAINERSJJ poseemos más de 1000 contenedores para alquiler a corto y largo plazo, 
    sirviendo a una amplia variedad de propósitos de almacenamiento y envío. 
    Incluimos tanto contenedores secos como refrigerados. 
    Para mantener la calidad, todos nuestros contenedores de la flota de arrendamiento se reemplazan cada 5 años, 
    y son inspeccionados y reparados si es necesario por nuestros técnicos certificados. 
    Ofrecemos alquiler de contenedores, manipulación y transporte en paquete en cualquier parte del país. 
    El período mínimo de arrendamiento es de 30 días.`,
    image: "/about/arrendamiento-de-contenedores.jpg",
    icon: FaWarehouse,
  },
  {
    title: "Transporte (Envíos)",
    description: `RENTACONTAINERSJJ brinda servicios de transporte a nivel nacional e internacional. 
    Contamos con una amplia variedad de flota que garantiza una solución integral para los clientes. 
    "Valoramos más el tiempo y la seguridad que los cargos de flete", 
    una política basada en la satisfacción del cliente que nos ha guiado todos estos años.`,
    image: "/about/transporte-y-envio.jpg",
    icon: FaTruckMoving,
  },
  {
    title: "Servicios de Depósito",
    description: `En RENTACONTAINERSJJ contamos con instalaciones estratégicas que brindan ventajas para el servicio de depósitos a empresas multinacionales de leasing y transporte marítimo. 
    - Instalaciones modernas y amplias con sistemas de control informatizados  
    - Área de reparación y servicio completamente equipada para contenedores y reefers  
    - Servicio continuo que incluye inspección, reporte, estimación y reparaciones.`,
    image: "/about/deposito-de-contenedores.jpg",
    icon: FaTools,
  },
  {
    title: "Servicios de Inspección y Peritaje",
    description: `En RENTACONTAINERSJJ los contenedores deben pasar por inspección y peritaje exhaustivo, exigido por el IICL, antes de poder ser utilizados. 
    Nuestros inspectores certificados por el IICL se aseguran de que todo cumpla con las normativas internacionales. 
    Revisan daños, reparaciones no conformes y garantizan la limpieza para evitar contaminación, residuos o plagas. 
    Los contenedores se inspeccionan visualmente desde todos los ángulos para detectar abolladuras, fugas, corrosión o defectos. 
    Además, se certifica la fecha de expiración/reemplazo en cada unidad.`,
    image: "/about/inspeccion-y-peritaje.jpg",
    icon: FaClipboardCheck,
  },
];

export default function AboutServices() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 space-y-20">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Imagen */}
            <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Texto */}
            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-3">
                <Icon className="text-red-600 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
