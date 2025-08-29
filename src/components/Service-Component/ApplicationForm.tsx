"use client";
import { useRef, useState } from "react";

export default function ApplicationForm() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("");

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">Solliciteer nu!</h2>
      <p className="text-gray-600 text-sm mb-6">
        Vacatures zoals Responsable Commercial Automobile worden doorgaans erg
        snel ingevuld. Wees er snel bij en vergroot jouw kans op deze baan!
      </p>

      {/* Form */}
      <form className="space-y-5">
        {/* First Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            FIRST NAME*
          </label>
          <input
            type="text"
            placeholder="e.g. James Tom"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            LAST NAME*
          </label>
          <input
            type="text"
            placeholder="e.g. Smith"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            EMAIL ADDRESS*
          </label>
          <input
            type="email"
            placeholder="e.g. jamestom@htctechniek.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            PHONE NUMBER
          </label>
          <input
            type="text"
            placeholder="e.g. HTC Techniek"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Motivation */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            MOTIVATION*
          </label>
          <textarea
            placeholder="Type your message here"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">
            CURRICULUM VITAE
          </label>
          <div
            onClick={handleFileClick}
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center text-sm text-gray-500 cursor-pointer hover:border-yellow-400 transition"
          >
            {fileName || "Klik om te uploaden of sleep je CV hierheen"}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-yellow-400"
          />
          <span className="text-xs text-gray-600">
            Ik ga akkoord met de{" "}
            <a href="#" className="text-yellow-500 underline">
              Privacyverklaring
            </a>{" "}
            en geef toestemming om mijn persoonsgegevens te verwerken en op te
            slaan.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded text-sm"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}
