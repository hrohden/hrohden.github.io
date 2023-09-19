function App() {
  return (
    <main>
      <section className="bg-gray-900 pb-6 pt-6">
        <div className="max-w-7xl flex mx-auto justify-evenly">
          <div className="flex justify-end flex-col gap-6">
            <h1 className="text-white text-6xl font-bold tracking-tight">Hello! I'm Henrique</h1>
            <p className="text-white text-2xl tracking-tight">(it's pronounced <span className="text-gray-400">/ẽ'ʁiki/</span> and has no diacritics)</p>
            <h2 className="text-white text-4xl tracking-tight">I'm a Full Stack Developer.</h2>
          </div>
          <div>
            <img src="https://placehold.co/200" alt="" />
          </div>
        </div>
      </section>
      {/* <div className="flex-col m-auto flex gap-8">\
        <div className="text-center">
          <a href="https://www.linkedin.com/in/henriquerohden/?locale=en_US" target="_blank" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">LinkedIn</a>
          <a href="https://github.com/hrohden" target="_blank" className="bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded ml-2">GitHub</a>
        </div>
      </div> */}
    </main>
  )
}

export default App
