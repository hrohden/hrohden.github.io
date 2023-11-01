import {
  BsCloudDownloadFill,
  BsFillBriefcaseFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="flex justify-center py-6 border-b-2 border-black">
      <ul className="list-none flex gap-16">
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            <BsInfoCircleFill />
            About
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            <BsFillBriefcaseFill />
            Work experience
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            <IoMail />
            Contact
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            <BsCloudDownloadFill />
            Resumé PDF
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
