import Image from "next/image";
import Navbar from "../Navbar/page"; // Ensure this path is correct

export default function About() {
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
          className="w-full object-cover" 
        />
      </div>

      {/* About Images Section */}
      <div className="mt-8 space-y-8">
        {["About1.png", "About3.png", "About6.png", "About7.png", "About8.png"].map((image, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={`/${image}`}
              alt={`About ${index + 1}`}
              width={index === 2 ? 1300 : 825} // Adjust width for About6
              height={404}
              className="rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10 mt-10">
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

        <hr className="bg-yellow-400 my-6" />

        <div className="mt-6 flex justify-center">
          <Image
            src="/footer.png"
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
