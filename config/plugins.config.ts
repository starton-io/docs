/*
| Developed by Starton
| Filename : plugins.config.js
*/

import type { PluginConfig } from '@docusaurus/types'
import { PluginOptions } from '@docusaurus/plugin-client-redirects/src/options'
import { Options as BlogPluginOptions } from '@docusaurus/plugin-content-blog'
import * as path from 'path'

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
					from: '/intro',
					to: '/api-reference',
				},
				{
					from: '/tutorials/Home',
					to: '/tutorials',
				},
				{
					from: '/docs/smart-contract/ERC721-Meta.md',
					to: '/tutorials',
				},
			],
			createRedirects(existingPath) {
				if (existingPath.includes('/guides')) {
					return existingPath.replace('/guides', '/blog')
				} else if (existingPath.includes('/tutorials')) {
					return existingPath.replace('/tutorials', '/docs/tutorials')
				}

				return undefined
			},
		} as PluginOptions,
	],
	// Guides
	// ----------------------------------------------------------------------------
	[
		path.resolve(__dirname, '..', 'plugins', 'starton-guide-plugin'),
		{
			id: 'guides',
			blogTitle: 'Guides',
			blogSidebarCount: 'ALL',
			showReadingTime: true,
			path: 'guides',
			routeBasePath: 'guides',
			authorsMapPath: './authors.yml',
			blogListComponent: '@site/src/components/pages/guides/list/HomeGuides.tsx',
			blogPostComponent: '@site/src/components/pages/guides/details/HomeGuide.tsx',
			postsPerPage: 'ALL',
		} satisfies BlogPluginOptions,
	],
	// Tutorials
	// ----------------------------------------------------------------------------
	[
		path.resolve(__dirname, '..', 'plugins', 'starton-tutorial-plugin'),
		{
			id: 'tutorials',
			blogTitle: 'Tutorials',
			blogSidebarCount: 'ALL',
			showReadingTime: true,
			path: './tutorials',
			routeBasePath: 'tutorials',
			authorsMapPath: './authors.yml',
			blogListComponent: '@site/src/components/pages/tutorials/list/HomeTutorials.tsx',
			blogPostComponent: '@site/src/components/pages/tutorials/details/HomeTutorial.tsx',
			postsPerPage: 'ALL',
		} satisfies BlogPluginOptions,
	],
]
