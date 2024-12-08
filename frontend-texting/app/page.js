import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import PopupPage from "./components/PopupPage";
import PopupPage2 from "./components/PopupPage2";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import HomeSection from "./components/HomeSection";

export default function Home() {
  return (
    <>
     {/* <Navbar/> */}
     {/* <PopupPage/> */}
     {/* <PopupPage2/> */}
     <HeroSection/>
     {/* <CategorySection/> */}
     <HomeSection/>
    </>
  );
}
