type OpenP = '(' | '{' | '['
type ClosedP = ')' | '}' | ']'

const openPRE = /(\(|{|\[)/
const closedPRE = /(\)|}|\])/

export default function isValid(s: string): boolean {
	const ps: OpenP[] = []
	let char = ''

	for (let i = 0; i < s.length; i++) {
		if (s.length < 2) return false;

		char = s[i]

		if (i === 0 && closedPRE.test(char)) return false;

		if (openPRE.test(char)) {
			ps.push(char as OpenP)
			continue;
		}

		if (')' === char) {
			const lastP = ps.pop()
			if (lastP === '(')
			continue;
		}

		if ('}' === char) {
			const lastP = ps.pop()
			if (lastP === '{')
			continue;
		}

		if (']' === char) {
			const lastP = ps.pop()
			if (lastP === '[')
			continue;
		}

		return false
	}

	return !ps.length
}