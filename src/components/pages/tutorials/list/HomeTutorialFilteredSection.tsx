/*
| Developed by Starton
| Filename : HomeTutorialFilteredSection.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import {
	HomeTutorialDifficulty,
	HomeTutorialServices,
	TUTORIAL_DIFFICULTY,
} from '@site/plugins/starton-tutorial-plugin/types'
import { HomeTutorialsProps } from '@site/src/components/pages/tutorials/list/HomeTutorials'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { m } from 'framer-motion'
import { SectionTitle } from '@site/src/components/commons/SectionTitle'
import Box from '@mui/material/Box'
import { TutorialCard } from '@site/src/components/pages/tutorials'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialFilteredSectionProps extends Pick<HomeTutorialsProps, 'items'> {
	difficulty: HomeTutorialDifficulty
	filterServices: Array<HomeTutorialServices>
	filterDifficulties: Array<HomeTutorialDifficulty>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialFilteredSection: React.FC<HomeTutorialFilteredSectionProps> = (props) => {
	// Filter data
	// ----------------------------------------------------------------------------
	const isFiltered = React.useMemo(() => {
		return props.filterDifficulties.length > 0 || props.filterServices.length > 0
	}, [props.filterDifficulties, props.filterServices])

	const filteredTutorials = React.useMemo(() => {
		const items = props.items.filter((item) => item.content.metadata.frontMatter.difficulty === props.difficulty)

		if (!isFiltered) {
			return items
				.filter((item) => {
					if (item.content.metadata.frontMatter.difficulty === 'beginner') {
						return item.content.metadata.frontMatter.featured === true
					}

					return item
				})
				.slice(0, 3)
		}

		return items.filter((item) => {
			if (props.filterServices.length === 0) return true
			return (
				item.content.metadata.frontMatter.services?.filter((service) => props.filterServices.includes(service))
					.length > 0 ?? true
			)
		})
	}, [isFiltered, props.difficulty, props.filterServices, props.items])

	// Render
	// ----------------------------------------------------------------------------
	if (filteredTutorials.length === 0) return null

	return (
		<PageContainer component={MotionViewport} sx={{ paddingTop: 0 }}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle
					title={
						!isFiltered && props.difficulty === 'beginner'
							? 'Getting Started'
							: TUTORIAL_DIFFICULTY[props.difficulty]
					}
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
