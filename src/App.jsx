import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import VisionMissionValues from "./components/VisionMissionValues";

export default function App() {
  return (
    <div className="bg-saudi-page min-h-screen">
      <Navbar />
      <Hero />
      <Solutions />
      <Projects />
      <VisionMissionValues />
      <Footer />
    </div>
  );
}
