import { useState } from "react";

export default function ColorPickerTool() {
  const [color, setColor] = useState("#3498db");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎨 Color Picker</h2>

      <div className="flex flex-col items-center space-y-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-16 rounded-md border border-gray-300 cursor-pointer transition"
          aria-label="Select color"
        />

        <div className="flex items-center justify-between w-full">
          <p className="text-sm text-gray-700">
            Selected Color: <span className="font-mono text-base">{color}</span>
          </p>
          <button
            onClick={handleCopy}
            className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div
          className="w-full h-12 rounded-md border border-gray-200"
          style={{ backgroundColor: color }}
          aria-label="Color preview"
        />
      </div>
    </div>
  );
}
