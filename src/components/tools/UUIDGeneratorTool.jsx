import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function UUIDGeneratorTool() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);

  const generateUUID = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    setCopied(false);
  };

  const handleCopy = () => {
    if (uuid) {
      navigator.clipboard.writeText(uuid);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔑 UUID Generator</h2>

      <div className="flex flex-col space-y-4">
        <button
          onClick={generateUUID}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Generate UUID
        </button>

        <div className="relative">
          <input
            type="text"
            value={uuid}
            readOnly
            className="w-full border border-gray-300 rounded-md px-3 py-2 font-mono text-sm bg-gray-50"
            placeholder="Your UUID will appear here"
            aria-label="Generated UUID"
          />
          <button
            onClick={handleCopy}
            disabled={!uuid}
            className="absolute right-2 top-2 bottom-2 px-3 text-sm rounded-md bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
