"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { title: "4 Feet Single Toilet", img: "/images/4ft-toilet.jpg" },
  { title: "6 Feet Single Guard Hut", img: "/images/6ft-guard.jpg" },
  { title: "8 Feet Double Toilet", img: "/images/8ft-double-toilet.jpg" },
  { title: "8 Feet Shower & Toilet", img: "/images/8ft-shower.jpg" },
  { title: "10 Feet Container Cafe", img: "/images/10ft-cafe.jpg" },
  { title: "10 Feet Container Office", img: "/images/10ft-office.jpg" },
  { title: "10 Feet Guard Hut", img: "/images/10ft-guard.jpg" },
  { title: "20 Feet Coffee Shop", img: "/images/20ft-coffee.jpg" },
  { title: "20 Feet Container Cafe for sale UAE", img: "/images/20ft-cafe-uae.jpg" },
  { title: "20 Feet Container Home Office", img: "/images/20ft-home-office.jpg" },
  { title: "20 Feet Expo Cube Dubai", img: "/images/20ft-expo.jpg" },
  { title: "20 Feet Flat Pack Office", img: "/images/20ft-flatpack.jpg" },
  { title: "20 Feet Office Container Dubai", img: "/images/20ft-office-dubai.jpg" },
  { title: "20 Feet – 40 Feet Office Container", img: "/images/20-40ft-office.jpg" },
  { title: "40 Feet Accommodation Container Dubai", img: "/images/40ft-accommodation.jpg" },
  { title: "40 Feet Office Container Dubai", img: "/images/40ft-office-dubai.jpg" },
  { title: "440 Feet Sleeper Cabin Container", img: "/images/440ft-sleeper.jpg" },
  { title: "Trade Show Containers Dubai", img: "/images/tradeshow.jpg" },
  { title: "Containers Accommodation", img: "/images/accommodation.jpg" },
  { title: "Container conversion Dubai, UAE", img: "/images/conversion-dubai.jpg" },
  { title: "Container Conversion UAE- Shipping Container Concepts", img: "/images/conversion-uae.jpg" },
  { title: "Container Conversion for sale in Dubai", img: "/images/conversion-sale.jpg" },
];

export default function ContainerGrid() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Nuestras Conversiones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-md group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative h-56 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-white p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
