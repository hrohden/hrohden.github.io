import {
  BsCloudDownloadFill,
  BsFillBriefcaseFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="py-2 border-b-2 border-black">
      <ul className="list-none flex gap-2 justify-between md:justify-evenly text-sm font-semibold">
        <li className="text-center">
          <a href="#" className="flex gap-1 items-center">
            <BsInfoCircleFill />
            About
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex gap-1 items-center">
            <BsFillBriefcaseFill />
            Experience
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex gap-1 items-center">
            <IoMail />
            Contact
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex gap-1 items-center">
            <BsCloudDownloadFill />
            Resumé PDF
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
