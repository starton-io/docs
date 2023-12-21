/*
| Developed by Starton
| Filename : DocsSectionGuides.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import useGlobalData from '@docusaurus/useGlobalData'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { GuidePost } from '@site/src/components/pages/guides/common'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DocsSectionGuidesProps {
	guidesIds: Array<string>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const DocsSectionGuides: React.FC<DocsSectionGuidesProps> = (props) => {
	const data = useGlobalData()
	const guides = React.useMemo(() => {
		// @ts-ignore
		return data['docusaurus-plugin-content-blog'].guides.blogPosts.filter((guide: any) =>
			props.guidesIds.includes(guide.id),
		)
	}, [props.guidesIds])

	React.useEffect(() => {
		console.log(`[F:DocsSectionGuides.tsx - L:35] guides(): `, guides)
	}, [guides])

	return (
		<Box display={'flex'} flexDirection={'column'} gap={3}>
			<Typography variant={'h3'} component={'h2'}>
				Guides
			</Typography>
			<Box component={'main'} itemScope itemType={'https://schema.org/Blog'}>
				{guides.map((content) => (
					<GuidePost
						key={content.metadata.permalink}
						permalink={content.metadata.permalink}
						title={content.metadata.title}
						date={content.metadata.date}
						readingTime={content.metadata.readingTime}
						authors={content.metadata.authors}
						imageUrl={content.metadata.frontMatter.image}
					/>
				))}
			</Box>
		</Box>
	)
}
