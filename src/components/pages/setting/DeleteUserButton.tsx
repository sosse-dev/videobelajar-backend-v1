import { useNavigate } from "react-router-dom";
import { user } from "@/type/types";
import { toast } from "sonner";

export default function DeleteUserButton({
  session,
}: {
  session: user | undefined;
}) {
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    const getUsers = localStorage.getItem("users");

    if (!getUsers) {
      toast.error("Pengguna tidak ada");
      return;
    }

    let users: user[] = JSON.parse(getUsers);

    // Find the index of the logged-in user
    const userIndex = users.findIndex(
      (user) =>
        user.email === session?.email && user.password === session?.password
    );

    if (userIndex === -1) {
      toast.error("Pengguna tidak ada");
      return;
    }

    users.splice(userIndex, 1); // hapus user sesuai indeks

    localStorage.removeItem("loggedInUser"); // kemudian hapus loggedInUser

    localStorage.setItem("users", JSON.stringify(users)); // update localstorage

    toast.success("Akun anda berhasil dihapus");
    navigate("/");
  };

  return (
    <button
      onClick={handleDeleteUser}
      className="bg-[#c62b2b] text-white font-bold py-2 px-7 rounded-lg w-full md:w-auto cursor-pointer hover:opacity-80"
    >
      Hapus Akun
    </button>
  );
}
