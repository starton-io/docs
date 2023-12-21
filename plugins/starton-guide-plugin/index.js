/*
| Developed by Starton
| Filename : index.js
| Author : Philippe DESPLATS (philippe@starton.com)
*/

const blogPluginExports = require('@docusaurus/plugin-content-blog')
const defaultBlogPlugin = blogPluginExports.default

async function guidePluginExtended(...pluginOptions) {
	const blogPluginInstance = await defaultBlogPlugin(...pluginOptions)

	return {
		// Add all properties of the default blog plugin so existing functionality is preserved
		...blogPluginInstance,
		/**
		 * Override the default `contentLoaded` hook to access blog posts data
		 */
		contentLoaded: async function (...data) {
			await blogPluginInstance.contentLoaded(...data)

			const { actions, content } = data[0]
			const { setGlobalData } = actions
			setGlobalData(content)
		},
	}
}

module.exports = {
	...blogPluginExports,
	default: guidePluginExtended,
}
