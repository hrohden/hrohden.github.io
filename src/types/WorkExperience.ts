import { Description } from "./Description";

export type WorkExperience = {
  company: string;
  companyDescription?: string;
  title: string;
  period: string;
  description: Description[];
  logo: string;
  technologies: string[];
};
