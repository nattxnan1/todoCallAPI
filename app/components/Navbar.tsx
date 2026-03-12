import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-blue-300 text-white shadow-md">
      
      <div className="space-x-6 text-lg font-medium">
        <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
        <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
        <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
      </div>

      <div className="space-x-4">
        <Link 
          href="/login" 
          className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-200 transition"
        >
          Login
        </Link>

        <Link 
          href="/register" 
          className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition"
        >
          Register
        </Link>
      </div>

    </div>
  );
};

export default Navbar;