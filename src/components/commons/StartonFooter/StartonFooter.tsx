/*
| Developed by Starton
| Filename : StartonFooter
| Author : Calixte DE TOURRIS (calixte@starton.com)
*/

import React from 'react'
import { Box, BoxProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonFooterProps extends BoxProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonFooterStyled = styled((props: BoxProps) => <Box {...props} component="footer" />)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper2,
	width: '100%',
	border: 'none',
	padding: theme.spacing(1, 3),

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(1, 0),
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonFooter: React.FC<StartonFooterProps> = (props) => {
	const { children, ...footerProps } = props

	// Render
	//--------------------------------------------------------------------------
	return <StartonFooterStyled {...footerProps}>{children}</StartonFooterStyled>
}
