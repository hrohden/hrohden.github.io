import About from "./About";
import Contact from "./Contact";
import Intro from "./Intro";
import Navbar from "./Navbar";
import WorkExperienceSection from "./WorkExperienceSection";

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
