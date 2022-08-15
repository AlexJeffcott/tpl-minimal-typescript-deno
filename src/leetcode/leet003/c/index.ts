export default function romanToInt(s: string): number {
	let total = 0;

	s = s.replace('CM', 'DCCCC');
	switch (true) {
		case s.includes('MMM'):
			total = 3000;
			break;
		case s.includes('MM'):
			total = 2000;
			break;
		case s.includes('M'):
			total = 1000;
			break;
		default:
			break;
	}

	s = s.replace('XC', 'LXXXX');
	switch (true) {
		case s.includes('DCCCC'):
			total += 900;
			break;
		case s.includes('DCCC'):
			total += 800;
			break;
		case s.includes('DCC'):
			total += 700;
			break;
		case s.includes('DC'):
			total += 600;
			break;
		case s.includes('CD'):
			total += 400;
			break;
		case s.includes('D'):
			total += 500;
			break;
		case s.includes('CCC'):
			total += 300;
			break;
		case s.includes('CC'):
			total += 200;
			break;
		case s.includes('C'):
			total += 100;
			break;
		default:
			break;
	}

	s = s.replace('IX', 'VIIII');
	switch (true) {
		case s.includes('LXXXX'):
			total += 90;
			break;
		case s.includes('LXXX'):
			total += 80;
			break;
		case s.includes('LXX'):
			total += 70;
			break;
		case s.includes('LX'):
			total += 60;
			break;
		case s.includes('XL'):
			total += 40;
			break;
		case s.includes('L'):
			total += 50;
			break;
		case s.includes('XXX'):
			total += 30;
			break;
		case s.includes('XX'):
			total += 20;
			break;
		case s.includes('X'):
			total += 10;
			break;
		default:
			break;
	}

	switch (true) {
		case s.includes('VIIII'):
			total += 9;
			break;
		case s.includes('VIII'):
			total += 8;
			break;
		case s.includes('VII'):
			total += 7;
			break;
		case s.includes('VI'):
			total += 6;
			break;
		case s.includes('IV'):
			total += 4;
			break;
		case s.includes('V'):
			total += 5;
			break;
		case s.includes('III'):
			total += 3;
			break;
		case s.includes('II'):
			total += 2;
			break;
		case s.includes('I'):
			total += 1;
			break;
		default:
			break;
	}

	return total;
}
