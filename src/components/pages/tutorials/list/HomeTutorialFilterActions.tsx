/*
| Developed by Starton
| Filename : HomeTutorialFilterActions.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { styled, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialFilterActionsProps<T> {
	title?: string
	filterValues: Array<T>
	value: Array<T>
	onChange: (event: React.MouseEvent<HTMLElement>, value: any) => void
	render: (item: T) => React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FilterActions = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: theme.spacing(1),
}))

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
	gap: theme.spacing(1),
	flexWrap: 'wrap',

	'& .MuiToggleButtonGroup-grouped': {
		border: `1px solid ${theme.palette.divider}`,
		...theme.typography.button,
		color: theme.palette.secondary.light,
		fontWeight: 500,

		'&:not(:first-of-type)': {
			borderRadius: 0,
			borderLeft: `1px solid ${theme.palette.divider}`,
		},
		'&.Mui-selected': {
			borderColor: theme.palette.text.primary,
			borderLeft: `1px solid ${theme.palette.text.primary}`,
			background: theme.palette.component.disabled,
			color: theme.palette.text.primary,
		},
		'&.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected': {
			borderLeft: `1px solid ${theme.palette.text.primary}`,
		},
		'&.Mui-disabled': {
			border: 0,
		},
		'&:first-of-type': {
			borderRadius: 0,
		},
		'&:hover': {
			borderColor: theme.palette.primary.main,
		},
		'&.Mui-selected + .MuiToggleButtonGroup-grouped.Mui-selected:hover': {
			borderLeft: `1px solid ${theme.palette.primary.main}`,
		},
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialFilterActions = <T,>(props: HomeTutorialFilterActionsProps<T>) => {
	return (
		<FilterActions>
			{props.title ? <Typography variant={'body1'}>{props.title}</Typography> : null}
			<StyledToggleButtonGroup color={'secondary'} value={props.filterValues} onChange={props.onChange}>
				{props.value.map((item, index) => (
					<ToggleButton value={item} key={index}>
						{props.render(item)}
					</ToggleButton>
				))}
			</StyledToggleButtonGroup>
		</FilterActions>
	)
}
