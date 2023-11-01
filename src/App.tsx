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
      <section className="py-16 flex flex-col items-center">
        <p>
          <h1 className="text-6xl font-semibold tracking-tighter">
            Hello! I'm Henrique
          </h1>
        </p>
        <p>
          <h2 className="text-4xl font-thin tracking-tighter">
            Welcome to my portfolio! 🙂
          </h2>
        </p>
      </section>
      <section className="py-12 bg-slate-400">
        <h2 className="text-4xl font-semibold tracking-tight">About</h2>
      </section>
      <section className="py-12">
        <h2 className="text-4xl font-semibold tracking-tight">
          Work experience
        </h2>
      </section>
      <section className="py-12 bg-slate-400">
        <h2 className="text-4xl font-semibold tracking-tight">Contact</h2>
      </section>
    </main>
  );
}

export default App
