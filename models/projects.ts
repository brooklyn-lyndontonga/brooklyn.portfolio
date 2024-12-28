export interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  link: string;
}

export interface ProjectData {
  date: string;
  title: string;
  description: string;
  link: string;
}

export interface ProjectAdd {
  title: string;
  description: string;
  link: string;
}

export interface ProjectUpdate {
  title: string;
  description: string;
  link: string;
}

export interface ProjectDelete {
  id: number;
}

