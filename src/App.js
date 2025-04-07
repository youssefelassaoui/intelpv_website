import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import Contact from "./components/Contact";
import DemoForm from "./components/DemoForm";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        <Hero />
        <About />
        <Features />
        <Team />
        <Partners />
        <Contact />
        <DemoForm />
        <Footer />
      </div>
    </div>
  );
};

export default App;
