module.exports = {
	extends: ['plugin:@docusaurus/recommended', 'plugin:prettier/recommended', 'prettier'],
	plugins: ['@docusaurus', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: '2020',
	},
	rules: {
		'@docusaurus/no-untranslated-text': ['warn', { ignoredStrings: ['·', '—', '×'] }],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'as-needed'],
		'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				semi: false,
				singleQuote: true,
				quoteProps: 'as-needed',
				jsxSingleQuote: false,
				trailingComma: 'all',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: 'always',
				proseWrap: 'preserve',
				htmlWhitespaceSensitivity: 'css',
				endOfLine: 'lf',
			},
		],
	},
}
