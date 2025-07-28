import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FeedbackModal from "./FeedbackModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleLinkClick = () => setIsOpen(false);
  const handleFeedbackClick = () => {
    setIsOpen(false);
    setShowFeedback(true);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-blue-700"
            onClick={handleLinkClick}
          >
            DevToolkit
          </Link>

          <div className="hidden md:flex items-center space-x-6">
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
            <button
              onClick={() => setShowFeedback(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
            >
              Give Feedback
            </button>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-inner rounded-b-md">
            <Link to="/" onClick={handleLinkClick} className="block text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/faq" onClick={handleLinkClick} className="block text-gray-700 hover:text-blue-600">
              FAQ
            </Link>
            <Link to="/dashboard" onClick={handleLinkClick} className="block text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <button
              onClick={handleFeedbackClick}
              className="w-full text-left text-gray-700 hover:text-blue-600"
            >
              Give Feedback
            </button>
          </div>
        )}
      </nav>

      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </>
  );
}
