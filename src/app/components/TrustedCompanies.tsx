"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/img1.png",
  "/logos/img2.png",
  "/logos/img3.png",
  "/logos/img4.png",
  "/logos/img5.png",
  "/logos/img6.png",
  "/logos/img7.png",
];

export default function TrustedCompanies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Aliados Estratégicos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Colaboramos con las compañías más importantes del sector logístico y marítimo
          </p>
        </div>

        {/* Slider infinito */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {/* Duplicamos los logos para el efecto infinito */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-56 h-28 relative transition-transform duration-300 hover:scale-110"
              >
                <Image 
                  src={logo} 
                  alt={`Company ${index}`} 
                  fill 
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
          
          {/* Efectos de degradado en los bordes */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

        
      </div>
    </section>
  );
}