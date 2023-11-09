import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import WorkExperienceSection from "./sections/WorkExperienceSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto lg:w-3/5">
        <Hero />
        <About />
        <WorkExperienceSection />
        <Contact />
      </main>
    </>
  );
}

export default App;
