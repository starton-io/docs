/*
| Developed by Starton
| Filename : index.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import defaultBlogPlugin, { BlogContent, PluginOptions } from '@docusaurus/plugin-content-blog'
import { LoadContext, Plugin } from '@docusaurus/types'

/*
|--------------------------------------------------------------------------
| Plugin
|--------------------------------------------------------------------------
*/
async function startonBlogPlugin(context: LoadContext, options: PluginOptions): Promise<Plugin<BlogContent>> {
	const blogPluginInstance = await defaultBlogPlugin(context, options)

	return {
		// Add all properties of the default blog plugin so existing functionality is preserved
		...blogPluginInstance,
		name: 'starton-tutorial-plugin',
		// Add custom configuration
		contentLoaded: async function (params) {
			const { content, actions } = params

			// Get the 5 latest blog posts
			const recentPostsLimit = 3
			const recentPosts = [...content.blogPosts].splice(0, recentPostsLimit)

			async function createRecentTutorialPostModule(blogPost, index) {
				console.log({ blogPost })
				return {
					// Inject the metadata you need for each recent blog post
					metadata: await actions.createData(
						`home-page-recent-tutorial-post-metadata-${index}.json`,
						JSON.stringify({
							title: blogPost.metadata.title,
							description: blogPost.metadata.description,
							frontMatter: blogPost.metadata.frontMatter,
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

			actions.addRoute({
				// Add route for the home page
				path: '/',
				exact: true,

				// The component to use for the "Home" page route
				component: '@site/src/components/pages/Home/Home.tsx',

				// These are the props that will be passed to our "Home" page component
				modules: {
					homePageTutorialMetadata: await actions.createData(
						'home-page-tutorial-metadata.json',
						JSON.stringify({
							blogTitle: options.blogTitle,
							blogDescription: options.blogDescription,
							totalPosts: content.blogPosts.length,
							totalRecentPosts: recentPosts.length,
						}),
					),
					recentPosts: await Promise.all(recentPosts.map(createRecentTutorialPostModule)),
				},
			})

			// Call the default overridden `contentLoaded` implementation
			return blogPluginInstance.contentLoaded(params)
		},
	}
}

export default startonBlogPlugin
