
export interface CompetitionScore {
  competitionName: string;
  year: number;
  score: number; // Represents the 'X's or points received
}

export interface DanceStyle {
  id: string;
  name: string;
  description: string;
  technicalFocus: string[];
  emotion: string;
  image: string;
  gallery?: string[];
  // Integrated progress data
  totalXs: number;
  competitionHistory: CompetitionScore[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
