/*
| Developed by Starton
| Filename : HomeTutorial.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import type { Props } from '@theme/BlogPostPage'
import { BlogPostProvider } from '@docusaurus/theme-common/internal'
import Layout from '@theme/Layout'
import Box from '@mui/material/Box'
import Unlisted from '@theme/Unlisted'
import { HomeTutorialMetadata } from '@site/src/components/pages/tutorials/details/HomeTutorialMetadata'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { HomeTutorialContainer } from '@site/src/components/pages/tutorials/details/HomeTutorialContainer'
import { MotionContainer } from '@site/src/components/animate'
import { HomeTutorialHeader } from '@site/src/components/pages/tutorials/details/HomeTutorialHeader'
import { HomeTutorialContent } from '@site/src/components/pages/tutorials/details/HomeTutorialContent'
import { HomeTutorialInfos } from '@site/src/components/pages/tutorials/details/HomeTutorialInfos'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialProps extends Props {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HomeTutorial: React.FC<HomeTutorialProps> = (props) => {
	const BlogPostContent = props.content
	const { unlisted } = props.content.metadata

	return (
		<BlogPostProvider content={props.content} isBlogPostPage>
			<HomeTutorialMetadata />
			<Layout>
				<HomeTutorialHeader />
				<Box paddingBottom={11} component={MotionContainer}>
					<PageContainer component={'main'} itemScope itemType={'https://schema.org/Blog'}>
						{unlisted && <Unlisted />}
						<HomeTutorialContainer>
							<HomeTutorialContent>
								<BlogPostContent />

								{/*{nextItem || prevItem ? (*/}
								{/*	<Box component={MotionViewport}>*/}
								{/*		<m.div variants={variantFade().inLeft}>*/}
								{/*			<BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />*/}
								{/*		</m.div>*/}
								{/*	</Box>*/}
								{/*) : null}*/}
							</HomeTutorialContent>

							<HomeTutorialInfos />
						</HomeTutorialContainer>
					</PageContainer>
				</Box>
			</Layout>
		</BlogPostProvider>
	)
}

export default HomeTutorial
