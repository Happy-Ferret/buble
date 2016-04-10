module.exports = [
	{
		description: 'transpiles binary numbers',

		input: `
			var num = 0b111110111;
			var str = '0b111110111';`,

		output: `
			var num = 503;
			var str = '0b111110111';`
	},

	{
		description: 'transpiles octal numbers',

		input: `
			var num = 0o767;
			var str = '0o767';`,

		output: `
			var num = 503;
			var str = '0o767';`
	}
];
