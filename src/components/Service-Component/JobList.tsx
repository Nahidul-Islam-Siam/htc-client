import type { Job, ViewMode } from "@/types/job"
import { JobCard } from "./JobCard"

interface JobListProps {
  jobs: Job[]
  viewMode: ViewMode
}

export function JobList({ jobs, viewMode }: JobListProps) {
  if (viewMode === "grid") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} viewMode={viewMode} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} viewMode={viewMode} />
      ))}
    </div>
  )
}
