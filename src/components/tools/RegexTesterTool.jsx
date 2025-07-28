import { useState } from "react";

export default function RegexTesterTool() {
  const [regex, setRegex] = useState("");
  const [testString, setTestString] = useState("");
  const [result, setResult] = useState("");

  const testRegex = () => {
    try {
      const re = new RegExp(regex);
      const matches = testString.match(re);
      setResult(matches ? `✅ Match Found: "${matches[0]}"` : "❌ No match");
    } catch (error) {
      setResult("❌ Invalid Regular Expression");
    }
  };

  return (
    <div className="bg-white shadow rounded-2xl p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Regex Tester</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700" htmlFor="regex">
          Regular Expression
        </label>
        <input
          id="regex"
          type="text"
          value={regex}
          onChange={(e) => setRegex(e.target.value)}
          placeholder="e.g. ^hello\\d+"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700" htmlFor="test-string">
          Test String
        </label>
        <input
          id="test-string"
          type="text"
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder="e.g. hello123"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        onClick={testRegex}
        className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-2 rounded-lg"
      >
        Test Regex
      </button>

      <div className="text-sm mt-2 text-gray-800 font-mono break-words">
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}
