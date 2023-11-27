/*
| Developed by Starton
| Filename : StartonFooterHead
| Author : Calixte DE TOURRIS (calixte@starton.com)
*/

import React from 'react'
import { Avatar, Box, styled } from '@mui/material'
import { StartonType } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonFooterHeadProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FooterHeadStyled = styled(Box)(({ theme }) => ({
	paddingBottom: theme.spacing(7),
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	flexDirection: 'column',
	gap: theme.spacing(3),

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
	},
}))

const StartonLogoContainer = styled(Avatar)(({ theme }) => ({
	backgroundColor: 'transparent',
	'&, & svg': {
		width: theme.spacing(22),
		height: 'auto',
	},
	[theme.breakpoints.up('md')]: {
		'&, & svg': {
			width: theme.spacing(20),
		},
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonFooterHead: React.FC<StartonFooterHeadProps> = (props) => {
	const { children } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<FooterHeadStyled>
			<StartonLogoContainer variant="square">
				<StartonType fill="white" />
			</StartonLogoContainer>
			<Box display="flex" gap={1} flexWrap={'wrap'} justifyContent={{ xs: 'center', md: 'flex-end' }}>
				{children}
			</Box>
		</FooterHeadStyled>
	)
}
