/*
| Developed by Starton
| Filename : plugins.config.js
*/

import type { PluginConfig } from '@docusaurus/types'
import {PluginOptions} from "@docusaurus/plugin-client-redirects/src/options";

export const plugins: Array<PluginConfig> = [
	'@docusaurus/theme-live-codeblock',
	[
		'@docusaurus/plugin-ideal-image',
		{
			quality: 70,
			max: 1030, // max resized image's size.
			min: 360, // min resized image's size. if original is lower, use that size.
			steps: 2, // the max number of images generated between min and max (inclusive)
			disableInDev: false,
		},
	],
	// Redirections plugin
	// Link : https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
	// ----------------------------------------------------------------------------
	[
		'@docusaurus/plugin-client-redirects',
		{
			redirects: [
				{
					from: '/docs/tutorials/Home',
					to: '/tutorials',
				},
				{
					from: '/intro',
					to: '/api-reference',
				},
				{
					from: '/docs/smart-contract/ERC721-Meta.md',
					to: '/tutorials',
				},
				{
					from: '/blog',
					to: '/guides',
				},
			],
			createRedirects(existingPath) {
				if (existingPath.includes('/blog')) {
					return existingPath.replace('/blog', '/guides')
				}
			},
		} as PluginOptions,
	],
]
