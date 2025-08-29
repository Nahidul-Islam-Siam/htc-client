"use client";
import Link from "next/link";

// Needed if you want to support older browsers or use JS interactivity (optional here since <details> works without JS)

export default function Faq() {
  const faqItems = [
    {
      id: "01",
      question: "What is the recruitment process like at HTC Techniek?",
      answer:
        "Our recruitment process starts with a preliminary phone call to understand your skills and career goals. This is followed by one or more interviews with our team and potential clients. We also conduct reference checks and, if necessary, technical assessments. Our goal is to match you with roles that suit your expertise and ambitions.",
    },
    {
      id: "02",
      question: "How long does the recruitment process take?",
      answer:
        "The duration varies depending on the role and client requirements, but typically takes between 1 to 2 weeks. Once we receive your application, we aim to get back to you within 48 hours to schedule the first conversation.",
    },
    {
      id: "03",
      question:
        "Can I, as a self-employed person, find assignments via HTC Techniek?",
      answer:
        "Yes, absolutely! We actively collaborate with self-employed professionals (ZZP’ers) in the technical sector. We connect you with companies looking for short- or long-term expertise, handle the paperwork, and ensure timely payment so you can focus on your work.",
    },
    {
      id: "04",
      question: "What services does HTC Techniek offer?",
      answer:
        "HTC Techniek offers various services for talent and employees. We help with recruitment and selection of candidates, offer secondment for temporary solutions and provide ZZP mediation for independent professionals. In addition, we offer recruitment marketing services, such as recruitment campaigns and employer branding.",
    },
    {
      id: "05",
      question:
        "What are the advantages of using HTC Techniek for my freelance projects?",
      answer:
        "By partnering with HTC Techniek, you gain access to exclusive technical assignments from leading companies. We provide administrative support, competitive rates, and continuous career coaching. Plus, our network gives you opportunities that aren’t publicly advertised, helping you grow both professionally and financially.",
    },
  ];

  return (
    <div className="min-h-screen md:mt-[200px] mt-[100px] px-4  max-w-7xl mx-auto">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className="flex h-6 mb-3 max-w-[300px] px-3 py-1  justify-center gap-2 bg-[rgba(250,187,0,0.15)] backdrop-blur-[10px] mx-auto items-center rounded-md text-[11px] uppercase tracking-wider text-[#DE9400] leading-none"
            style={{ fontWeight: 300 }}
          >
            Frequently Asked Questions
          </div>

          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-8 leading-tight">
            Got any question?
            <br />
            We&apos;re here to help
          </h1>

          <Link
            href="#apply"
            className="inline-flex items-center rounded-md bg-[#F5C518] px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black/5 hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
          >
            Contact Us
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className={`group border-b border-gray-200 last:border-b-0 ${
                item.id === "04" ? "open" : ""
              }`}
            >
              <summary className="flex items-center justify-between w-full px-8 py-6 cursor-pointer list-none rounded-none">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-lg font-medium">
                    {item.id}
                  </span>
                  <span className="text-gray-900 font-medium text-lg">
                    {item.question}
                  </span>
                </div>
                {/* Icon toggle */}
                <span className="text-lg font-bold text-gray-500 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-8 pb-6 pt-0 ml-12 text-gray-600 leading-relaxed">
                {item.answer ||
                  "We're working on updating this answer. Please contact us directly for more information."}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
