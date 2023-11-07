function App() {
  return (
    <main className="container mx-auto">
      <nav className="flex justify-center py-6 border-b-2 border-slate-200">
        <ul className="list-none flex gap-16">
          <li className="text-center">
            <a href="#" className="font-semibold text-sm">
              About
            </a>
          </li>
          <li className="text-center">
            <a href="#" className="font-semibold text-sm">
              Work experience
            </a>
          </li>
          <li className="text-center">
            <a href="#" className="font-semibold text-sm">
              Contact
            </a>
          </li>
          <li className="text-center">
            <a href="#" className="font-semibold text-sm">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-16">
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold leading-7 text-rose-600">
            Full stack developer
          </p>
          <p>
            <h1 className="text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
              Hello! I'm Henrique
            </h1>
          </p>
          <p>
            <h2 className="text-2xl font-thin tracking-tighter text-slate-500">
              Welcome to my portfolio! 🚀
            </h2>
          </p>
        </div>
      </section>
      <section className="py-12 flex flex-col gap-6">
        <h2 className="text-4xl font-semibold tracking-tight">About</h2>
        <p className="text-xl text-slate-500">
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
        <div>
          <h3>Full Stack Engineer, Acorns (July 2022 - September 2023)</h3>
          <ul>
            <li>
              Developed comprehensive admin reports to analyze and track the
              performance of financial products, providing valuable insights to
              stakeholders and enabling data-driven decision-making for
              strategic planning, risk assessment, and business growth
              initiatives.
            </li>
            <li>
              Implemented highly efficient GitHub Action configurations to
              streamline and automate the version release process for multiple
              applications, resulting in considerable time and effort savings
              for the team.
            </li>
            <li>Technologies employed: AWS, SQL, Databricks, Java, React</li>
          </ul>
        </div>
      </section>
      <section className="py-12 bg-slate-400">
        <h2 className="text-4xl font-semibold tracking-tight">Contact</h2>
      </section>
    </main>
  );
}

export default App;
