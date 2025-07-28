export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
          About DevToolkit
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center max-w-3xl mx-auto">
          DevToolkit is a unified suite of essential web development utilities designed to save time and boost productivity. 
          Whether you need to generate dummy text, pick perfect colors, test regular expressions, or create favicons and QR codes DevToolkit brings it all together in one sleek dashboard.
        </p>

        {/* Problem Section */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mt-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">The Problem It Solves</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Developers waste hours juggling multiple browser tabs to find the right online tools for simple tasks. 
            From searching "random UUID generator" to "regex tester" or "favicon generator," the constant context switching kills focus and productivity.
            <br /><br />
            <span className="font-semibold text-blue-700">DevToolkit solves this by offering a centralized hub of the most-used developer tools</span> — 
            beautifully designed, instantly accessible, and constantly expanding to match your workflow.
          </p>
        </div>
      </div>
    </main>
  );
}
