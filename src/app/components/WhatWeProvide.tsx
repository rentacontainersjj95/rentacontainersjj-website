"use client";

import { motion } from "framer-motion";
import { FaBoxOpen, FaTools, FaGlobe, FaHome } from "react-icons/fa";

const services = [
  {
    title: "Comercio de Contenedores",
    icon: FaBoxOpen,
  },
  {
    title: "Conversiones de Contenedores",
    icon: FaTools,
  },
  {
    title: "Arrendamiento Internacional",
    icon: FaGlobe,
  },
  {
    title: "Arrendamiento Doméstico",
    icon: FaHome,
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          LO QUE OFRECEMOS
        </motion.h2>

        {/* Single Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl  p-6  transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="bg-red-50 p-4 rounded-full">
                  <service.icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}