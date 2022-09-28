import { assert, assertThrows } from '/deps.ts';
import fnUnderTest from './index.ts';

const cases: Array<[string, boolean]> = [
	['()', true],
	['[]', true],
	['{}', true],
	['{}()[]', true],
	['{()}[]', true],
	['{()[]}', true],
	['[', false],
	['((', false],
	['(]', false],
	['({}])', false],
	['({)}', false],
];

for (const [arg, expected] of cases) {
	Deno.test(`The parentheses in ${arg} ${expected ? 'all' : 'do not'} have matching opening and closing`, () => {
		const result = fnUnderTest(arg);
		assert(result === expected);
	});
}
