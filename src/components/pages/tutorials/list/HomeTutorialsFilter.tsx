/*
| Developed by Starton
| Filename : HomeTutorialsFilter.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { m } from 'framer-motion'
import { Divider, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { StartonButton } from '@site/src/components/commons/Button'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import { HomeTutorialsProps } from '@site/src/components/pages/tutorials/list/HomeTutorials'
import {
	HomeTutorialDifficulty,
	HomeTutorialServices,
	TUTORIAL_DIFFICULTY,
	TUTORIAL_SERVICES,
} from '@site/plugins/starton-tutorial-plugin/types'
import { HomeTutorialFilterActions } from '@site/src/components/pages/tutorials/list/HomeTutorialFilterActions'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialsFilterProps extends Pick<HomeTutorialsProps, 'items'> {
	// Difficulties
	difficulties: Array<HomeTutorialDifficulty>
	filterDifficulties: Array<HomeTutorialDifficulty>
	setFilterDifficulties: React.Dispatch<React.SetStateAction<Array<HomeTutorialDifficulty>>>

	// Services
	services: Array<HomeTutorialServices>
	filterServices: Array<HomeTutorialServices>
	setFilterServices: React.Dispatch<React.SetStateAction<Array<HomeTutorialServices>>>

	// Methods
	handleReset: () => void
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FilterContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: theme.spacing(3, 0),
}))

const FilterActionsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	flexWrap: 'wrap',
	alignItems: 'center',
	gap: theme.spacing(4),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialsFilter: React.FC<HomeTutorialsFilterProps> = ({
	difficulties,
	setFilterDifficulties,
	filterDifficulties,
	services,
	filterServices,
	setFilterServices,
	handleReset,
}) => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={3}>
					<Typography variant={'overline'}>Filters</Typography>
					<Box>
						<StartonButton
							size="small"
							color="secondary"
							startIcon={<RestartAltOutlinedIcon />}
							onClick={handleReset}
						>
							Reset
						</StartonButton>
					</Box>
				</Box>
				<FilterContainer>
					<FilterActionsContainer>
						<HomeTutorialFilterActions
							filterValues={filterDifficulties}
							value={difficulties}
							onChange={(event, newValue) => setFilterDifficulties(newValue)}
							render={(item) => TUTORIAL_DIFFICULTY[item]}
						/>
						<HomeTutorialFilterActions
							filterValues={filterServices}
							value={services}
							onChange={(event, newValue) => setFilterServices(newValue)}
							render={(item) => TUTORIAL_SERVICES[item]}
						/>
					</FilterActionsContainer>
				</FilterContainer>
				<Divider />
			</m.div>
		</PageContainer>
	)
}
