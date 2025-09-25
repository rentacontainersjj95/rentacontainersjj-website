"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaArrowUp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social media links
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/rentacontainers",
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/contenedores_colombia/",
      label: "Instagram", 
      color: "hover:text-pink-500"
    }
  ];

  // Navigation links
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/compra-y-venta", label: "Compra y Venta" },
    { href: "/marcado-de-contenedores", label: "Marcado de Contenedores" },
    { href: "/nuestro-deposito", label: "Nuestro Depósito" },
    { href: "/conversion-de-contenedores", label: "Conversión de Contenedores" }
  ];

  // Contact information
  const contactInfo = [
    {
      department: "Gerencia",
      email: "gerencia@rentacontainersjj.com",
      icon: FaEnvelope
    },
    {
      department: "Contabilidad", 
      email: "contabilidad@rentacontainersjj.com",
      icon: FaEnvelope
    },
    {
      department: "Asistente Administrativo",
      email: "asistente.administrativa@rentacontainersjj.com",
      icon: FaEnvelope
    },
    {
      department: "Asesor Comercial",
      email: "asesorcomercial@rentacontainersjj.com",
      phones: ["+57 310 404 0273", "+57 310 562 7230"],
      icon: FaEnvelope
    }
  ];

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Information */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo2.png"
              alt="RENTAJJ Containers Logo"
              width={150}
              height={60}
              className="mb-2"
            />
          </Link>
          
          <p className="text-sm leading-6">
            RENTACONTAINERSJJ es una compañía especializada en la venta,
            compra y conversión de contenedores. Ofrecemos soluciones confiables
            y eficientes para el manejo de carga en todo el mundo.
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-transform duration-200 hover:scale-110`}
                aria-label={`Síguenos en ${social.label}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Enlaces rápidos</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200 block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6">Contacto</h3>
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-sm">
                <div className="font-medium text-white mb-1 flex items-center gap-2">
                  <contact.icon size={14} />
                  {contact.department}
                </div>
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-white transition-colors duration-200 block"
                >
                  {contact.email}
                </a>
                {contact.phones && (
                  <div className="mt-1 flex items-center gap-2">
                    <FaPhone size={12} />
                    {contact.phones.map((phone, phoneIndex) => (
                      <a
                        key={phoneIndex}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="hover:text-white transition-colors duration-200 block"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-2">
              <div className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt size={14} className="mt-0.5 flex-shrink-0" />
                <span>Calle 69 No. Via 40 - 431 - Barranquilla, Atlántico</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} RENTACONTAINERSJJ. Todos los derechos reservados.
          </span>
          
          <button
            onClick={scrollToTop}
            className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Volver al inicio"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}