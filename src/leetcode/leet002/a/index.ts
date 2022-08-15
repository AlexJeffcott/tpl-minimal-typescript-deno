export default function (x: number): boolean {
	const xStr = String(x);
	let i = xStr.length;
	let y = 0;
	for (i; i--;) {
		if (i === y) break;
		if (xStr[i] !== xStr[y]) return false;
		y++;
	}

	return true;
}
