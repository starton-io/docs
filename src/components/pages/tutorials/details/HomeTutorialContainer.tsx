/*
| Developed by Starton
| Filename : HomeTutorialContainer.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialContainerProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialContainer: React.FC<HomeTutorialContainerProps> = (props) => {
	const {
		frontMatter,
		assets,
		metadata: { description },
	} = useBlogPost()
	const { withBaseUrl } = useBaseUrlUtils()
	const image = assets.image ?? frontMatter.image
	const keywords = frontMatter.keywords ?? []

	return (
		<Grid
			container
			itemScope
			component={'article'}
			itemProp={'blogPost'}
			itemType={'https://schema.org/BlogPosting'}
			spacing={3}
			flexDirection={{ xs: 'column-reverse', lg: 'row' }}
		>
			{description && <meta itemProp="description" content={description} />}
			{image && <link itemProp="image" href={withBaseUrl(image, { absolute: true })} />}
			{keywords.length > 0 && <meta itemProp="keywords" content={keywords.join(',')} />}
			{props.children}
		</Grid>
	)
}
