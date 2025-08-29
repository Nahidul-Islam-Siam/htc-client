import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface Job {
  id: number;
  title: string;
  company: string;
  department: string;
  type: string;
  logo: string | StaticImageData | StaticImport;
  image: string | StaticImageData | StaticImport;
  location: string;
  industry: string;
  region: string;
}

export interface FilterState {
  selectedIndustries: string[];
  selectedRegions: string[];
  selectedEmploymentTypes: string[];
}

export type ViewMode = "grid" | "list";
export type FilterTab = "industry" | "region" | "employment";
