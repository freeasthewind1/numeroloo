import {
  calculateLifePath,
  calculatePersonalYear,
  calculateBirthdayEnergy,
  calculateChineseZodiac,
  calculateRelationshipCompatibility
} from './calculations';

// Simple test runner
const runTest = (name: string, actual: any, expected: any) => {
  if (actual === expected) {
    console.log(`✅ ${name}: PASSED`);
  } else {
    console.error(`❌ ${name}: FAILED. Expected ${expected}, got ${actual}`);
    process.exit(1);
  }
};

const runRangeTest = (name: string, actual: number, expectedRange: [number, number]) => {
  if (actual >= expectedRange[0] && actual <= expectedRange[1]) {
    console.log(`✅ ${name}: PASSED`);
  } else {
    console.error(`❌ ${name}: FAILED. Expected range [${expectedRange[0]}, ${expectedRange[1]}], got ${actual}`);
    process.exit(1);
  }
};

// 1. Life Path Tests
console.log('--- Life Path Tests ---');
runTest('Life Path 03.03.2025 (6)', calculateLifePath('2025-03-03'), 6);
runTest('Life Path 22.02.2022 (3)', calculateLifePath('2022-02-22'), 3);
runTest('Life Path Master 11 (Hypothetical 02.09.0000)', calculateLifePath('0000-09-02'), 11);
runTest('Life Path Master 22 (Hypothetical 09.09.0004)', calculateLifePath('0004-09-09'), 22);
runTest('Life Path Master 11 (Real 11.11.2005)', calculateLifePath('2005-11-11'), 11);

// 2. Personal Year Tests
console.log('--- Personal Year Tests ---');
runTest(
  'Personal Year (Before Birthday)',
  calculatePersonalYear('2000-03-03', new Date('2026-02-01')),
  6
);

runTest(
  'Personal Year (After Birthday)',
  calculatePersonalYear('2000-03-03', new Date('2026-03-04')),
  7
);

runTest(
  'Personal Year Master 11 (11.11.2005)',
  calculatePersonalYear('2000-11-11', new Date('2005-11-12')),
  11
);

// 3. Birthday Energy Tests
console.log('--- Birthday Energy Tests ---');
runTest('Birthday Energy 21', calculateBirthdayEnergy(21), 3);
runTest('Birthday Energy 11', calculateBirthdayEnergy(11), 11);
runTest('Birthday Energy 22', calculateBirthdayEnergy(22), 22);

// 4. Chinese Zodiac Tests
console.log('--- Chinese Zodiac Tests ---');
runTest('Zodiac 2024 (Dragon)', calculateChineseZodiac(2024), 'Dragon');
runTest('Zodiac 2025 (Snake)', calculateChineseZodiac(2025), 'Snake');
runTest('Zodiac 1984 (Rat)', calculateChineseZodiac(1984), 'Rat');

// 5. Compatibility Tests
console.log('--- Compatibility Tests ---');
// LP 1: 2000-01-07 -> 2+1+7=10 -> 1
// LP 5: 2000-01-02 -> 2+1+2=5
const result1 = calculateRelationshipCompatibility('2000-01-07', '2000-01-02');
console.log(`Testing LP ${result1.lifePath1} vs LP ${result1.lifePath2}`);
runRangeTest('Compatibility 1 & 5', result1.compatibilityScore, [80, 90]);

console.log('🎉 All tests passed!');
