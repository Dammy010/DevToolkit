import { useState } from "react";

export default function LoremIpsumTool() {
  const [paragraphs, setParagraphs] = useState(1);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const generateLorem = () => {
    const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    const result = Array.from({ length: Math.max(1, paragraphs) }, () =>
      para.repeat(5)
    ).join("\n\n");
    setText(result);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white shadow rounded-2xl p-6 flex flex-col justify-between h-full">
      <h2 className="text-xl font-semibold mb-4">Lorem Ipsum Generator</h2>

      <div className="flex items-center gap-3 mb-4">
        <label htmlFor="para-count" className="text-sm font-medium text-gray-700">
          Paragraphs:
        </label>
        <input
          id="para-count"
          type="number"
          min="1"
          value={paragraphs}
          onChange={(e) => setParagraphs(Number(e.target.value))}
          className="w-20 border border-gray-300 rounded px-3 py-1 text-center"
        />
        <button
          onClick={generateLorem}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          Generate
        </button>
      </div>

      <textarea
        value={text}
        rows={8}
        readOnly
        className="w-full border border-gray-300 rounded p-3 text-sm resize-none bg-gray-50"
      />

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleCopy}
          disabled={!text}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
        >
          {copied ? "Copied!" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  );
}
