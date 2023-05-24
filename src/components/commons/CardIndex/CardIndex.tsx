/*
| Developed by Starton
| Filename : CardIndex
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { BoxProps, styled, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { ArrowLargeTopRight } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardIndexProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	boxProps?: BoxProps
	title: string
	description: string
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardIndexStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	padding: theme.spacing(2),
	backgroundColor: 'transparent',

	'& .MuiSvgIcon-root': {
		transition: theme.transitions.create(['transform']),
	},

	'&:hover': {
		backgroundColor: theme.palette.background.paper,
		'& .MuiSvgIcon-root': {
			transform: 'translate(8px, -8px)',
		},
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const CardIndex: React.FC<CardIndexProps> = (props) => {
	const { children, title, description, boxProps, ...anchorProps } = props
	const theme = useTheme()

	// Render
	//--------------------------------------------------------------------------
	return (
		<a {...anchorProps} style={{ width: 'fit-content' }}>
			<CardIndexStyled {...boxProps}>
				<Box display="flex" flexDirection="column" gap={1}>
					<Box display="flex" justifyContent="space-between">
						<Typography variant="h4" component={'h2'} color="text.primary">
							{title}
						</Typography>
						<ArrowLargeTopRight fill={theme.palette.text.primary} sx={{ width: 16, height: 16 }} />
					</Box>
					<Typography variant="body2" color="text.secondary">
						{description}
					</Typography>
				</Box>
				{children}
			</CardIndexStyled>
		</a>
	)
}
