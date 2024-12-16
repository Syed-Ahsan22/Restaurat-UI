import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div>
      {/* Navbar Section */}
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-10">
        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          {["Home", "Menu", "Shop", "About", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="text-white text-sm hover:text-yellow-500 transition duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

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
      <div className="flex justify-center mt-6">
        <Image
          src="/starter1.png"
          alt="Starter"
          width={720}
          height={328}
          className="rounded-md shadow-lg"
        />
      </div> <br />
      <div className="flex justify-center mt-6">
        <Image
          src="/starter2.png"
          alt="Starter"
          width={720}
          height={328}
          className="rounded-md shadow-lg"
        />
      </div> <br />
      <div className="">
        <Image
          src="/Clients.png"
          alt="Starter"
          width={1335}
          height={200}
          className="rounded-md shadow-lg"
        />
      </div> <br />
      <div className="flex justify-center mt-6">
        <Image
          src="/starter3.png"
          alt="Starter"
          width={720}
          height={328}
          className="rounded-md shadow-lg"
        />
      </div> <br />
      <div className="flex justify-center mt-6">
        <Image
          src="/starter4.png"
          alt="Starter"
          width={720}
          height={328}
          className="rounded-md shadow-lg"
        />
      </div> <br /> <br />
      <div className="w-[1322px] h-[275px] justify-center justify-items-center">
          <span className="font-bold text-black">We Work With The Best People Team Syed</span> <br /> <br /> <br />
          <Image
          src="/Logo.png"
          alt="Logo"
          width={720}
          height={128}
          className="rounded-md shadow-lg"
        />
      </div>
      {/* Footer Section */}
            <footer className="w-full bg-black text-white py-10">
              <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
                <span className="text-lg font-semibold text-center md:text-left">
                  Still You Need Our Support By Team Syed?
                </span>
                <div className="flex space-x-2 items-center">
                  <input
                    className="p-3 rounded-md text-black w-[300px]"
                    type="text"
                    placeholder="Searching..."
                  />
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">
                    Search
                  </button>
                </div>
              </div> <br /><hr className="bg-yellow-400"/>
              <div className="mt-6 flex justify-center">
          <Image
            src="/footer.png" // Replace this with the actual image file name in your public directory
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
