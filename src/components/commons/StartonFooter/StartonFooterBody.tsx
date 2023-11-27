/*
| Developed by Starton
| Filename : StartonFooterBody
| Author : Calixte DE TOURRIS (calixte@starton.com)
*/

import React from 'react'
import { Box, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonFooterBodyProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const FooterBodyStyled = styled(Box)(({ theme }) => ({
	paddingBottom: theme.spacing(6),
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(3),

	[theme.breakpoints.up('md')]: {
		flexDirection: 'row',
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonFooterBody: React.FC<StartonFooterBodyProps> = (props) => {
	const { children } = props

	// Render
	//--------------------------------------------------------------------------
	return <FooterBodyStyled>{children}</FooterBodyStyled>
}
