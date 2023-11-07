import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Intro from "./sections/Intro";
import WorkExperienceSection from "./sections/WorkExperienceSection";

function App() {
  return (
    <main className="container mx-auto xl:w-3/5">
      <Navbar />
      <Intro />
      <About />
      <WorkExperienceSection />
      <Contact />
    </main>
  );
}

export default App;
