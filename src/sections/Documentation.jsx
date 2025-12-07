// src/sections/Documentation.jsx
import { motion } from "framer-motion";
import DocumentationMarquee from "../components/DocumentationMarquee";

// --- GAMBAR PLACEHOLDER (Ganti dengan foto dokumentasi asli nanti) ---
// Kita pakai gambar lab yang ada dulu sebagai contoh
import docImg1 from "../assets/images/lab-bg-1.png";
// import docImg2 from "../assets/images/lainnya.png";

// Data dummy (diulang-ulang biar banyak)
const row1Images = [docImg1, docImg1, docImg1, docImg1, docImg1];
const row2Images = [docImg1, docImg1, docImg1, docImg1, docImg1].reverse(); // Dibalik biar beda dikit

const Documentation = () => {
  return (
    <section className="min-h-screen w-full bg-[#0a192f] py-20 flex flex-col justify-center items-center overflow-hidden relative">
      {/* HEADER SECTION */}
      <div className="text-center mb-16 z-10 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight"
        >
          Documentation
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-blue-500 mx-auto mt-4 rounded-full"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto"
        >
          Activities, events, and vibrant moments captured within the
          Informatics Engineering department.
        </motion.p>
      </div>

      {/* --- MARQUEE ROWS --- */}
      <div className="flex flex-col gap-6 w-full">
        {/* ROW 1: LEBIH CEPAT (Duration lebih kecil = lebih cepat) */}
        {/* reverse={true} agar bergerak dari KIRI ke KANAN */}
        <DocumentationMarquee
          images={row1Images}
          duration={25} // Kecepatan tinggi
          reverse={true}
        />

        {/* ROW 2: LEBIH LAMBAT */}
        <DocumentationMarquee
          images={row2Images}
          duration={40} // Kecepatan rendah
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Documentation;
