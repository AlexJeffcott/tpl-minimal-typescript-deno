import { assert, assertThrows } from '/deps.ts';
import fnUnderTest from './index.ts';

const cases: Array<[string, number]> = [
	['LVIII', 58],
	['MCMXCIV', 1994],
	['MMMCMXCIX', 3999],
	['I', 1],
	['II', 2],
	['III', 3],
	['IV', 4],
	['V', 5],
	['VI', 6],
	['VII', 7],
	['VIII', 8],
	['IX', 9],
	['X', 10],
	['XX', 20],
	['XXX', 30],
	['XL', 40],
	['L', 50],
	['LX', 60],
	['LXX', 70],
	['LXXX', 80],
	['XC', 90],
	['C', 100],
	['CC', 200],
	['CCC', 300],
	['CD', 400],
	['D', 500],
	['DC', 600],
	['DCC', 700],
	['DCCC', 800],
	['CM', 900],
	['M', 1000],
	['MM', 2000],
	['MMM', 3000],
];

for (const [arg, expected] of cases) {
	Deno.test(`${arg} in Roman numerals is ${expected} in integers`, () => {
		const result = fnUnderTest(arg);
		assert(result === expected);
	});
}
