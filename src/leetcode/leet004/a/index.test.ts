import { assert, assertThrows } from '/deps.ts';
import fnUnderTest from './index.ts';

const cases: Array<[string[], string]> = [
	[['flower', 'flow', 'flight'], 'fl'],
	[['dog', 'racecar', 'car'], ''],
	[["reflower","flow","flight"], ''],
];

for (const [arg, expected] of cases) {
	Deno.test(`The common prefix of ${arg} is ${expected}`, () => {
		const result = fnUnderTest(arg);
		assert(result === expected);
	});
}
