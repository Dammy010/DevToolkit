import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icons

export default function FAQPage() {
  const faqs = [
    {
      question: "What tools are included?",
      answer: "You'll find color pickers, lorem ipsum generators, favicon generators, regex testers, UUID generators, QR code generators, and more."
    },
    {
      question: "Is this free to use?",
      answer: "Yes! DevToolkit is completely free and open source for developers worldwide."
    },
    {
      question: "Can I suggest a tool?",
      answer: "Absolutely! We welcome suggestions and contributions via GitHub or our feedback form."
    },
    {
      question: "Do I need to create an account?",
      answer: "No login required. Just open the app and start using any tool instantly."
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, DevToolkit is fully responsive and works seamlessly on phones, tablets, and desktops."
    },
    {
      question: "Will more tools be added?",
      answer: "Yes! We’re continuously improving and adding new tools based on developer needs and community feedback."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 font-semibold text-blue-700 text-lg hover:bg-blue-50 transition"
              >
                {faq.question}
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
