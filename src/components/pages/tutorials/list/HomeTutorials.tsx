/*
| Developed by Starton
| Filename : HomeTutorials.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import Box from '@mui/material/Box'
import { HomeTutorialsFilter } from '@site/src/components/pages/tutorials'
import {
	HomeTutorialDifficulty,
	HomeTutorialServices,
	TUTORIAL_DIFFICULTY,
	TUTORIAL_SERVICES,
	TutorialList,
} from '@site/plugins/starton-tutorial-plugin/types'
import { HomeTutorialFilteredSection } from '@site/src/components/pages/tutorials/list/HomeTutorialFilteredSection'
import { HomeTutorialsNoFiltered } from '@site/src/components/pages/tutorials/list/HomeTutorialsNoFiltered'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialsProps {
	items: Array<TutorialList>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HomeTutorials: React.FC<HomeTutorialsProps> = (props) => {
	const [filterDifficulties, setFilterDifficulties] = React.useState<Array<HomeTutorialDifficulty>>([])
	const [filterServices, setFilterServices] = React.useState<Array<HomeTutorialServices>>([])
	const isFiltered = React.useMemo(() => {
		return filterDifficulties.length > 0 || filterServices.length > 0
	}, [filterDifficulties, filterServices])

	// Prepare data
	// ----------------------------------------------------------------------------
	const difficulties = React.useMemo<Array<HomeTutorialDifficulty>>(() => {
		return Array.from(
			new Set(
				props.items
					.map((item) => item.content.metadata.frontMatter.difficulty)
					.filter((difficulty) => difficulty)
					.sort((a, b) => {
						return Object.keys(TUTORIAL_DIFFICULTY).indexOf(a) - Object.keys(TUTORIAL_DIFFICULTY).indexOf(b)
					}),
			),
		)
	}, [props.items])

	const services = React.useMemo<Array<HomeTutorialServices>>(() => {
		return Array.from(
			new Set(
				props.items
					.flatMap((item) => item.content.metadata.frontMatter.services)
					.filter((services) => services)
					.sort((a, b) => {
						return Object.keys(TUTORIAL_SERVICES).indexOf(a) - Object.keys(TUTORIAL_SERVICES).indexOf(b)
					}),
			),
		)
	}, [props.items])

	// Methods
	// ----------------------------------------------------------------------------
	const handleReset = () => {
		setFilterDifficulties([])
		setFilterServices([])
	}

	// Render
	// ----------------------------------------------------------------------------
	return (
		<Layout title={'Tutorials'}>
			<PageHeader
				hideSnippet
				title={
					<React.Fragment>
						Starton <span>Tutorials</span>
					</React.Fragment>
				}
				description={'Learn how to build web3 projects using our API'}
			/>
			<Box paddingBottom={11}>
				<HomeTutorialsFilter
					items={props.items}
					difficulties={difficulties}
					filterDifficulties={filterDifficulties}
					setFilterDifficulties={setFilterDifficulties}
					services={services}
					filterServices={filterServices}
					setFilterServices={setFilterServices}
					handleReset={handleReset}
				/>
				<Box component={'main'} itemScope itemType={'https://schema.org/Blog'}>
					{isFiltered ? (
						<HomeTutorialFilteredSection
							filterServices={filterServices}
							filterDifficulties={filterDifficulties}
							items={props.items}
						/>
					) : (
						difficulties
							.filter((difficulty) => {
								if (filterDifficulties.length === 0) return true

								return filterDifficulties.includes(difficulty)
							})
							.map((difficulty) => (
								<HomeTutorialsNoFiltered key={difficulty} items={props.items} difficulty={difficulty} />
							))
					)}
				</Box>
			</Box>
		</Layout>
	)
}

export default HomeTutorials
