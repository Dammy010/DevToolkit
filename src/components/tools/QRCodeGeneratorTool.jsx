import { useRef, useState } from "react";
import { QRCode } from "react-qrcode-logo";

const QRCodeGeneratorTool = () => {
  const [text, setText] = useState("https://example.com");
  const qrRef = useRef(null);

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current?.toCanvas();
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "qr-code.png";
      link.click();
    }
  };

  return (
    <section className="w-full max-w-lg mx-auto p-6 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
        QR Code Generator
      </h1>

      <div className="mb-5">
        <label htmlFor="qr-input" className="block text-sm font-medium text-gray-700 mb-1">
          Enter text or URL
        </label>
        <input
          id="qr-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://your-link.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div className="flex justify-center items-center min-h-[180px] bg-gray-100 rounded-lg mb-4">
        {text.trim() ? (
          <QRCode
            ref={qrRef}
            value={text}
            size={180}
            qrStyle="squares"
            eyeRadius={4}
            fgColor="#1e40af"
            logoPadding={2}
          />
        ) : (
          <p className="text-sm text-gray-500">Enter text to generate a QR code</p>
        )}
      </div>

      {text.trim() && (
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-700 text-white text-sm rounded-lg hover:bg-blue-800 transition"
          >
            Download QR Code
          </button>
        </div>
      )}
    </section>
  );
};

export default QRCodeGeneratorTool;
