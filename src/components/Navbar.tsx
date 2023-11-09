import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import SocialMediaButton from "./SocialMediaButton";

const Navbar = () => {
  return (
    <nav className="flex justify-center border-b border-b-slate-200 bg-slate-100 px-3 py-2 md:px-0">
      <ul className="flex list-none items-center justify-center gap-4 lg:w-3/5">
        <li>
          <SocialMediaButton
            url={"https://www.linkedin.com/in/henriquerohden"}
            text="LinkedIn profile"
            icon={<FaLinkedin />}
          />
        </li>
        <li>
          <SocialMediaButton
            url={"https://www.github.com/hrohden"}
            text="GitHub account"
            icon={<FaGithub />}
          />
        </li>
        <li>
          <SocialMediaButton
            url={"https://www.twitter.com/henriquerohden"}
            text="Twitter profile"
            icon={<RiTwitterXFill />}
          />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
