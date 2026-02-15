
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionAlternate from './components/SectionAlternate';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-obsidian min-h-screen text-white selection:bg-voltage selection:text-white">
      <Navbar />

      <main>
        <Hero />

        <SectionAlternate
          id="about"
          title="About The Lab"
          description="We are not a fitness club. We are a training facility. LiftLab was built for the dedicated, the disciplined, and the determined. Our philosophy is simple: no gimmicks, just results. We provide the atmosphere, the equipment, and the expertise—you provide the sweat."
          image="/images/about_img.png"
        />

        <SectionAlternate
          title="How We Train"
          description="Our methodology combines old-school strength principles with modern sports science. Whether you're training for competition or life, our programs are designed to build functional power, resilience, and mental toughness. Precision is our standard."
          image="/images/train_img.png"
          reversed={true}
        />

        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
