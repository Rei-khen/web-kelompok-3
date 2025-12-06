// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Labs from "./sections/Labs"; // <-- Import ini

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Labs />
    </main>
  );
}

export default App;
