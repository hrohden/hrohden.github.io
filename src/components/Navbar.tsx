
const Navbar = () => {
  return (
    <nav className="border-b-2 border-black py-2">
      <ul className="flex list-none gap-2 text-sm font-semibold tracking-tight">
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            About
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            Experience
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            Contact
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="flex items-center gap-1">
            Resumé PDF
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
