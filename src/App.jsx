import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FeedbackModal from "./components/FeedbackModal";
import HomePage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <Toaster position="top-right" />
      <Navbar onFeedbackClick={() => setShowFeedback(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

      {showFeedback && (
        <FeedbackModal onClose={() => setShowFeedback(false)} />
      )}
    </>
  );
}
