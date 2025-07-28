import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import * as Icons from "lucide-react"; // All Lucide icons

export default function FaviconGeneratorTool() {
  const [inputValue, setInputValue] = useState("rocket");
  const [displayNode, setDisplayNode] = useState(<Icons.Rocket size={32} />);
  const [error, setError] = useState("");
  const [isDark, setIsDark] = useState(false);
  const emojiRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);

    if (!value) {
      setDisplayNode("");
      setError("Input cannot be empty");
      return;
    }

    const iconName = value.charAt(0).toUpperCase() + value.slice(1);
    const LucideIcon = Icons[iconName];

    if (LucideIcon) {
      setDisplayNode(<LucideIcon size={32} color={isDark ? "#fff" : "#000"} />);
    } else {
      setDisplayNode([...value][0]); // fallback emoji or character
    }

    setError("");
  };

  const downloadAsImage = async () => {
    if (emojiRef.current && displayNode) {
      const canvas = await html2canvas(emojiRef.current);
      const link = document.createElement("a");
      link.download = "favicon.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    if (typeof displayNode !== "string") {
      const iconName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
      const LucideIcon = Icons[iconName];
      if (LucideIcon) {
        setDisplayNode(<LucideIcon size={32} color={!isDark ? "#fff" : "#000"} />);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-6 flex flex-col justify-between h-full transition duration-300">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Favicon Generator</h2>

      <label htmlFor="icon-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Emoji or Lucide Icon name
      </label>
      <input
        id="icon-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md px-4 py-2 text-center text-2xl"
        placeholder="e.g. 🔥 or rocket or home"
        aria-describedby="emoji-help"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <div className="flex justify-center mt-6" ref={emojiRef}>
        <div
          className={`w-16 h-16 rounded flex items-center justify-center text-4xl shadow-inner text-gray-700 dark:text-white ${
            isDark ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          {displayNode}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={downloadAsImage}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
          disabled={!displayNode}
        >
          Download PNG
        </button>
        <button
          onClick={toggleTheme}
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded text-sm"
        >
          Toggle {isDark ? "Light" : "Dark"}
        </button>
      </div>

      <p id="emoji-help" className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Type an <strong>emoji</strong> or a <strong>Lucide icon name</strong> (e.g. <code>home</code>, <code>search</code>, <code>rocket</code>)
      </p>
    </div>
  );
}
