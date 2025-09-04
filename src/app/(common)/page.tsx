import TrustedBy from "@/components/common/about-us/TrustedBy";
import Faq from "@/components/Home/Faq";
// import FeaturedTestimonials2 from "@/components/Home/FeaturedTestimonials2";
import FeaturedTestimonials from "@/components/Home/GlobalTestimonials";
// import TestimonialsSwiper from "@/components/Home/GlobalTestimonials";
import Hero from "@/components/Home/Hero";
import HeroSection2 from "@/components/Home/Hero2";
import RecruitmentSteps from "@/components/Home/Recruitement";

import { RecruitmentCard } from "@/components/Home/RecruitmentCard";
import ServiceSection from "@/components/Home/ServiceSection";
// import Testimonials2 from "@/components/Home/Testimonials2";
import Vacancies from "@/components/Home/Vacancies";

export default function Home() {
  return (
    <div className="mx-auto ">
      <Hero />
      <FeaturedTestimonials />
      {/* <FeaturedTestimonials2 /> */}
      <Vacancies />
      <RecruitmentSteps/>
      <HeroSection2 />
      <TrustedBy />
      <RecruitmentCard />
      <Faq />
      <ServiceSection />
    </div>
  );
}
