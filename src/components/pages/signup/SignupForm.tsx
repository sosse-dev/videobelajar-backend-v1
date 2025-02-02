import { EyeOffIcon, IndonesianFlag, X } from "../../icons/icons";
import { Link } from "react-router-dom";
import DividerForm from "../_generic/form/DividerForm";
import GoogleButton from "../_generic/form/GoogleButton";
import HeaderForm from "../_generic/form/HeaderForm";

export default function SignupForm() {
  return (
    <form className="w-full max-w-[500px] border border-gray-300 bg-white p-6 rounded-lg">
      {/* Form Header */}
      <HeaderForm
        title="Pendaftaran Akun"
        desc="Yuk, daftarkan akunmu sekarang juga!"
      />

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="text-sm text-opacity-60">
            Nama Lengkap<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            className="w-full p-2.5 rounded border border-gray-300 mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-opacity-60">
            E-Mail<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            placeholder="xxx@example.com"
            className="w-full p-2.5 rounded border border-gray-300 mt-1"
          />
        </div>

        <div>
          <label className="text-sm text-opacity-60">
            No. Hp<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex flex-row-reverse items-center gap-5">
            <input
              type="text"
              placeholder="083940923849"
              className="w-[70%] sm:flex-grow p-2.5 rounded border border-gray-300 mt-1"
            />
            <div className="flex items-center border rounded border-gray-300 h-10">
              <IndonesianFlag />
              <div className="flex items-center justify-between px-1.5 text-sm cursor-pointer">
                <span className="mx-2">+62</span>
                <X />
              </div>
            </div>
          </div>
        </div>

        {/* Password Fields */}
        <div>
          <label className="text-sm text-opacity-60">
            Kata Sandi<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="********"
              className="w-full p-2.5 rounded border border-gray-300 mt-1 pr-10"
            />
            <div className="absolute right-2 top-3 cursor-pointer">
              <EyeOffIcon />
            </div>
          </div>
        </div>

        <div>
          <label className="text-sm text-opacity-60">
            Konfirmasi Kata Sandi
            <span className="text-red-500 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="********"
              className="w-full p-2.5 rounded border border-gray-300 mt-1 pr-10"
            />
            <div className="absolute right-2 top-3 cursor-pointer">
              <EyeOffIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Forgot Password */}
      <a
        href="#"
        className="text-sm text-opacity-60 font-bold mt-4 block text-right"
      >
        Lupa Password?
      </a>

      {/* Action Buttons */}
      <div className="space-y-3.5 mt-5">
        <button className="w-full cursor-pointer bg-green-500 text-white py-2.5 rounded-lg text-sm font-bold">
          Daftar
        </button>
        <Link to="/login">
          <button className="w-full cursor-pointer bg-green-50 text-green-500 py-2.5 rounded-lg text-sm font-bold">
            Masuk
          </button>
        </Link>
      </div>

      {/* Divider */}
      <DividerForm />

      <GoogleButton />
    </form>
  );
}
