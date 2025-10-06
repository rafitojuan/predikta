export interface LoveMeterInput {
  partner1: {
    name: string;
    birthDate?: string;
  };
  partner2: {
    name: string;
    birthDate?: string;
  };
  timestamp: Date;
}

export interface LoveMeterResult {
  id: string;
  input: LoveMeterInput;
  compatibility: number;
  category: string;
  description: string;
  createdAt: Date;
}

export interface UserSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  theme: 'default' | 'neon' | 'dark';
}