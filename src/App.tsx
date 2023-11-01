function App() {
  return (
    <main className="container mx-auto">
      <nav className="flex justify-center py-6">
        <ul className="list-none flex gap-16">
          <li>
            <a href="#" className="font-semibold text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm">
              Work experience
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-sm">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-12">
        <p>Hello! I'm Henrique</p>
        <p>Welcome to my portfolio! 🙂</p>
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
