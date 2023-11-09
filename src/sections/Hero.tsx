import { BsCloudDownload } from "react-icons/bs";

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
      <p className="text-center">
        <a
          href=""
          className="inline-flex w-3/4 items-center justify-center gap-2 rounded-full bg-gradient-to-b 
          from-sky-500 to-blue-600 px-4 py-3 text-lg font-semibold text-white
           shadow-md hover:bg-gradient-to-b hover:from-sky-400 hover:to-blue-500 focus:ring md:w-1/4"
        >
          <BsCloudDownload className=" text-sky-200" />
          Resumé PDF
        </a>
      </p>
    </section>
  );
};
export default Hero;
