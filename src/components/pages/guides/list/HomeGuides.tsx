/*
| Developed by Dirupt
| Filename : HomeGuides.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import Box from '@mui/material/Box'
import type { Props } from '@theme/BlogListPage'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { GuidePost } from '@site/src/components/pages/guides/common'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeGuidesProps extends Props {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HomeGuides: React.FC<HomeGuidesProps> = (props) => {
	return (
		<Layout title={'Guides'}>
			<PageHeader
				hideSnippet
				title={
					<React.Fragment>
						Starton <span>Guides</span>
					</React.Fragment>
				}
				description={'A list of resources to understand Starton and blockchain concepts'}
			/>
			<Box paddingBottom={11}>
				<Box component={'main'} itemScope itemType={'https://schema.org/Blog'}>
					<PageContainer>
						{props.items.map(({ content }) => (
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
					</PageContainer>
				</Box>
			</Box>
		</Layout>
	)
}

export default HomeGuides
