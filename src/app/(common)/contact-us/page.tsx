import ContactSection from "@/components/common/Contact";
import ServiceSection from "@/components/Home/ServiceSection";
// import ProCodeEditor from "@/components/common/services/proCodeEditor";

export default function page() {
  return (
    <div>
      <ContactSection/>
      {/* <ProCodeEditor /> */}
            <ServiceSection />
    </div>
  );
}
