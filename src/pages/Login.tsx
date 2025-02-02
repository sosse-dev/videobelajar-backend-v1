import LoginForm from "../components/pages/login/LoginForm";
import Navbar from "../components/pages/_generic/navbar/Navbar";
import logo from "../assets/videobelajar-logo.png";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#fffbef]">
      <Navbar logo={logo} />

      <div className="flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
