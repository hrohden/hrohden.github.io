import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import me from "../assets/me.jpg";
import SocialMediaButton from "../components/SocialMediaButton";

const Intro = () => {
  return (
    <section className="grid grid-cols-4 gap-2 py-8">
      <div className="col-span-3 flex flex-row items-center">
        <div className="flex w-3/4 flex-col gap-1">
          <p className="text-base font-semibold leading-7 tracking-tight">
            Full stack developer
          </p>
          <h1 className="text-2xl font-extrabold tracking-tighter sm:text-5xl sm:leading-[3.5rem]">
            Hello! I'm Henrique
          </h1>
          <h2 className="mb-2 text-lg font-thin tracking-tighter">
            Welcome to my portfolio! 🚀
          </h2>
        </div>
      </div>
      <div>
        <img src={me} className="w-full rotate-6 rounded-lg" />
      </div>
      <ul className="flex list-none gap-2">
        <li>
          <SocialMediaButton
            url={"https://www.linkedin.com/in/henriquerohden"}
            icon={<FaLinkedin />}
            text="LinkedIn"
          />
        </li>
        <li>
          <SocialMediaButton
            text="GitHub"
            icon={<FaGithub />}
            url={"https://www.github.com/hrohden"}
          />
        </li>
        <li>
          <SocialMediaButton
            url={"https://www.twitter.com/henriquerohden"}
            icon={<RiTwitterXFill />}
            text="Twitter"
          />
        </li>
      </ul>
    </section>
  );
};
export default Intro;
