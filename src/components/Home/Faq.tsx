"use client";
import Link from "next/link";

export default function Faq() {
  const faqItems = [
    {
      id: "01",
      question: "What is the recruitment process like at HTC Techniek?",
      answer: (
        <>
          HTC Techniek specializes in recruiting skilled technical professionals from around the world for roles in the metal, engineering, and oil & gas industries.
          <br /><br />
          <strong>Recruitment steps:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Candidate sourcing and selection of qualified technical specialists</li>
            <li>Initial screening via phone or video call, focusing on:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>Technical skills and certifications</li>
                <li>English proficiency</li>
                <li>Motivation and professionalism</li>
              </ul>
            </li>
            <li>Profile review by an HTC Account Manager, who presents the candidate to the client</li>
            <li>Client introduction and coordination of feedback and next steps</li>
            <li>Deployment to the Netherlands: travel, permits, housing, and registration are fully arranged by HTC Techniek</li>
          </ul>
          <br />
          We ensure full support throughout the process to guarantee a smooth and professional transition to your new role.
        </>
      ),
    },
    {
      id: "02",
      question: "How and when will I be paid, and how many hours will I work per week?",
      answer: (
        <>
          We pay on a <strong>weekly basis</strong>, ensuring regular and timely payments. Please note that your first salary will be paid after <strong>two weeks of work</strong>.
          <br /><br />
          The standard workweek consists of <strong>40 hours</strong>, with the possibility of overtime, depending on the project and your availability.
        </>
      ),
    },
    {
      id: "03",
      question: "To what email address should I send my time sheet?",
      answer: (
        <>
          Please send your completed timesheet by the end of each work week or at the latest, by the beginning of the following work week to:{" "}
          <a
            href="mailto:timesheets@htctechniek.nl"
            className="text-[#F5C518] underline hover:text-[#e6b600]"
          >
            timesheets@htctechniek.nl
          </a>
          <br /><br />
          Make sure to include your <strong>name</strong>, <strong>project name</strong>, and <strong>total hours worked</strong> to ensure smooth and timely payment processing.
        </>
      ),
    },
    {
      id: "04",
      question: "What are the housing arrangements, and how does travel reimbursement work?",
      answer: (
        <>
          HTC Techniek provides clean and comfortable housing, typically in <strong>single or double rooms</strong>, depending on availability and location.
          <br /><br />
          Housing is arranged as close to the project site as possible. <strong>Basic utilities and Wi-Fi</strong> are included.
          <br /><br />
          <strong>Travel reimbursement is offered after 12 weeks of continuous work:</strong>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>If you traveled by flight, you can receive a reimbursement of up to <strong>€250</strong>.</li>
            <li>If you traveled by car, the maximum reimbursement is <strong>€150</strong>.</li>
          </ul>
          <br />
          These amounts are reimbursed once, and specific terms will be explained during your onboarding.
        </>
      ),
    },
    {
      id: "05",
      question: "Can I, as a self-employed person, find assignments via HTC Techniek?",
      answer: (
        <>
          HTC Techniek does <strong>not collaborate with self-employed professionals</strong>. We focus exclusively on placing skilled technical candidates through our own recruitment channels for project-based assignments with our clients.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen md:mt-[200px] mt-[100px] px-4 max-w-7xl mx-auto">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className="flex h-6 mb-3 max-w-[300px] px-3 py-1 justify-center gap-2 bg-[rgba(250,187,0,0.15)] backdrop-blur-[10px] mx-auto items-center rounded-md text-[11px] uppercase tracking-wider text-[#DE9400] leading-none"
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
                item.id === "01" ? "open" : "" // Open first item by default
              }`}
            >
              <summary className="flex items-center justify-between w-full px-8 py-6 cursor-pointer list-none">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-lg font-medium">
                    {item.id}
                  </span>
                  <span className="text-gray-900 font-medium text-lg">
                    {item.question}
                  </span>
                </div>
                <span className="text-lg font-bold text-gray-500 transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
       <div className="px-8 pb-6 pt-0 ml-12 text-gray-600 leading-relaxed">
  {typeof item.answer === "string" ? (
    <p>{item.answer}</p>
  ) : (
    item.answer
  )}
</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}