import Image from "next/image";
import img1 from "@/assets/about-us/qualityCards/Icon.png";
import img2 from "@/assets/about-us/qualityCards/Icon (1).png";
import img3 from "@/assets/about-us/qualityCards/Icon (2).png";
import img4 from "@/assets/about-us/qualityCards/Icon (3).png";
import img5 from "@/assets/about-us/qualityCards/Icon (4).png";

const cards = [
  {
    title: "Quality",
    src: img1,
    text: [
      "HTC Techniek connects top technical applications from the EU and beyond with leading companies in the metal, engineering, wind, and oil and gas industries.",
      "We provide complete support including sourcing, training, relocation, accommodation, and transport to ensure smooth integration and reliable operations for our clients.",
    ],
  },
  {
    title: "Engagement",
    src: img2,
    text: [
      "At HTC Techniek, we are fully committed to our clients and believe in close, transparent, and collaborative partnerships.",
      "We understand how critical your planning and timescales are. Whether you need an individual specialist or a complete team, we're ready to support you quickly, efficiently and with precision.",
    ],
  },
  {
    title: "Responsibility",
    src: img3,
    text: [
      "We take our responsibility seriously toward both the technical professionals and the clients we collaborate with.",
      "From day one, we support our team members by introducing them to their on-site managers and ensuring they are equipped with the necessary safety equipment.",
    ],
  },
  {
    title: "Ambition",
    src: img4,
    text: [
      "We aim to connect our clients with top technical specialists while creating meaningful opportunities for professionals seeking their next career challenge.",
      "By finding the right people for each project, helping both our clients and candidates succeed over time.",
    ],
  },
  {
    title: "Dedication",
    src: img5,
    text: [
      "We handle all the essentials for our technical specialists: accommodation, daily transport, and flight reimbursements up to €250 for travel to and from the Netherlands.",
      "Upon arrival at our office, candidates receive a full onboarding covering housing, transport, traffic rules, project info, and PPE distribution. With ongoing support and regular check-ins, we maintain a strong, dependable network of professionals ready to get to work.",
    ],
  },
];

export default function QualityCards() {
  return (
    <section className="md:py-16 md:px-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-shrink-0 h-full"
            >
              <div className="mb-6">
                <Image
                  src={card.src}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                {card.text.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}