import { BookIcon, ListOrderedIcon, UserIcon } from "lucide-react";
import MenuItem from "./MenuItem";

export default function LeftBar() {
  return (
    <div className="lg:w-72 flex-shrink-0">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#222325]">Ubah Profil</h1>
        <p className="text-base text-[#333]/[0.68]">Ubah data diri Anda</p>
      </div>

      <div className="bg-white rounded-lg border border-[#3a3541]/[0.12] p-4 space-y-2">
        <MenuItem
          isActive
          icon={<UserIcon />}
          to="/setting/profile"
          label="Profil Saya"
        />
        <MenuItem
          icon={<ListOrderedIcon />}
          to="/setting/order"
          label="Pesanan Saya"
        />
        <MenuItem icon={<BookIcon />} to="/setting/class" label="Kelas Saya" />
      </div>
    </div>
  );
}
