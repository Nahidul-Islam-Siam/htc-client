import TrustedBy from "@/components/common/about-us/TrustedBy";
import CompanyCompliance from "@/components/for-employee/company-compliance";
import Home2 from "@/components/for-employee/employee-hero";
import HTCTechniek from "@/components/for-employee/htc-texhniek";
import SectorsSection from "@/components/for-employee/sectors";
import ServiceSection from "@/components/Home/ServiceSection";
import Vacancies from "@/components/Home/Vacancies";
import React from "react";

export default function page() {
  return (
    <div className="chakra ">
      <Home2 />
      <Vacancies />
      <SectorsSection />
      <HTCTechniek />
      <CompanyCompliance />
      <TrustedBy />
      <ServiceSection />
    </div>
  );
}
