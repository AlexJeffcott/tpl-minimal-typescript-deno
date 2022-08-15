import { assert, assertThrows } from '/deps.ts';
import fnUnderTest from './index.ts';

const cases: Array<[number[], number, number[]]> = [
	[[2, 7, 11, 15], 9, [0, 1]],
	[[3, 2, 4], 6, [1, 2]],
	[[3, 3], 6, [0, 1]],
];

for (const [left, right, expected] of cases) {
	Deno.test(`Looks in ${left} for numbers that sum to ${right} then returns their indexes ${expected}`, () => {
		const result = fnUnderTest(left, right);
		assert(result.length === 2);
		assert(result[0] !== result[1]);
		assert(result.includes(expected[0]));
		assert(result.includes(expected[1]));
	});
}

Deno.test(`Throws if no match`, () => {
	assertThrows(() => fnUnderTest([5, 5], 1), Error, 'sum not found');
});
