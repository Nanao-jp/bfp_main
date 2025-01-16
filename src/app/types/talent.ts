export interface TalentProfile {
  birthday: string;
  birthplace: string;
  height: string;
}

export interface MilitaryCareer {
  period: string;
  organization: string;
  careers: string[];
  rank: string;
}

export interface Filmography {
  movies: string[];
  tv: string[];
  web: string[];
  stage?: string[];
  cm?: string[];
  dvd?: string[];
  magazines?: string[];
  cd?: string[];
  voiceAndGames?: string[];
  internet?: string[];
  others?: string[];
}

export interface TalentDetails {
  profile: TalentProfile;
  skills: string[];
  hobbies: string[];
  licenses: string[];
  military?: MilitaryCareer;
  filmography: Filmography;
  personality?: string[];
  education?: string[];
}

export interface Talent {
  id: number;
  name: string;
  image: string;
  pdf?: string;
  description: string;
  affiliation: 'BFP' | 'partner';
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    website?: string;
  };
  details: TalentDetails;
} 