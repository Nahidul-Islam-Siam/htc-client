"use client";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Job } from "@/types/job";

interface JobCardProps {
  job: Job;
  viewMode: "grid" | "list";
}

export function JobCard({ job, viewMode }: JobCardProps) {
  if (viewMode === "grid") {
    return (
      <Link
        href={`/vacancies/${job.id}`}
        className="group relative block overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60 hover:shadow-md transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-[300px] w-full">
          {/* Clear background image */}
          <Image
            src={job.image || "/placeholder.jpg"}
            alt={job.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />

          {/* Blurred overlay for bottom section */}
          <div className="absolute bottom-0 left-0 right-0 h-2/6">
            <Image
              src={job.image || "/placeholder.jpg"}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover filter blur-md"
            />
          </div>

          {/* Company Logo (top-left) */}
          {job.logo && (
            <div className="absolute left-3 top-3 z-10 w-10 h-10 rounded-full overflow-hidden bg-white shadow-md">
              <Image
                src={job.logo}
                alt={job.company}
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          )}

          {/* Bottom Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-5" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 text-white">
            <h3 className="text-lg sm:text-xl font-semibold leading-tight">
              {job.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-white/80">
              {job.company}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-white/15 text-white hover:bg-white/15 text-xs"
              >
                {job.department}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#FFD43833]/40 text-[#e6b600] hover:bg-[#FFD43833]/40 border-transparent text-xs"
              >
                {job.type}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center hover:shadow-md transition-shadow">
      <Image
        src={job.logo || "/placeholder.svg"}
        alt="company logo"
        width={100}
        height={100}
        className="w-12 h-12 flex items-center justify-center mr-4"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{job.title}</h3>
        <p className="text-gray-600 text-sm">{job.company}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500 mb-1">{job.department}</p>
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
          {job.type}
        </span>
      </div>
    </div>
  );
}