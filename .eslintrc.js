module.exports = {
	extends: [
		"plugin:@docusaurus/recommended",
		"plugin:prettier/recommended",
		"prettier",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
	],
	plugins: ["@docusaurus", "prettier", "import", "jsx-a11y"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: "2020",
	},
	overrides: [
		{
			parser: "@typescript-eslint/parser",
			files: ["*.ts", "*.tsx"], // Your TypeScript files extension
			// As mentioned in the comments, you should extend TypeScript plugins here,
			// instead of extending them outside the `overrides`.
			// If you don't want to extend any rules, you don't need an `extends` attribute.
			extends: [
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
			],
			plugins: ["@typescript-eslint"],
			parserOptions: {
				project: ["./tsconfig.json"], // Specify it only for TypeScript files
			},
			rules: {
				"@typescript-eslint/ban-ts-comment": "off",
				"@typescript-eslint/no-empty-interface": "off",
				"@typescript-eslint/no-unsafe-assignment": "off",
				"@typescript-eslint/no-unsafe-return": "off",
				"@typescript-eslint/no-unsafe-member-access": "off",
				"@typescript-eslint/no-misused-promises": "off",
				"@typescript-eslint/no-unsafe-argument": "off",
				"@typescript-eslint/unbound-method": "off",
				"@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
				"@typescript-eslint/no-unsafe-call": "off",
				"@typescript-eslint/no-explicit-any": "off",
				"@typescript-eslint/require-await": "off",
				"@typescript-eslint/restrict-template-expressions": "off",
				"@typescript-eslint/no-use-before-define": ["error", { variables: false }],
				"@typescript-eslint/explicit-member-accessibility": "off",
			},
		},
	],

	rules: {
		"@docusaurus/no-untranslated-text": ["warn", { ignoredStrings: ["·", "—", "×"] }],
		semi: ["error", "never"],
		"comma-dangle": ["error", "always-multiline"],
		"quote-props": ["error", "as-needed"],
		"no-unused-vars": "off",
		"prettier/prettier": [
			"error",
			{
				printWidth: 120,
				tabWidth: 4,
				useTabs: true,
				semi: false,
				singleQuote: true,
				quoteProps: "as-needed",
				jsxSingleQuote: false,
				trailingComma: "all",
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: "always",
				proseWrap: "preserve",
				htmlWhitespaceSensitivity: "css",
				endOfLine: "lf",
			},
		],
	},
}


