import Navbar from "./Navbar";
import WorkExperienceComponent from "./WorkExperienceComponent";
import { workExperienceItems } from "./workExperienceItems";

function App() {
  return (
    <main className="container mx-auto xl:w-3/5">
      <Navbar />
      <section className="py-16">
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold leading-7">
            Full stack developer
          </p>
          <h1 className="text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl sm:leading-[3.5rem]">
            Hello! I'm Henrique
          </h1>
          <h2 className="text-2xl font-thin tracking-tighter">
            Welcome to my portfolio! 🚀
          </h2>
        </div>
      </section>
      <section className="py-12 flex flex-col gap-6">
        <h2 className="text-4xl font-semibold tracking-tight">About</h2>
        <p className="text-xl">
          With expertise in both frontend and backend development, I have
          consistently leveraged my technical skills to create efficient,
          secure, and user-friendly applications. Equipped with strong corporate
          experience working for several years in large and middle-size
          financial companies, I have acquired the necessary skills to plan,
          develop, and maintain web applications.
        </p>
      </section>
      <section className="py-12">
        <h2 className="text-4xl font-semibold tracking-tight">
          Work experience
        </h2>
        <div className="flex flex-col gap-6">
          {workExperienceItems.map((work) => (
            <WorkExperienceComponent workExperience={work} key={work.company} />
          ))}
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-4xl font-semibold tracking-tight">Contact</h2>
      </section>
    </main>
  );
}

export default App;
