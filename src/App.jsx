// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Labs from "./sections/Labs";
import Lecturers from "./sections/Lecturers";
import Academics from "./sections/Academics";
import Documentation from "./sections/Documentation";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Labs />
      <Lecturers />
      <Academics />
      <Documentation />
    </main>
  );
}

export default App;
