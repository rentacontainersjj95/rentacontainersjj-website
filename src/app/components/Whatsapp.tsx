"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+573104040273"; // Tu número de WhatsApp
  const message = "¡Hola! Me gustaría obtener más información."; // Mensaje inicial opcional

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 flex items-center justify-center bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
