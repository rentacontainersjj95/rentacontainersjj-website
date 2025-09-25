"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Compra y Venta", href: "/compra-y-venta" },
    { name: "Conversión de Contenedores", href: "/conversion-de-contenedores" },
    { name: "Nuestro Depósito", href: "/nuestro-deposito" },
    { name: "Marcado de Contenedores", href: "/marcado-de-contenedores" },
  ];

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "+573104040273";
    const message = "Hola, me gustaría solicitar una cotización de sus servicios de contenedores.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Función para verificar si el link está activo
  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-xl' : 'py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-transform hover:scale-105"
          >
            <Image
              src="/logo.jpeg"
              alt="Rentajj Containers Logo"
              width={isScrolled ? 120 : 150}
              height={isScrolled ? 120 : 150}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 relative group ${
                    isActive 
                      ? 'text-red-600 bg-red-50 font-semibold' 
                      : 'text-black hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  {link.name}
                  {/* Underline effect - Solo mostrar en hover si no está activo */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-4/5 group-hover:left-1/10"></span>
                  )}
                  {/* Indicador activo permanente */}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/10 w-4/5 h-0.5 bg-red-600"></span>
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button - Ahora abre WhatsApp */}
            <button
              onClick={openWhatsApp}
              className={`ml-4 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg border-2 bg-red-500  hover:bg-red-700`}
            >
              Cotizar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={openWhatsApp}
              className={`text-white px-4 py-2 rounded-lg font-semibold text-sm transition border-2 bg-red-600 border-red-600 hover:bg-red-700`}
            >
              Cotizar
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition border-2 border-red-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
          <ul className="space-y-3 border-t border-gray-100 pt-4">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 font-medium rounded-lg transition-all duration-200 border-l-4 ${
                      isActive
                        ? 'text-red-600 bg-red-50 font-semibold border-l-4 border-red-600'
                        : 'text-black hover:text-red-600 hover:bg-red-50 border-l-4 border-transparent hover:border-red-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            
            {/* Mobile Contact Info */}
            <li className="pt-4 border-t border-gray-100">
              <div className="px-4 space-y-2">
                <a href="tel:+573104040273" className="flex items-center text-red-600 font-semibold bg-red-50 px-4 py-2 rounded-lg">
                  <FaPhone className="mr-3" />
                  Llamar Ahora
                </a>
                <button onClick={openWhatsApp} className="flex items-center text-red-600 font-semibold bg-red-50 px-4 py-2 rounded-lg w-full">
                  <FaWhatsapp className="mr-3" />
                  Cotizar por WhatsApp
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}