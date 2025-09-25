"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [size, setSize] = useState("10ft");
  const [containerType, setContainerType] = useState("standard");
  const [condition, setCondition] = useState("nuevo");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [operationType, setOperationType] = useState("Comprar");
  const [transport] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "+573104040273"; // tu número de WhatsApp
    const message = `Cotización Rápida:
Tamaño: ${size}
Tipo de Contenedor: ${containerType}
Condición: ${condition}
Nombre: ${name}
WhatsApp: ${whatsapp}
Email: ${email}
Tipo de Operación: ${operationType}
Transporte: ${transport}`;

    const url = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Cotización Rápida
      </h2>

      {/* Tamaño */}
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option>10 pies</option>
        <option>20 pies</option>
        <option>40 pies</option>
        <option>45 pies</option>
        <option>20 pies modular</option>
        <option>40 pies modular</option>
      </select>

      {/* Tipo de contenedor */}
      <select
        value={containerType}
        onChange={(e) => setContainerType(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option>Estándar</option>
        <option>Cubo Alto</option>
        <option>Lado Abierto - Estándar</option>
        <option>Lado Abierto - Cubo Alto</option>
        <option>Parte Superior Abierta</option>
        <option>Modular</option>
      </select>

      {/* Condición */}
      <select
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option>nuevo</option>
        <option>usado</option>
        <option>ambas cosas</option>
      </select>

      {/* Nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        required
      />

      {/* WhatsApp */}
      <input
        type="text"
        placeholder="Número de WhatsApp"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2"
      />

      {/* Operación */}
      <div className="flex gap-4">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="operationType"
            value="Comprar"
            checked={operationType === "Comprar"}
            onChange={(e) => setOperationType(e.target.value)}
          />
          Comprar
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="operationType"
            value="Alquilar"
            checked={operationType === "Alquilar"}
            onChange={(e) => setOperationType(e.target.value)}
          />
          Alquilar
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="operationType"
            value="Ambos"
            checked={operationType === "Ambos"}
            onChange={(e) => setOperationType(e.target.value)}
          />
          Ambos
        </label>

        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="operationType"
            value="Transporte"
            checked={operationType === "Transporte"}
            onChange={(e) => setOperationType(e.target.value)}
          />
          Transporte
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition font-bold"
      >
        Cotizar Ahora
      </button>
    </form>
  );
}
