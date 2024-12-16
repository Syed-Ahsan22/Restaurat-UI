import Image from "next/image";
import Navbar from "../Navbar/page";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">

        <Navbar />
      {/* Container for the main content */}
      <div className="w-full max-w-[1320px]">
        {/* About Section */}
        <Image
          src="/About.png"
          alt="About"
          width={920}
          height={362}
          className="mx-auto"
        />

        <br />
        <br />
        <br />

        {/* Hero Section */}
        <div className="text-center">
          <span className="block font-semibold text-yellow-600 text-lg">
            Food Category - Syed Restaurant
          </span>
          <span className="block font-bold text-blue-100 text-xl mt-2">
            Choose Food Items By Syed Ahsan
          </span>
          <div className="mt-6">
            <Image
              src="/box.png"
              alt="Box"
              width={920}
              height={362}
              className="mx-auto"
            />
          </div>
        </div>

        <br />
        <br />

        {/* Image Sections */}
        {[
          { src: "/Why.png", alt: "Why", width: 920, height: 362 },
          { src: "/Clients.png", alt: "Clients", width: 1320, height: 200 },
          { src: "/Our.png", alt: "Our", width: 920, height: 362 },
          { src: "/Cheef.png", alt: "Cheef", width: 1320, height: 200 },
          { src: "/Rev.png", alt: "Rev", width: 920, height: 362 },
          { src: "/Revs.png", alt: "Revs", width: 1320, height: 130 },
          { src: "/Blog.png", alt: "Blog", width: 920, height: 362 },
        ].map((image, index) => (
          <div className="w-full max-w-[1320px] my-6" key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mx-auto"
            />
          </div>
        ))}
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
      src="/Footer.png" // Replace this with the actual image file name in your public directory
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
