// src/components/Footer.jsx
import logoKampus from "../assets/images/logo-kampus.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020c1b] pt-20 pb-8 border-t border-white/10 text-gray-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* GRID UTAMA (3 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* KOLOM 1: IDENTITAS */}
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={logoKampus}
                alt="Logo Kampus"
                className="w-16 h-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white leading-none tracking-tight">
                  Informatics
                  <br />
                  Engineering
                </h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mt-1">
                  Universitas Hasanuddin
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Educating future innovators and leaders in the field of
              Information & Communication Technology.
            </p>
          </div>

          {/* KOLOM 2: NAVIGATION */}
          <div className="flex flex-col space-y-6 md:pl-10">
            <h4 className="text-white font-bold text-lg">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Facilities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT US */}
          <div className="flex flex-col space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              {/* Alamat */}
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Jl. Poros Malino Km. 6, Gowa</span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-yellow-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:informatika@unhas.ac.id"
                  className="hover:text-white transition-colors"
                >
                  informatika@unhas.ac.id
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-yellow-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <a href="#" className="hover:text-white transition-colors">
                  @informatika.unhas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-500">
            2025 Dept. Informatics Engineering Universitas Hasanuddin. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
