import HeroActionButton from "../components/HeroActionButton";

const Hero = () => {
  return (
    <section className="flex flex-col gap-3 py-10">
      <p className="text-center text-xl font-semibold text-slate-500">
        Full stack developer
      </p>
      <h1 className="mb-3 text-center text-6xl font-bold tracking-tight text-slate-800">
        Hello! I'm Henrique
      </h1>
      <p className="mb-6 text-center text-xl text-slate-800">
        With experience in frontend and backend development, I have consistently
        leveraged my technical skills to create efficient, secure, and
        user-friendly applications.
      </p>
      <HeroActionButton />
    </section>
  );
};
export default Hero;
