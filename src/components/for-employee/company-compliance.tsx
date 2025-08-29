"use client"
import { Check } from "lucide-react"

const BusinessInfoCertificates = () => {
  const businessInfo = [
    { label: "IBAN", value: "NJL28ABNA0614927870" },
    { label: "G Account", value: "NLI6ABNA094120389" },
    { label: "VAT No", value: "NL8106.06.914.B01" },
    { label: "Trade Reg. No", value: "24331944" },
    { label: "Loonheffingsnummer", value: "NL8106.06.914.L01" },
    { label: "divider", value: "" },
    { label: "VAT No", value: "NL8106.06.914.B01" },
    { label: "G Account", value: "NL14ABNA0995066272" },
    { label: "Trade Reg. No", value: "76537498" },
  ]

  const certificates = [
    "Certificate of Insurance",
    "Tax Certificate",
    "Liability Insurance",
    "Chamber of Commerce",
    "WKA - Declaration Dutch Tax Authority",
    "PDOK Attestation",
    "Payok Certificate",
    "SNA Declaration of Registration",
    "VCU Certificate",
    "Statement of G Account",
  ]

  return (
    <div className="max-w-7xl mx-auto p-6 md:my-20 my-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center  mb-8">Company Compliance</h1>

      <div className="flex flex-col lg:flex-row gap-0 border border-gray-300 rounded-lg overflow-hidden bg-white">
        {/* Business Information */}
        <div className="flex-1 bg-gray-50">
          <div className="border-b border-gray-300 bg-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Business Information</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              {businessInfo.map((item, index) =>
                item.label === "divider" ? (
                  <li key={index} className="border-t border-gray-300 pt-4 mt-4"></li>
                ) : (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.value}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="w-px bg-gray-300 hidden lg:block"></div>

        {/* Company Certificates */}
        <div className="flex-1 bg-gray-50">
          <div className="border-b border-gray-300 bg-gray-100 px-6 py-4 lg:border-l-0">
            <h2 className="text-lg font-semibold text-gray-900">Company Certificates</h2>
          </div>
          <div className="p-6">
            <ul className="space-y-3">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                  </span>
                  <span className="text-gray-700 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessInfoCertificates
