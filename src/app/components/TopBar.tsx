// components/TopBar.tsx
import { FaInstagram, FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function TopBar() {
  const contactInfo = {
    phone: "+57 310 404 0273",
    email: "gerencia@rentacontainersjj.com",
    location: "Calle 69 No. Via 40 - 431 - Barranquilla",
    socialMedia: {
      instagram: "https://www.instagram.com/contenedores_colombia/",
      facebook: "https://www.facebook.com/rentacontainers"
    }
  };

  const socialLinks = [
    {
      icon: FaInstagram,
      href: contactInfo.socialMedia.instagram,
      label: "Síguenos en Instagram",
      className: "hover:bg-pink-600"
    },
    {
      icon: FaFacebookF,
      href: contactInfo.socialMedia.facebook,
      label: "Síguenos en Facebook",
      className: "hover:bg-blue-600"
    }
  ];

  return (
    <>
      {/* ✅ Desktop TopBar */}
      <div className="hidden md:block bg-black text-white text-sm py-3 border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Contact Info */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-yellow-400 transition-all duration-200"
                aria-label="Llámanos por teléfono"
              >
                <FaPhone className="text-yellow-400" size={14} />
                <span>{contactInfo.phone}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-yellow-400 transition-all duration-200"
                aria-label="Envíanos un email"
              >
                <FaEnvelope className="text-yellow-400" size={14} />
                <span className="hidden lg:inline">{contactInfo.email}</span>
                <span className="lg:hidden">Email</span>
              </a>

              <div className="flex items-center gap-2" aria-label="Ubicación">
                <FaMapMarkerAlt size={14} className="text-yellow-400" />
                <span className="hidden xl:inline">{contactInfo.location}</span>
              </div>
            </div>

            {/* Social + Tagline */}
            <div className="flex items-center gap-4">
              <span className="text-white text-xs hidden xl:block font-semibold">
                🌊 Venta, alquiler y adecuación de contenedores marítimos.
              </span>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Mobile TopBar */}
      <div className="md:hidden bg-black text-white py-3 border-b-2 border-red-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-2">
            {/* Call button */}
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-semibold bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
              aria-label="Llámanos ahora"
            >
              <FaPhone size={14} />
              <span>Llamar Ahora</span>
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 🔻 Eliminamos el correo aquí en mobile 🔻 */}
          <div className="flex items-center justify-start text-xs text-gray-400 gap-1">
            <FaMapMarkerAlt size={12} className="text-yellow-400" />
            <span>{contactInfo.location}</span>
          </div>
        </div>
      </div>
    </>
  );
}
