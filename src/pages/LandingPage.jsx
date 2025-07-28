import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
          All Your Dev Tools. One Place.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Tired of bouncing between lorem ipsum generators, color pickers, and favicon tools? 
          DevToolkit saves your time by bundling essential utilities in one clean dashboard.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition"
        >
          Go to Dashboard
        </Link>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-blue-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">1. Choose a Tool</h3>
              <p className="text-gray-600">Pick from useful utilities like QR generators, color pickers, regex testers, and more.</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">2. Customize Inputs</h3>
              <p className="text-gray-600">Enter your text, colors, or data to generate dynamic results instantly.</p>
            </div>
            <div className="p-6 rounded-xl bg-green-50 shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-green-800 mb-2">3. Copy & Use</h3>
              <p className="text-gray-600">Easily copy the results and integrate them directly into your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-tr from-purple-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Features You'll Love
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard title="Fast & Intuitive" description="All tools are easy to use with instant results and smooth interactions." />
            <FeatureCard title="Beautiful UI" description="Crafted with a clean, modern interface to reduce cognitive load." />
            <FeatureCard title="Developer-Focused" description="Designed to solve real developer pain-points during daily tasks." />
            <FeatureCard title="Fully Responsive" description="Works seamlessly on desktop, tablet, and mobile screens." />
            <FeatureCard title="Privacy Friendly" description="No data tracking, no analytics, just pure utility." />
            <FeatureCard title="Always Free" description="Use all tools with no signup or fees required." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-white">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to save time?</h3>
        <p className="text-gray-600 mb-6">Jump into the dashboard and explore all the tools available for free.</p>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition"
        >
          Open Dashboard
        </Link>
      </section>
    </main>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
