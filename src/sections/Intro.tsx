import me from "../assets/me.jpg";

const Intro = () => {
  return (
    <section className="py-16 flex">
      <div className="flex flex-col gap-4 w-3/4">
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
      <div className="w-1/4">
        <img src={me} className="object-cover rounded-lg rotate-6" />
      </div>
    </section>
  );
};
export default Intro;
