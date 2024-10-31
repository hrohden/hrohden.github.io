import HeroActionButton from "../components/HeroActionButton";

const Hero = () => {
  return (
    <section className="flex flex-col gap-3 py-10">
      <p className="text-center text-xl font-semibold text-slate-500 dark:text-slate-400">
        Full stack developer
      </p>
      <h1 className="mb-3 text-center text-6xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
        Hello! I'm Henrique
      </h1>
      <p className="mb-6 text-center text-xl text-slate-800 dark:text-slate-200">
        Software Engineer with over 10 years of experience in full stack web development. Skills include Java, Python, Typescript, React, and databases. Domain expert in finances and payments field as the result of working at several commercial bank companies and fintech startups.
      </p>
      <HeroActionButton />
    </section>
  );
};
export default Hero;
