import Image from "next/image";
import Navbar from "../Navbar/page"; // Import Navbar correctly

export default function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[250px] md:h-[350px] bg-gray-200 flex items-center justify-center">
        <p className="text-3xl md:text-4xl font-bold text-black">Contact Us</p>
      </div>

      {/* Contact Form & Details */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-md p-6 md:p-8">
          <p className="text-2xl font-bold mb-4">Send Us a Message</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                // rows="5" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-yellow-600 text-white px-6 py-2 rounded-md shadow-md w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-2xl font-bold mb-2">Our Address</p>
            <p className="text-gray-600">Street Barrage Colony Syed House, City Hyd, Pakistan</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Call Us</p>
            <p className="text-gray-600">310-451-1387</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Email Us</p>
            <p className="text-gray-600">syeddahsan302@gmail.com</p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">Follow Us</p>
            <div className="flex space-x-4">
              <Image src="/git.jpeg" alt="GitHub" width={24} height={24} className="cursor-pointer" />
              <Image src="/face.jpeg" alt="Facebook" width={24} height={24} className="cursor-pointer" />
              <Image src="/what.jpeg" alt="WhatsApp" width={24} height={24} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10">
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
