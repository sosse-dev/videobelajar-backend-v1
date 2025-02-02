import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function LogoutButton() {
  return (
    <Link to="/login">
      <button className="w-full flex gap-x-2 text-red-400 text-start cursor-pointer py-4 pl-[1rem] border-b hover:bg-gray-100 border-gray-300 active:bg-gray-50">
        Keluar
        <LogOut />
      </button>
    </Link>
  );
}
