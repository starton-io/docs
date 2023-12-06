/*
| Developed by Starton
| Filename : HomeGuide.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import type { Props } from '@theme/BlogPostPage'
import { BlogPostProvider } from '@docusaurus/theme-common/internal'
import Layout from '@theme/Layout'
import Box from '@mui/material/Box'
import Unlisted from '@theme/Unlisted'
import { HomeGuideMetadata } from '@site/src/components/pages/guides/details/HomeGuideMetadata'
import { HomeGuideHeader } from '@site/src/components/pages/guides/details/HomeGuideHeader'
import { MotionContainer } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { HomeGuideContainer } from '@site/src/components/pages/guides/details/HomeGuideContainer'
import { HomeGuideContent } from '@site/src/components/pages/guides/details/HomeGuideContent'
import { HomeGuideInfos } from '@site/src/components/pages/guides/details/HomeGuideInfos'
import { Typography } from '@mui/material'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeGuideProps extends Props {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HomeGuide: React.FC<HomeGuideProps> = (props) => {
	const BlogPostContent = props.content
	const { unlisted } = props.content.metadata

	return (
		<BlogPostProvider content={props.content} isBlogPostPage>
			<HomeGuideMetadata />
			<Layout>
				<Box paddingBottom={11} component={MotionContainer}>
					<PageContainer component={'main'} itemScope itemType={'https://schema.org/Blog'}>
						{unlisted && <Unlisted />}
						<HomeGuideHeader />
						<HomeGuideContainer>
							<HomeGuideContent>
								<Link to={'/guides'} aria-description={'See more guides'}>
									<Typography variant={'overline'} color={'warning.main'}>
										Guide
									</Typography>
								</Link>
								<Typography variant={'h1'} marginBottom={4}>
									{props.content.metadata.title}
								</Typography>
								<BlogPostContent />
							</HomeGuideContent>

							<HomeGuideInfos />
						</HomeGuideContainer>
					</PageContainer>
				</Box>
			</Layout>
		</BlogPostProvider>
	)
}

export default HomeGuide
