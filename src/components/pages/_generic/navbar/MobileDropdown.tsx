import { Hamburger } from "../../../icons/icons";
import { useState } from "react";
import LogoutButton from "./LogoutButton";

export default function MobileDropdown({
  isHomepage,
}: {
  isHomepage: boolean;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`text-gray-600 ${isHomepage ? "md:hidden" : "hidden"}`}
      >
        <Hamburger />
      </button>

      <div
        className={`absolute top-18 left-0 w-full h-fit flex flex-col bg-white shadow-2xl z-50 border-t text-gray-500 font-semibold border-gray-300 md:hidden ${
          isNavOpen ? "" : "hidden"
        }`}
      >
        <button className="text-start py-4 pl-[1rem] border-b border-gray-300 active:bg-gray-50">
          Kategori
        </button>
        <button className="text-start py-4 pl-[1rem] border-b border-gray-300 active:bg-gray-50">
          Profil Saya
        </button>
        <button className="text-start py-4 pl-[1rem] border-b border-gray-300 active:bg-gray-50">
          Kelas Saya
        </button>
        <button className="text-start py-4 pl-[1rem] border-b border-gray-300 active:bg-gray-50">
          Pesanan Saya
        </button>

        <LogoutButton />
      </div>
    </>
  );
}
