import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Intro from "./sections/Intro";
import WorkExperienceSection from "./sections/WorkExperienceSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto lg:w-3/5">
        <Intro />
        <About />
        <WorkExperienceSection />
        <Contact />
      </main>
    </>
  );
}

export default App;
