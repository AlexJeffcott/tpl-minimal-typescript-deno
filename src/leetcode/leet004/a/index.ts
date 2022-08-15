export default function longestCommonPrefix(strs: string[]): string {
	const sortedStrs = strs.sort((a, b) => b.length - a.length);
	let candidate = sortedStrs[sortedStrs.length - 1];
	let i = sortedStrs.length;
	let x = candidate.length - 1;
	for (i; i--;) {
		if (candidate === sortedStrs[i]) continue;
		while (x >= 0) {
			if (candidate[x] !== sortedStrs[i][x]) {
				candidate = candidate.slice(0, x);
			}
			--x;
		}
	}
	return candidate;
}
