import { JobCard } from "./JobCard";
import type { Job } from "@/types/job";
import img1 from "../../../public/images/image (1).png";
import img2 from "../../../public/images/image (2).png";
import img3 from "../../../public/images/image (3).png";
import logo1 from "../../../public/logo/Logo1.png";
import logo2 from "../../../public/logo/Logo2.png";
import logo3 from "../../../public/logo/Logo3.png";

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Solutions",
    department: "Engineering",
    type: "Full-time",
    image: img1,
    logo: logo1,
    location: "Amsterdam", // Add this property
    industry: "Technology", // Add this property
    region: "Europe", // Add this property
  },
  {
    id: 2,
    title: "Marketing Specialist",
    company: "Brandify",
    department: "Marketing",
    type: "Part-time",
    image: img2,
    logo: logo2,
    location: "Rotterdam", // Add this property
    industry: "Marketing", // Add this property
    region: "Europe", // Add this property
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Minds",
    department: "Design",
    type: "Contract",
    image: img3,
    logo: logo3,
    location: "Utrecht", // Add this property
    industry: "Design", // Add this property
    region: "Europe", // Add this property
  },
];
export default function SimilarVacancy() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} viewMode="grid" />
      ))}
    </div>
  );
}
