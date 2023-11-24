/*
| Developed by Starton
| Filename : HomeTutorialsFilter.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { m } from 'framer-motion'
import { styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
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
	marginTop: theme.spacing(3),
}))

const FilterActionsContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: theme.spacing(4),
}))

const FilterActions = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: theme.spacing(1),
}))

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	'& .MuiToggleButtonGroup-grouped': {
		border: `1px solid ${theme.palette.divider}`,
		...theme.typography.button2,
		color: theme.palette.secondary.light,
		fontWeight: 500,

		'&.Mui-selected': {
			borderColor: theme.palette.text.primary,
			background: theme.palette.component.disabled,
			color: theme.palette.text.primary,
		},
		'&.Mui-disabled': {
			border: 0,
		},
		'&:not(:first-of-type)': {
			borderRadius: 0,
		},
		'&:first-of-type': {
			borderRadius: 0,
		},
		'&:hover': {
			borderColor: theme.palette.primary.main,
		},
	},
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
				<Typography variant={'overline'}>Filters</Typography>
				<FilterContainer>
					<FilterActionsContainer>
						<FilterActions>
							<Typography variant={'body1'}>Difficulties</Typography>
							<StyledToggleButtonGroup
								color={'secondary'}
								value={filterDifficulties}
								onChange={(event, newValue) => setFilterDifficulties(newValue)}
							>
								{difficulties.map((difficulty, index) => (
									<ToggleButton value={difficulty} key={index}>
										{TUTORIAL_DIFFICULTY[difficulty]}
									</ToggleButton>
								))}
							</StyledToggleButtonGroup>
						</FilterActions>
						<FilterActions>
							<Typography variant={'body1'}>Services</Typography>
							<StyledToggleButtonGroup
								color={'secondary'}
								value={filterServices}
								onChange={(event, newValue) => setFilterServices(newValue)}
							>
								{services.map((service, index) => (
									<ToggleButton value={service} key={index}>
										{TUTORIAL_SERVICES[service]}
									</ToggleButton>
								))}
							</StyledToggleButtonGroup>
						</FilterActions>
					</FilterActionsContainer>
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
				</FilterContainer>
			</m.div>
		</PageContainer>
	)
}
