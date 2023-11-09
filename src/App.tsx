import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WorkExperienceSection from "./sections/WorkExperienceSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-3 md:px-0 lg:w-3/5">
        <Hero />
        <WorkExperienceSection />
      </main>
    </>
  );
}

export default App;
