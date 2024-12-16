import Image from "next/image";
import Navbar from "./Navbar/page";
import Home from "./Home/page";
import Menu from "./Menu/page";



export default function Main() {
  return (
      <>
      <Navbar />
      <Home />
      <Menu />
      </>
  );
}
