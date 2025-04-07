import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Features from "./components/sections/Features";
import Team from "./components/sections/Team";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
