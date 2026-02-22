import type { LifePathNumber, ChineseZodiacSign, CompatibilityResult, CompatibilityLevel } from './types';

// Helper function to sum digits
const sumDigits = (num: number): number => {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
};

// Helper to check for Master Numbers
const isMasterNumber = (num: number): boolean => {
  return num === 11 || num === 22 || num === 33;
};

// Reduce number recursively, stopping at 11, 22, 33 or single digit
const reduceNumber = (num: number): LifePathNumber => {
  if (isMasterNumber(num)) return num as LifePathNumber;
  if (num <= 9) return num as LifePathNumber;

  const reduced = sumDigits(num);
  return reduceNumber(reduced);
};

/**
 * Calculates Life Path Number based on the prompt's rule:
 * "Doğum tarihi (gg.aa.yyyy) tüm rakamları topla."
 * If the sum is 11, 22, 33, stop. Else reduce to single digit.
 *
 * @param birthDateString Format: YYYY-MM-DD
 */
export const calculateLifePath = (birthDateString: string): LifePathNumber => {
  if (!birthDateString) return 0 as unknown as LifePathNumber;

  // Remove dashes to get just digits: YYYYMMDD
  const cleanDate = birthDateString.replace(/-/g, '');

  // Sum all digits directly
  let totalSum = 0;
  for (const digit of cleanDate) {
    totalSum += parseInt(digit, 10);
  }

  // Apply reduction rules
  return reduceNumber(totalSum);
};

/**
 * Calculates Personal Year Number based on the prompt's rule:
 * "Kişisel yıl, son doğum gününün tarih rakamlarının toplamından bulunur."
 *
 * @param birthDateString Format: YYYY-MM-DD
 * @param currentDate Optional, defaults to now.
 */
export const calculatePersonalYear = (birthDateString: string, currentDate: Date = new Date()): number => {
  if (!birthDateString) return 0;

  const birthDate = new Date(birthDateString);
  const currentYear = currentDate.getFullYear();

  // Create candidate birthday for this year
  const birthdayThisYear = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

  // Determine the LAST birthday
  let lastBirthday: Date;
  if (currentDate >= birthdayThisYear) {
    // Birthday has passed or is today
    lastBirthday = birthdayThisYear;
  } else {
    // Birthday hasn't happened yet this year, use last year's
    lastBirthday = new Date(currentYear - 1, birthDate.getMonth(), birthDate.getDate());
  }

  // Format last birthday as string to sum digits: YYYYMMDD
  // Note: getMonth() is 0-indexed, so we add 1
  const day = lastBirthday.getDate();
  const month = lastBirthday.getMonth() + 1;
  const year = lastBirthday.getFullYear();

  const dateString = `${day}${month}${year}`; // e.g. "332025" for 03.03.2025

  // Sum digits of the date string
  let sum = 0;
  for (const char of dateString) {
    sum += parseInt(char, 10);
  }

  // Apply reduction rules (stop at master numbers)
  return reduceNumber(sum);
};

/**
 * Calculates Birthday Energy
 * "Kişinin doğduğu gün (ayın kaçında) numerolojik ikincil enerji gibi yorumlanacak."
 * e.g., 21 -> 2+1=3. Master numbers 11/22/33 are not reduced.
 */
export const calculateBirthdayEnergy = (day: number): LifePathNumber => {
  return reduceNumber(day);
};

/**
 * Calculates Chinese Zodiac Sign
 * Based on the year.
 */
export const calculateChineseZodiac = (year: number): ChineseZodiacSign => {
  const signs: ChineseZodiacSign[] = [
    'Monkey', // 0
    'Rooster', // 1
    'Dog', // 2
    'Pig', // 3
    'Rat', // 4
    'Ox', // 5
    'Tiger', // 6
    'Rabbit', // 7
    'Dragon', // 8
    'Snake', // 9
    'Horse', // 10
    'Goat' // 11
  ];

  return signs[year % 12];
};

/**
 * Calculates Relationship Compatibility
 * Based on life path numbers.
 */
export const calculateRelationshipCompatibility = (
  birthDate1: string,
  birthDate2: string
): CompatibilityResult => {
  const lp1 = calculateLifePath(birthDate1);
  const lp2 = calculateLifePath(birthDate2);

  let score = 50;
  let level: CompatibilityLevel = 'Fair';

  // Natural matches (same group)
  const group1 = [1, 5, 7]; // Mental / Individual
  const group2 = [2, 4, 8]; // Material / Business
  const group3 = [3, 6, 9]; // Artistic / Emotional

  const base1 = lp1 === 11 ? 2 : lp1 === 22 ? 4 : lp1 === 33 ? 6 : lp1;
  const base2 = lp2 === 11 ? 2 : lp2 === 22 ? 4 : lp2 === 33 ? 6 : lp2;

  if (
    (group1.includes(base1) && group1.includes(base2)) ||
    (group2.includes(base1) && group2.includes(base2)) ||
    (group3.includes(base1) && group3.includes(base2))
  ) {
    score = 85;
    level = 'Excellent';
  } else if (
    (group1.includes(base1) && group3.includes(base2)) ||
    (group3.includes(base1) && group1.includes(base2))
  ) {
    score = 70; // Compatible but different
    level = 'Good';
  } else {
    score = 40; // Challenge
    level = 'Challenging';
  }

  // Master number bonus
  if (isMasterNumber(lp1) && isMasterNumber(lp2)) {
    score += 10;
    level = 'Karmic';
  }

  return {
    lifePath1: lp1,
    lifePath2: lp2,
    compatibilityScore: Math.min(100, score),
    level,
    description: "", // Will be filled by UI or Logic
    strengths: "",
    challenges: ""
  };
};
