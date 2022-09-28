type OpenP = '(' | '{' | '['

export default function isValid(s: string): boolean {
	const ps: OpenP[] = []
	let char = ''
	if (s.length < 2) return false

	for (let i = 0; i < s.length; i++) {
		char = s[i]
		switch (char) {
			case '(':
				ps.push(char)
				continue;
			case '{':
				ps.push(char)
				continue;
			case '[':
				ps.push(char)
				continue;
			case ')':
				if ('(' !== ps.pop()) return false
				continue;
			case '}':
				if ('{' !== ps.pop()) return false
				continue;
			case ']':
				if ('[' !== ps.pop()) return false
				continue;
			default:
				break;
		}
	}

	return !ps.length
}