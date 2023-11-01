const Navbar = () => {
  return (
    <nav className="flex justify-center py-6 border-b-2 border-black">
      <ul className="list-none flex gap-16">
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            About
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            Work experience
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            Contact
          </a>
        </li>
        <li className="text-center">
          <a href="#" className="font-semibold text-sm">
            Resumé
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
