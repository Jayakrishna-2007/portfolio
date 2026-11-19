export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & Computer Vision' | 'Healthcare AI' | 'Smart Mobility' | 'Automation';
  status: 'Completed' | 'In Active Development' | 'Ideation Stage' | 'Research Prototype';
  statusColor: 'emerald' | 'blue' | 'coral' | 'lavender';
  description: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string[];
  highlights: string[];
  accentColor: 'blue' | 'lavender' | 'coral';
  githubUrl?: string;
  liveUrl?: string;
  mockupType: 'flight' | 'retina' | 'traffic' | 'biometric' | 'meal';
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Internship Opportunity' | 'Leadership Role' | 'Campus Ambassador';
  accentColor: 'blue' | 'lavender' | 'coral';
  description: string;
  points: string[];
  badges: string[];
  statusNote?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  accent: 'blue' | 'lavender' | 'coral';
  skills: {
    name: string;
    description: string;
    iconName?: string;
    tag?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Leadership' | 'Hackathon & Engineering' | 'Community & Innovation' | 'Flagship Conference';
  organization: string;
  year: string;
  description: string;
  accent: 'blue' | 'lavender' | 'coral';
}

