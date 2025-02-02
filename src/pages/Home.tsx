// Assets
import logo from "../assets/videobelajar-logo.png";
import avatar from "../assets/avatar.png";
import thumbnail from "../assets/thumbnail.png";
import banner1 from "../assets/banner1.png";
// Components
import Navbar from "../components/pages/_generic/navbar/Navbar";
import Banner from "../components/pages/homepage/header/Banner";
import VideoSection from "../components/pages/homepage/main/VideoSection";
import Newsletter from "../components/pages/homepage/main/Newsletter";
import FooterContent from "../components/pages/homepage/footer/FooterContent";
// shadcn ui buat dropdown pc
export default function Home() {
  return (
    <>
      <Navbar avatar={avatar} logo={logo} page="homepage" />

      <header className="flex flex-col items-center px-3 xl:px-0">
        <Banner banner1={banner1} />
      </header>

      <main className="flex flex-col items-center gap-16 my-16 px-7 xl:px-0">
        <VideoSection avatar={avatar} thumbnail={thumbnail} />

        <Newsletter />
      </main>

      <footer className="bg-white border-t border-gray-200 pt-12 px-7 xl:px-0">
        <FooterContent logo={logo} />
      </footer>
    </>
  );
}
