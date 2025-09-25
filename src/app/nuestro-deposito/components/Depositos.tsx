"use client";

import Image from "next/image";
import { 
  FaWarehouse, 
  FaCheckCircle, 
  FaDesktop, 
  FaPallet, 
  FaUsers, 
  FaWhatsapp, 
  FaClipboardList, 
  FaRocket 
} from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

export default function NuestroDepositoPage() {
  const phoneNumber = "+573104040273";

  const handleWhatsApp = () => {
    const message = "Hola, me interesa conocer más sobre su depósito de contenedores y servicios.";
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido Textual */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <FaWarehouse className="text-red-500" />
                  RENTACONTAINERJJ
                </span>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Depósito Especializado en Contenedores
                </h1>
              </div>

              <div className="space-y-6 text-lg text-gray-700">
                {/* Capacidad de 1.200 TEU - Icono de carga */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaPallet className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Capacidad de 1.200 TEU</h3>
                    <p>Servicio integral de depósito con máxima capacidad, garantizando seguridad, organización y eficiencia en la administración de unidades.</p>
                  </div>
                </div>

                {/* Sistema EDI Avanzado - Icono de computador */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <FaDesktop className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sistema EDI Avanzado</h3>
                    <p>Transmisión de datos en tiempo real sobre reparaciones y movimientos, asegurando comunicación rápida, precisa y confiable.</p>
                  </div>
                </div>

                {/* Certificaciones Internacionales - Icono de check */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaCheckCircle className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Certificaciones Internacionales</h3>
                    <p>Inspectores certificados IICL y colaboración con casas clasificadoras reconocidas. Cumplimos los más altos estándares de calidad y seguridad.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Imagen Principal */}
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/depositos.png"
                  alt="Depósito RENTACONTAINERJJ con capacidad para 1.200 TEU"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay de información */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <div className="text-white">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
                      <span className="font-semibold flex items-center gap-2">
                        <IoIosTimer className="text-red-400" />
                        24/7 Operativo
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Infraestructura de Clase Mundial</h3>
                    <p className="text-blue-200 flex items-center gap-2">
                      <FaUsers className="text-blue-300" />
                      Personal especializado y tecnología de punta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section con iconos actualizados */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Capacidad */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaPallet className="text-3xl text-blue-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">1.200</div>
              <div className="text-gray-600 font-medium">TEU Capacidad</div>
            </div>
            
            {/* Monitoreo 24/7 */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <IoIosTimer className="text-3xl text-green-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Monitoreo</div>
            </div>
            
            {/* Certificaciones */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaCheckCircle className="text-3xl text-purple-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Certificado IICL</div>
            </div>
            
            {/* Sistema EDI */}
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaDesktop className="text-3xl text-orange-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-2">EDI</div>
              <div className="text-gray-600 font-medium">Tiempo Real</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
          <p className="text-lg mb-8">
            Convierte a RENTACONTAINERJJ en tu aliado estratégico para el manejo, control y mantenimiento de contenedores marítimos.
          </p>
          <button 
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl mx-auto"
          >
            <FaRocket className="text-xl" />
            Comenzar Proyecto
          </button>
        </div>
      </section>
    </div>
  );
}