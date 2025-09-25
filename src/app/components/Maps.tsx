"use client";

export default function Maps() {
  const address = "Calle 69 #Via40-431, Barranquilla, Colombia";
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.975026247024!2d-74.80514932592186!3d10.963889989199432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d7d2b5f4d8d%3A0x8bfb9b37e4f47e0e!2sCll%2069%20%23Via40-431%2C%20Barranquilla%2C%20Colombia!5e0!3m2!1ses-419!2sco!4v1698258461234&markers=color:0x4A90E2%7Clabel:L%7C10.96389,-74.80515`;

  const openDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section className="w-full h-[500px] relative">
      <iframe
        src={mapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa: ${address}`}
      ></iframe>
      
      {/* Panel de controles */}
      <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <button
          onClick={openDirections}
          className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
        >
          <span>🚗</span>
          Cómo llegar
        </button>
      </div>

      {/* Información de dirección */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-3 rounded-lg">
        <p className="font-semibold">📍 Nuestra ubicación</p>
        <p className="text-sm">{address}</p>
      </div>
    </section>
  );
}