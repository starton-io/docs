/*
| Developed by Starton
| Filename : presets.config.js
*/

import type * as Preset from '@docusaurus/preset-classic'
import { EnumChangefreq } from 'sitemap/dist/lib/types'
import type { PresetConfig } from '@docusaurus/types'

export const presets: Array<PresetConfig> = [
	[
		'classic',
		{
			sitemap: {
				changefreq: EnumChangefreq.WEEKLY,
				priority: 0.5,
				ignorePatterns: ['/tags/**'],
				filename: 'sitemap.xml',
			},
			blog: {
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
			},
			docs: {
				sidebarPath: require.resolve('./sidebars.config'),
			},
			theme: {
				customCss: require.resolve('../src/styles/starton.css'),
			},
			...(process.env.GTM_KEY && {
				googleTagManager: {
					containerId: process.env.GTM_KEY,
				},
			}),
		} satisfies Preset.Options,
	],
] satisfies Array<PresetConfig>
