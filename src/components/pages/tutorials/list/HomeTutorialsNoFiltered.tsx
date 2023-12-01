/*
| Developed by Starton
| Filename : HomeTutorialsNoFiltered.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { HomeTutorialsProps } from '@site/src/components/pages/tutorials/list/HomeTutorials'
import { HomeTutorialDifficulty, TUTORIAL_DIFFICULTY } from '@site/plugins/starton-tutorial-plugin/types'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { m } from 'framer-motion'
import { SectionTitle } from '@site/src/components/commons/SectionTitle'
import Box from '@mui/material/Box'
import { TutorialCard } from '@site/src/components/pages/tutorials'
import { PageContainer } from '@site/src/components/commons/PageContainer'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialsNoFilteredProps extends Pick<HomeTutorialsProps, 'items'> {
	difficulty: HomeTutorialDifficulty
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialsNoFiltered: React.FC<HomeTutorialsNoFilteredProps> = (props) => {
	const filteredTutorials = React.useMemo(() => {
		return props.items
			.filter((item) => item.content.metadata.frontMatter.difficulty === props.difficulty)
			.filter((item) => {
				if (item.content.metadata.frontMatter.difficulty === 'beginner') {
					return item.content.metadata.frontMatter.featured === true
				}

				return item
			})
			.slice(0, 3)
	}, [props.difficulty, props.items])

	// Render
	// ----------------------------------------------------------------------------
	if (filteredTutorials.length === 0) return null

	return (
		<PageContainer component={MotionViewport} sx={{ paddingTop: 0 }}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle
					title={props.difficulty === 'beginner' ? 'Getting Started' : TUTORIAL_DIFFICULTY[props.difficulty]}
				/>
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="stretch"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{filteredTutorials.map((item, index) => (
						<TutorialCard
							key={index}
							difficulty={item.content.metadata.frontMatter.difficulty}
							title={item.content.metadata.title}
							description={item.content.metadata.description}
							authors={item.content.metadata.authors}
							date={item.content.metadata.date}
							link={item.content.metadata.permalink}
							readingTime={item.content.metadata.readingTime}
						/>
					))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
