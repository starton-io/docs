/*
| Developed by Starton
| Filename : index.js
| Author : Philippe DESPLATS (philippe@starton.com)
*/

const blogPluginExports = require('@docusaurus/plugin-content-blog')
const defaultBlogPlugin = blogPluginExports.default

async function tutorialPluginExtended(...pluginOptions) {
	const blogPluginInstance = await defaultBlogPlugin(...pluginOptions)

	return {
		// Add all properties of the default blog plugin so existing functionality is preserved
		...blogPluginInstance,
		/**
		 * Override the default `contentLoaded` hook to access blog posts data
		 */
		contentLoaded: async function (data) {
			const { content, actions } = data

			// Get the 5 latest blog posts
			const recentTutorialsLimit = 3
			const allTutorials = content.blogPosts
			const recentTutorials = [...content.blogPosts].splice(0, recentTutorialsLimit)

			async function createRecentTutorialPostModule(blogPost, index) {
				console.log(`[F:index.js - L:28] blogPost.metadata: `, blogPost.metadata)

				return {
					// Inject the metadata you need for each recent blog post
					metadata: await actions.createData(
						`tutorial-post-metadata-${index}.json`,
						JSON.stringify({
							title: blogPost.metadata.title,
							description: blogPost.metadata.description,
							link: blogPost.metadata.permalink,
							date: blogPost.metadata.date,
							authors: blogPost.metadata.authors,
							readingTime: blogPost.metadata.readingTime,
							difficulty: blogPost.metadata.frontMatter?.difficulty ?? 'getting-started',
						}),
					),

					// Inject the MDX excerpt as a JSX component prop
					// (what's above the <!-- truncate --> marker)
					Preview: {
						__import: true,
						// The markdown file for the blog post will be loaded by webpack
						path: blogPost.metadata.source,
						query: {
							truncated: true,
						},
					},
				}
			}

			// Create the home page
			actions.addRoute({
				// Add route for the home page
				path: '/',
				exact: true,

				// The component to use for the "Home" page route
				component: '@site/src/components/pages/home/Home.tsx',

				// These are the props that will be passed to our "Home" page component
				modules: {
					recentTutorials: await Promise.all(recentTutorials.map(createRecentTutorialPostModule)),
				},
			})

			// Create the gallery page
			// data.actions.addRoute({
			// 	// Add route for the home page
			// 	path: '/articles',
			// 	exact: true,
			//
			// 	// The component to use for the "Home" page route
			// 	component: '@site/src/components/Gallery.tsx',
			// 	// These are the props that will be passed to our "Home" page component
			// 	modules: {
			// 		blogPosts: await Promise.all(allTutorials.map(createRecentTutorialPostModule)),
			// 	},
			// })

			// Call the default overridden `contentLoaded` implementation
			return blogPluginInstance.contentLoaded(data)
		},
	}
}

module.exports = {
	...blogPluginExports,
	default: tutorialPluginExtended,
}
