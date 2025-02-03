import Image from "next/image";
import Navbar from "../Navbar/page"; // Ensure you are importing the Navbar correctly.

export default function Menu() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Menu Section */}
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-4 md:px-10">
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm font-semibold">ShopNow</p>
          <div className="flex items-center space-x-2">
            <p className="text-white text-sm">English</p>
            <Image
              src="/DropDown.png"
              alt="Language dropdown"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Header Image Section */}
      <div className="mt-4 flex flex-col items-center">
        <Image
          src="/Our Menu.png"
          alt="Our Menu"
          width={225}
          height={104}
          className="mb-4"
        />
        <Image
          src="/Back.png"
          alt="Background"
          width={1420}
          height={500}
          className="w-full object-cover"
        />
      </div>

      {/* Starter Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="flex justify-center">
          <Image
            src="/starter1.png"
            alt="Starter"
            width={720}
            height={328}
            className="rounded-md shadow-lg w-full max-w-[320px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/starter2.png"
            alt="Starter"
            width={720}
            height={328}
            className="rounded-md shadow-lg w-full max-w-[320px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/starter3.png"
            alt="Starter"
            width={720}
            height={328}
            className="rounded-md shadow-lg w-full max-w-[320px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/starter4.png"
            alt="Starter"
            width={720}
            height={328}
            className="rounded-md shadow-lg w-full max-w-[320px]"
          />
        </div>
      </div>

      <br />

      <div className="w-full px-4 md:px-10 text-center">
        <span className="font-bold text-black">We Work With The Best People Team Syed</span>
        <br />
        <br />
        <Image
          src="/Logo.png"
          alt="Logo"
          width={720}
          height={128}
          className="rounded-md shadow-lg"
        />
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10 mt-12">
        <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <span className="text-lg font-semibold text-center md:text-left">
            Still You Need Our Support By Team Syed?
          </span>
          <div className="flex space-x-2 items-center">
            <input
              className="p-3 rounded-md text-black w-[300px] md:w-[400px]"
              type="text"
              placeholder="Searching..."
            />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
        <br />
        <hr className="bg-yellow-400" />
        <div className="mt-6 flex justify-center">
          <Image
            src="/footer.png" // Replace with actual footer image path
            alt="Footer Logo"
            width={1200}
            height={200}
            className="object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
