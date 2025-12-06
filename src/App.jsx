// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Labs from "./sections/Labs";
import Lecturers from "./sections/Lecturers";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Labs />
      <Lecturers />
    </main>
  );
}

export default App;
