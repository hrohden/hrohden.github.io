import {
  BsCloudDownloadFill,
  BsFillBriefcaseFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-black py-2">
      <ul className="flex list-none justify-between gap-2 text-sm font-semibold tracking-tight md:justify-evenly">
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            <BsInfoCircleFill />
            About
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            <BsFillBriefcaseFill />
            Experience
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            <IoMail />
            Contact
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            <BsCloudDownloadFill />
            Resumé PDF
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
