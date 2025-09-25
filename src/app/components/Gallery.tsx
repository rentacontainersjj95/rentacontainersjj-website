"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";

type GalleryItem = {
  src: string;
  alt: string;
};

const images: GalleryItem[] = [
  { src: "/gallery/img1.jpg", alt: "Vista exterior de containers de carga" },
  { src: "/gallery/img2.jpg", alt: "Interior de container organizado" },
  { src: "/gallery/img3.jpg", alt: "Proceso de carga y descarga" },
  { src: "/gallery/img4.jpg", alt: "Almacenamiento de containers" },
  { src: "/gallery/img5.jpg", alt: "Container en transporte" },
  { src: "/gallery/img6.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img7.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img8.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img9.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img10.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img11.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img12.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img13.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img14.jpg", alt: "Vista aérea de instalaciones" },
  { src: "/gallery/img15.jpg", alt: "Vista aérea de instalaciones" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selected]);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selected) return;

      if (e.key === 'Escape') {
        setSelected(null);
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const currentIndex = images.findIndex(img => img.src === selected.src);
        let nextIndex;

        if (e.key === 'ArrowRight') {
          nextIndex = (currentIndex + 1) % images.length;
        } else {
          nextIndex = (currentIndex - 1 + images.length) % images.length;
        }

        setSelected(images[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  const openImage = (img: GalleryItem) => {
    setSelected(img);
    setIsLoading(true);
  };

  const closeModal = () => {
    setSelected(null);
  };

  const goToNext = () => {
    if (!selected) return;
    const currentIndex = images.findIndex(img => img.src === selected.src);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelected(images[nextIndex]);
    setIsLoading(true);
  };

  const goToPrev = () => {
    if (!selected) return;
    const currentIndex = images.findIndex(img => img.src === selected.src);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelected(images[prevIndex]);
    setIsLoading(true);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header mejorado */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestra Galería
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestro trabajo a través de estas imágenes que muestran la calidad 
            y profesionalismo de nuestros servicios
          </p>
        </div>

        {/* Grid de imágenes - Sin texto */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openImage(img)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={300}
                  height={200}
                  className="w-full h-32 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={() => setIsLoading(false)}
                />
                
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/90 rounded-full p-2 shadow-lg">
                      <FiZoomIn className="w-4 h-4 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal mejorado */}
      {selected && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controles de navegación */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="Imagen anterior"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200 backdrop-blur-sm z-10"
              aria-label="Imagen siguiente"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Contenedor de imagen */}
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
              
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="rounded-lg max-h-[80vh] object-contain"
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* Botón de cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full p-2 transition-all duration-200 shadow-lg z-10"
              aria-label="Cerrar modal"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Indicador de progreso */}
            <div className="flex justify-center mt-4 space-x-1">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    img.src === selected.src ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}