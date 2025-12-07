// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import logoKampus from "../assets/images/logo-kampus.png"; // Pastikan path logo benar

const navItems = [
  { name: "Profil", id: "home" },
  { name: "Labs", id: "labs" },
  { name: "Lecturers", id: "lecturers" },
  { name: "Academics", id: "academics" },
  { name: "Documentation", id: "documentation" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // --- 1. LOGIC SCROLL TO SECTION ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  // --- 2. LOGIC DETEKSI POSISI SCROLL (Untuk Active State & Background Navbar) ---
  useEffect(() => {
    const handleScroll = () => {
      // Ubah style navbar jika discroll
      setScrolled(window.scrollY > 50);

      // Cari section mana yang sedang tampil di layar
      const sections = navItems.map((item) => document.getElementById(item.id));

      const current = sections.find((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        // Section dianggap aktif jika bagian atasnya berada di area pandang (kurang dari 1/3 layar)
        return (
          rect.top >= -rect.height / 3 && rect.top < window.innerHeight / 3
        );
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navbar Fixed di Atas
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* LOGO KIRI */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={logoKampus} alt="Logo" className="h-10 w-auto" />
          <div className="hidden md:block">
            <h1 className="text-white font-bold text-sm leading-tight">
              INFORMATICS
              <br />
              ENGINEERING
            </h1>
          </div>
        </div>

        {/* MENU TENGAH (Pill Shape) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white" // Warna teks saat aktif
                  : "text-gray-400 hover:text-white" // Warna teks saat tidak aktif
              }`}
            >
              {/* Background Pill Biru yang bergerak (Hanya muncul di item aktif) */}
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-lg shadow-blue-900/50 layoutId='activePill' transition={{ type: 'spring', stiffness: 300, damping: 30 }}" />
              )}

              {item.name}
            </button>
          ))}
        </div>

        {/* TOMBOL KANAN (Opsional - Bisa dikosongkan atau Contact Us) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("documentation")}
            className="text-white text-sm font-semibold hover:text-blue-400 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
