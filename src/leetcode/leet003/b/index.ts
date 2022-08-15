export default function romanToInt(s: string): number {
	return s
		.replace(/IV/, '4,')
		.replace(/IX/, '9,')
		.replace(/XL/, '40,')
		.replace(/XC/, '90,')
		.replace(/CD/, '400,')
		.replace(/CM/, '900,')
		.replace(/I/g, '1,')
		.replace(/V/g, '5,')
		.replace(/X/g, '10,')
		.replace(/L/g, '50,')
		.replace(/C/g, '100,')
		.replace(/D/g, '500,')
		.replace(/M/g, '1000,')
		.split(',')
		.reduce((acc, cur) => acc + parseInt(cur || '0'), 0);
}
