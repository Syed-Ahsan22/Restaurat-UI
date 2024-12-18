import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="">
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
      </div> <br /> <br />
      <div className="w-[200]flex space-x-2 items-center relative left-[690px]">
                  <input
                    className="p-3 rounded-md text-black w-[300px]"
                    type="text"
                    placeholder="Searching..."
                  />
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-md">
                    Search
                  </button>
                </div>
        <div className="flex justify-center">
            
            <Image
                      src="/Blog1.png"
                      alt="Blog"
                      width={425}
                      height={304}
                      className=""
                    />
                   
                    <Image
                      src="/blog2.png"
                      alt="Blog"
                      width={400}
                      height={300}
                      className=""
                    />
                    
        </div>

        <div className="flex justify-center">
            
            <Image
                      src="/Blog3.png"
                      alt="Blog"
                      width={425}
                      height={304}
                      className=""
                    />
                   
                    <Image
                      src="/Blog4.png"
                      alt="Blog"
                      width={400}
                      height={300}
                      className=""
                    />
                    
        </div>

        <div className="flex justify-center">
            
            <Image
                      src="/Blog5.png"
                      alt="Blog"
                      width={425}
                      height={304}
                      className=""
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
