export type LifePathNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 11 | 22 | 33;

export type ChineseZodiacSign =
  | 'Rat' | 'Ox' | 'Tiger' | 'Rabbit'
  | 'Dragon' | 'Snake' | 'Horse' | 'Goat'
  | 'Monkey' | 'Rooster' | 'Dog' | 'Pig';

export type CompatibilityLevel = 'Excellent' | 'Good' | 'Fair' | 'Challenging' | 'Karmic';

export interface CompatibilityResult {
  lifePath1: LifePathNumber;
  lifePath2: LifePathNumber;
  compatibilityScore: number;
  level: CompatibilityLevel;
  description: string;
  strengths: string;
  challenges: string;
}
