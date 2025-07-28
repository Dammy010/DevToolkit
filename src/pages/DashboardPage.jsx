import LoremIpsumTool from "../components/tools/LoremIpsumTool";
import ColorPickerTool from "../components/tools/ColorPickerTool";
import FaviconGeneratorTool from "../components/tools/FaviconGeneratorTool";
import UUIDGeneratorTool from "../components/tools/UUIDGeneratorTool";
import RegexTesterTool from "../components/tools/RegexTesterTool";
import QRCodeGeneratorTool from "../components/tools/QRCodeGeneratorTool";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-3">
            Developer Toolkit Dashboard
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A powerful collection of developer tools designed to streamline your workflow and boost productivity.
          </p>
        </header>

        {/* Tool Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ToolCard><LoremIpsumTool /></ToolCard>
          <ToolCard><ColorPickerTool /></ToolCard>
          <ToolCard><FaviconGeneratorTool /></ToolCard>
          <ToolCard><UUIDGeneratorTool /></ToolCard>
          <ToolCard><RegexTesterTool /></ToolCard>
          <ToolCard><QRCodeGeneratorTool /></ToolCard>
        </section>
      </div>
    </main>
  );
}

function ToolCard({ children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
      {children}
    </div>
  );
}
