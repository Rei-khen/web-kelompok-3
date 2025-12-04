// src/components/Navbar.jsx
import logo from "../assets/images/logo-kampus.png"; // Pastikan path asset benar

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 font-sans">
      {/* 1. LOGO */}
      <div className="w-16 md:w-16 relative z-10">
        {" "}
        {/* Added z-10 to ensure it's above any overlay */}
        <img
          src={logo}
          alt="Logo Kampus"
          className="w-full h-auto drop-shadow-lg"
        />
      </div>

      {/* 2. MENU PIL PINK (TENGAH) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        {/* Fine-tuning padding: px-7 py-2.5 */}
        <div className="bg-[#F8D7F6] px-7 py-2.5 rounded-full shadow-2xl flex items-center space-x-6 border-2 border-white/20">
          <a
            href="#"
            className="font-bold text-sm text-blue-900 bg-blue-900 text-white px-5 py-2 rounded-full shadow-sm tracking-wide"
          >
            Profil
          </a>
          <a
            href="#"
            className="font-bold text-sm text-blue-900 hover:text-blue-700 transition tracking-wide"
          >
            Labs
          </a>
          <a
            href="#"
            className="font-bold text-sm text-blue-900 hover:text-blue-700 transition tracking-wide"
          >
            Academics
          </a>
          <a
            href="#"
            className="font-bold text-sm text-blue-900 hover:text-blue-700 transition tracking-wide"
          >
            Lecturers
          </a>
        </div>
      </div>

      <div className="w-20"></div>
    </nav>
  );
};

export default Navbar;
