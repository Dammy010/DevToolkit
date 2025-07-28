import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          DevToolkit
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-blue-600">
            FAQ
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-inner">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/faq"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/dashboard"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
