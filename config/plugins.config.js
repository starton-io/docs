/*
| Developed by Dirupt
| Filename : plugins.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
module.exports = {
	plugins: [
		'@docusaurus/theme-live-codeblock',
		// ...(process.env.SEGMENT_KEY && [
		// 	[
		// 		'docusaurus-plugin-segment',
		// 		{
		// 			apiKey: process.env.SEGMENT_KEY,
		// 			// Add other options here.
		// 		},
		// 	],
		// ]),
	],
}
