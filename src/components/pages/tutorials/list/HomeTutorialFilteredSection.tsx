/*
| Developed by Starton
| Filename : HomeTutorialFilteredSection.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { HomeTutorialDifficulty, HomeTutorialServices } from '@site/plugins/starton-tutorial-plugin/types'
import { HomeTutorialsProps } from '@site/src/components/pages/tutorials/list/HomeTutorials'
import { MotionContainer, variantFade } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { m } from 'framer-motion'
import Box from '@mui/material/Box'
import { TutorialCard } from '@site/src/components/pages/tutorials'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialFilteredSectionProps extends Pick<HomeTutorialsProps, 'items'> {
	filterServices: Array<HomeTutorialServices>
	filterDifficulties: Array<HomeTutorialDifficulty>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialFilteredSection: React.FC<HomeTutorialFilteredSectionProps> = (props) => {
	const filteredTutorials = React.useMemo(() => {
		return props.items
			.filter((item) => {
				if (props.filterDifficulties.length === 0) return true

				return props.filterDifficulties.includes(item.content.metadata.frontMatter.difficulty)
			})
			.filter((item) => {
				if (props.filterServices.length === 0) return true
				if (!item.content.metadata.frontMatter.services) return false

				return props.filterServices.some((service) => {
					return item.content.metadata.frontMatter.services.includes(service)
				})
			})
	}, [props.filterDifficulties, props.filterServices, props.items])

	// Render
	// ----------------------------------------------------------------------------
	if (filteredTutorials.length === 0) return null

	return (
		<PageContainer sx={{ paddingTop: 0 }}>
			<Box
				component={MotionContainer}
				gap={{ xs: 2, lg: 3 }}
				display="grid"
				alignItems="stretch"
				gridTemplateColumns={{
					xs: 'repeat(1, 1fr)',
					md: 'repeat(3, 1fr)',
				}}
			>
				{filteredTutorials.map((item, index) => (
					<m.div key={index} variants={variantFade().inLeft}>
						<TutorialCard
							difficulty={item.content.metadata.frontMatter.difficulty}
							title={item.content.metadata.title}
							description={item.content.metadata.description}
							authors={item.content.metadata.authors}
							date={item.content.metadata.date}
							link={item.content.metadata.permalink}
							readingTime={item.content.metadata.readingTime}
						/>
					</m.div>
				))}
			</Box>
		</PageContainer>
	)
}
