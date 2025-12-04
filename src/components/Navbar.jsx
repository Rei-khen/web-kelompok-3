// src/components/Navbar.jsx
import logo from "../assets/images/logo-kampus.png"; // Pastikan path asset benar

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6">
      {/* 1. LOGO (Pojok Kiri) */}
      <div className="w-16 md:w-20">
        <img
          src={logo}
          alt="Logo Kampus"
          className="w-full h-auto drop-shadow-md"
        />
      </div>

      {/* 2. MENU PIL PINK (Tengah) */}
      {/* Absolute center trick agar benar-benar di tengah layar */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-[#F8D7F6] px-8 py-3 rounded-full shadow-lg flex items-center space-x-8">
          {/* Menu Items (Warna biru gelap sesuai gambar) */}
          <a
            href="#"
            className="font-bold text-blue-900 bg-blue-900 text-white px-6 py-1 rounded-full"
          >
            Profil
          </a>
          <a
            href="#"
            className="font-medium text-blue-900 hover:text-blue-700 transition"
          >
            Labs
          </a>
          <a
            href="#"
            className="font-medium text-blue-900 hover:text-blue-700 transition"
          >
            Academics
          </a>
          <a
            href="#"
            className="font-medium text-blue-900 hover:text-blue-700 transition"
          >
            Lecturers
          </a>
        </div>
      </div>

      {/* Kosong di kanan agar seimbang (opsional) */}
      <div className="w-20"></div>
    </nav>
  );
};

export default Navbar;
