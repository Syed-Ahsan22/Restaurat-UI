import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black">
      {/* Navbar Section */}
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-10">
        {/* Centered Navigation Links */}
        <div className="flex items-center justify-center space-x-8">
          <Link href="/Home" className="text-white text-sm">
            Home
          </Link>
          <Link href="/Menu" className="text-white text-sm">
            Menu
          </Link>
          <Link href="/Shop" className="text-white text-sm">
            Shop
          </Link>
          <Link href="/About" className="text-white text-sm">
            About
          </Link>
          <Link href="/Blog" className="text-white text-sm">
            Blog
          </Link>
          <Link href="/Contact" className="text-white text-sm">
            Contact
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm font-semibold">ShopNow</p>
          <div className="flex items-center space-x-2">
            <p className="text-white text-sm">English</p>
            {/* Placeholder for dropdown image */}
            <Image src="/DropDown.png" alt="Language dropdown" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* Header Image Section */}
      <div className="mt-4">
        <Image src="/header.png" alt="Header banner" width={1920} height={950} />
      </div>
    </div>
  );
}
