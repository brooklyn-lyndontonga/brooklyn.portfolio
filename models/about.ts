import { Skills } from "./skills";



interface About {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  skills: Skills[];
  experience: Experience[];
  education: Education[];
}

interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  duration: string;
}

export type { About, Experience, Education };