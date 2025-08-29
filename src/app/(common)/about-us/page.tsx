import Banner from "@/components/common/about-us/Banner";
import CO2Section from "@/components/common/about-us/CO2Section";
import DURQuality from "@/components/common/about-us/DURQuality";
import OurApproach from "@/components/common/about-us/OurApproach";
import SustainabilitySection from "@/components/common/about-us/SustainabilitySection";
import TeamGrid from "@/components/common/about-us/TeamGrid";
import TrustedBy from "@/components/common/about-us/TrustedBy";

export default function page() {
  return (
    <div>
      <Banner />
      <OurApproach />
      <TrustedBy />
      <CO2Section />
      <SustainabilitySection />
      <TeamGrid />
      <DURQuality />
    </div>
  );
}
