"use client";

import Image, { StaticImageData } from "next/image";
import support1 from "@/assets/tax-preparation/support1.png";
import support2 from "@/assets/tax-preparation/support2.png";
import support3 from "@/assets/tax-preparation/support3.png";
import icon1 from "@/assets/tax-preparation/file 1.png";
import icon2 from "@/assets/tax-preparation/taxation 1.png";
import icon3 from "@/assets/tax-preparation/refund 1.png";

type Card =
  | {
      type: "image";
      image: StaticImageData;
      alt: string;
      bg: string;
    }
  | {
      type: "text";
      icon: StaticImageData;
      title: string;
      description: string;
      buttonText: string;
      bg: string;
    };

// ✅ Reusable + Mobile-Friendly Button
const Button = ({ text }: { text: string }) => {
  return (
    <button
      className="mt-6 w-full md:w-auto bg-green-800 text-white px-6 py-3 rounded-full font-medium border-2 border-green-800 transition-all duration-300 ease-in-out 
      hover:bg-white hover:text-green-800 hover:shadow-md hover:scale-[1.03]"
    >
      {text}
    </button>
  );
};

const TaxPreparation = () => {
  const cards: Card[] = [
    {
      type: "image",
      image: support3,
      alt: "Support Image 1",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon1,
      title: "File a Tax Amendment",
      description: "Mend past returns quickly and correctly",
      buttonText: "Amend My Return",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support2,
      alt: "Support Image 2",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon2,
      title: "Start Filing Today",
      description:
        "File Now or Finalize Late/Extension Returns — EFinancial Can Help!",
      buttonText: "Start Filing Now",
      bg: "bg-[var(--third-color)]",
    },
    {
      type: "image",
      image: support1,
      alt: "Support Image 3",
      bg: "bg-[var(--soft-color)]",
    },
    {
      type: "text",
      icon: icon3,
      title: "Track Your Tax Refund",
      description: "Want to know your refund status? Check your status here.",
      buttonText: "Track My Refund",
      bg: "bg-[var(--third-color)]",
    },
  ];

  return (
    <section className="mt-20 mx-auto container px-4">
      <h1 className="md:text-5xl mb-16 md:mb-14 text-center text-4xl text-gray-900 leading-[120%] font-bold font-inter uppercase">
Year-Round Tax Support
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bg} rounded-2xl overflow-hidden shadow-lg  transition-all duration-300 flex flex-col  ease-[cubic-bezier(0.4,0,0.2,1)] 
            hover:shadow-xl hover:scale-[1.015] hover:-translate-y-1 transform`}
          >
            {card.type === "image" ? (
              <Image
                src={card.image}
                alt={card.alt}
                className="w-full h-[300px] md:h-[340px] object-cover"
                priority
              />
            ) : (
              <div className="p-6 flex flex-col justify-between flex-1 text-white">
                <div className="w-14 h-14 mb-4 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={`${card.title} icon`}
                    width={30}
                    height={30}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {card.title}
                  </h3>
                  <p className="text-sm mb-4 text-[#585C67]">
                    {card.description}
                  </p>
                </div>
                <Button text={card.buttonText} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxPreparation;
