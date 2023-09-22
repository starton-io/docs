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
		// Redirections plugin
		// Link : https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
		// ----------------------------------------------------------------------------
		[
              "posthog-docusaurus",
              {
                apiKey: process.env.POSTHOG_KEY,
                appUrl: process.env.POSTHOG_URL, // optional
                enableInDevelopment: true, // optional
                // other options are passed to posthog-js init as is
              },
            ],[
			'@docusaurus/plugin-client-redirects',
			{
				redirects: [
					{
						from: '/docs/Tutorials/Home',
						to: '/tutorials',
					},
				],
			},
		],
	],
}
