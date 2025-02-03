import Image from "next/image";
import Navbar from "../Navbar/page"; // Ensure correct import path

export default function Blog() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Header Image Section */}
      <div className="mt-4">
        <Image 
          src="/header.png" 
          alt="Header banner" 
          width={1920} 
          height={950} 
          className="w-full h-auto object-cover" 
        />
      </div>

      {/* 🔍 Search Bar Section */}
      <div className="flex justify-center mt-8 px-4">
        <div className="w-full max-w-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
          <input
            className="p-3 rounded-md text-black w-full sm:w-[350px] md:w-[400px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-yellow-600 text-white px-5 py-2 rounded-md w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* 📸 Blog Images Section */}
      <div className="mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          <Image src="/Blog1.png" alt="Blog 1" width={425} height={304} className="w-full h-auto rounded-md shadow-lg" />
          <Image src="/Blog2.png" alt="Blog 2" width={400} height={300} className="w-full h-auto rounded-md shadow-lg" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-6">
          <Image src="/Blog3.png" alt="Blog 3" width={425} height={304} className="w-full h-auto rounded-md shadow-lg" />
          <Image src="/Blog4.png" alt="Blog 4" width={400} height={300} className="w-full h-auto rounded-md shadow-lg" />
        </div>

        <div className="flex justify-center mt-6">
          <Image src="/Blog5.png" alt="Blog 5" width={425} height={304} className="w-full max-w-[425px] h-auto rounded-md shadow-lg" />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10 mt-10">
        <div className="max-w-[1170px] mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
          <span className="text-lg font-semibold text-center md:text-left">
            Still Need Support from Team Syed?
          </span>
          <div className="w-full max-w-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
            <input
              className="p-3 rounded-md text-black w-full sm:w-[350px] md:w-[400px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-yellow-600 text-white px-5 py-2 rounded-md w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        <hr className="bg-yellow-400 my-6 mx-4" />

        <div className="mt-6 flex justify-center">
          <Image
            src="/footer.png"
            alt="Footer Logo"
            width={1200}
            height={200}
            className="w-full max-w-[1200px] h-auto object-contain"
          />
        </div>
      </footer>
    </div>
  );
}
