// src/sections/Documentation.jsx
import { motion } from "framer-motion";
import DocumentationMarquee from "../components/DocumentationMarquee";

// --- GAMBAR PLACEHOLDER ---
import docImg1 from "../assets/images/lab-bg-1.png";
import gambar1 from "../assets/images/dokumentasi/dokumentasi1.png";
import gambar2 from "../assets/images/dokumentasi/dokumentasi2.png";
import gambar3 from "../assets/images/dokumentasi/dokumentasi3.png";
import gambar4 from "../assets/images/dokumentasi/dokumentasi4.png";
import gambar5 from "../assets/images/dokumentasi/dokumentasi5.jpg";
import gambar6 from "../assets/images/dokumentasi/dokumentasi6.jpg";
import gambar7 from "../assets/images/dokumentasi/dokumentasi7.jpg";
import gambar8 from "../assets/images/dokumentasi/dokumentasi8.jpg";

//gambar dibawah
import gambarBawah1 from "../assets/images/dokumentasi/gambar-bawah-1.png";
import gambarBawah2 from "../assets/images/dokumentasi/gambar-bawah-2.png";
import gambarBawah3 from "../assets/images/dokumentasi/gambar-bawah-3.png";
import gambarBawah4 from "../assets/images/dokumentasi/gambar-bawah-4.png";
import gambarBawah5 from "../assets/images/dokumentasi/gambar-bawah-5.png";
import gambarBawah6 from "../assets/images/dokumentasi/gambar-bawah-6.png";
import gambarBawah7 from "../assets/images/dokumentasi/gambar-bawah-7.png";

const row1Images = [
  gambar1,
  gambar2,
  gambar3,
  gambar4,
  gambar5,
  gambar6,
  gambar7,
  gambar8,
];
const row2Images = [
  gambarBawah1,
  gambarBawah2,
  gambarBawah3,
  gambarBawah4,
  gambarBawah5,
  gambarBawah6,
  gambarBawah7,
].reverse();

const Documentation = () => {
  return (
    <section
      id="documentation"
      className="min-h-screen w-full bg-gradient-to-b from-black to-[#0a192f] py-20 flex flex-col justify-center items-center overflow-hidden relative"
    >
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
          className="h-1 bg-blue-500 mx-auto mt-4"
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 mt-6 text-sm md:text-lg max-w-2xl mx-auto"
        >
          Activities, events, and vibrant moments captured within the
          Informatics Engineering department.
        </motion.p>
      </div>

      {/* --- MARQUEE ROWS --- */}
      {/* PERUBAHAN DISINI: gap-4 -> gap-10 (Jarak antara baris atas dan bawah) */}
      <div className="flex flex-col gap-10 w-full">
        {/* ROW 1: CEPAT */}
        <DocumentationMarquee
          images={row1Images}
          duration={12}
          reverse={false}
        />

        {/* ROW 2: LAMBAT */}
        <DocumentationMarquee
          images={row2Images}
          duration={24}
          reverse={false}
        />
      </div>
    </section>
  );
};

export default Documentation;
