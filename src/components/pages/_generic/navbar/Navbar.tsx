import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";

export default function Navbar({
  logo,
  avatar,
  page,
}: {
  logo: string;
  avatar?: string;
  page?: string;
}) {
  const isHomepage = page === "homepage";

  return (
    <nav className="w-full max-w-6xl relative left-0 right-0 inset-0 m-auto flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shadow-lg md:shadow-none">
      <Link to="/" className="w-[237px] h-[56px]">
        <img src={logo} className="h-[40px] mt-3 ml-0" alt="Logo" />
      </Link>

      {/* Mobile */}
      <MobileDropdown isHomepage={isHomepage} />

      {/* Tablet and Desktop */}
      <div
        className={`items-center gap-9 ${
          isHomepage ? "hidden md:flex" : "hidden"
        }`}
      >
        <Dropdown />
        <img src={avatar} className="w-11 h-11 rounded-lg" alt="Avatar" />
      </div>
    </nav>
  );
}
