export default function romanToInteger(s: string): number {
	let total = 0;

	function replacer(numeral: string): '' {
		switch (numeral) {
			case 'IV':
				total += 4;
				break;
			case 'IX':
				total += 9;
				break;
			case 'XL':
				total += 40;
				break;
			case 'XC':
				total += 90;
				break;
			case 'CD':
				total += 400;
				break;
			case 'CM':
				total += 900;
				break;
			case 'I':
				total += 1;
				break;
			case 'V':
				total += 5;
				break;
			case 'X':
				total += 10;
				break;
			case 'L':
				total += 50;
				break;
			case 'C':
				total += 100;
				break;
			case 'D':
				total += 500;
				break;
			case 'M':
				total += 1000;
				break;
		}
		return '';
	}

	s = s.replace(/IV|IX|XL|XC|CD|CM/g, replacer);
	s = s.replace(/I|V|X|L|C|D|M/g, replacer);

	return total;
}
