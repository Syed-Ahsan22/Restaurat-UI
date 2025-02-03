import Image from "next/image";
import Navbar from "../Navbar/page"; // Ensure you're importing Navbar correctly.

export default function Shop() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Header Image Section */}
      <div className="mt-4 bg-black">
        <Image src="/Back.png" alt="Back" width={1920} height={950} className="w-full object-cover" />
      </div>

      <div className="mt-4 flex flex-col items-center">
        <Image
          src="/Shop2.png"
          alt="Shop"
          width={1020}
          height={1920}
          className="mb-4 max-w-full object-contain"
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
