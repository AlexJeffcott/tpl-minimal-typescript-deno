import { assert } from '/deps.ts';
import fnUnderTest from './index.ts';

const cases: Array<[number, boolean]> = [
	[121, true],
	[-121, false],
	[123, false],
];

for (const [arg, expected] of cases) {
	Deno.test(`${arg} is a palindrome is ${expected}`, () => {
		const result = fnUnderTest(arg);
		assert(result === expected);
	});
}
