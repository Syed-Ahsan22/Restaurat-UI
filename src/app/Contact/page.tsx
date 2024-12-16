import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[90px] bg-black flex items-center justify-between px-10">
        <div className="flex items-center space-x-8">
          {["Home", "Menu", "Shop", "About", "Blog", "Contact"].map((item) => (
            <Link key={item} href={`/${item}`} className="text-white text-sm">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm font-semibold">ShopNow</p>
          <div className="flex items-center space-x-2">
            <p className="text-white text-sm">English</p>
            <Image src="/DropDown.png" alt="" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="w-full h-[350px] bg-gray-200 flex items-center justify-center">
        <p className="text-4xl font-bold text-black">Contact Us</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-md p-8">
          <p className="text-2xl font-bold mb-4">Send Us a Message</p>
          <form>
            <div className="mb-4">
              <p className="block text-gray-700 font-medium mb-2">Name</p>
              <input className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <p className="block text-gray-700 font-medium mb-2">Email</p>
              <input className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div className="mb-4">
              <p className="block text-gray-700 font-medium mb-2">Message</p>
              {/* <textarea rows="5" className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea> */}
            </div>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-md shadow-md">
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <p className="text-2xl font-bold mb-2">Our Address</p>
            <p className="text-gray-600">Street Barrage colony Syed House, City Hyd, Pakistan</p>
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
              <Image src="/git.jpeg" alt="" width={24} height={24} />
              <Image src="/face.jpeg" alt="" width={24} height={24} />
              <Image src="/what.jpeg" alt="" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
