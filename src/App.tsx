function App() {
  return (
    <main className="flex p-4 h-screen">
      <div className="flex-col m-auto flex gap-8">
        <h1 className="font-serif text-6xl text-center">Hello! I'm Henrique</h1>
        <h2 className="font-serif text-4xl text-center">I'm a Fullstack Developer.</h2>
        <h2 className="font-serif text-4xl text-center">(and this is my personal page)</h2>
        <div className="text-center">
          <a href="https://www.linkedin.com/in/henrique-rohden/?locale=en_US" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">LinkedIn</a>
          <a href="https://github.com/hrohden" target="_blank" className="bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded ml-2">GitHub</a>
        </div>
      </div>
    </main>
  )
}

export default App
