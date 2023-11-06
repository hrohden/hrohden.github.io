import { BsCloudDownload } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="py-2">
      <ul className="flex list-none items-center justify-end gap-4">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-row items-center gap-2 rounded-md bg-gradient-to-b from-sky-500 to-blue-600 px-3 py-2 font-semibold text-white shadow"
          >
            <BsCloudDownload />
            Resumé
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
