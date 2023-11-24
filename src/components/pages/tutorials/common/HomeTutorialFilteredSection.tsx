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
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialFilteredSection: React.FC<HomeTutorialFilteredSectionProps> = (props) => {
	const filterServices = React.useMemo(() => {
		return props.items
			.filter((item) => item.content.metadata.frontMatter.difficulty === props.difficulty)
			.filter((item) => {
				if (props.filterServices.length === 0) return true
				return (
					item.content.metadata.frontMatter.services?.filter((service) =>
						props.filterServices.includes(service),
					).length > 0 ?? true
				)
			})
	}, [props.difficulty, props.filterServices, props.items])

	if (filterServices.length === 0) return null

	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle title={TUTORIAL_DIFFICULTY[props.difficulty]} />
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="stretch"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{filterServices.map((item, index) => (
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
