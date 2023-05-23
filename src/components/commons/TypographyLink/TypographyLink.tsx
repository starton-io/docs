/*
| Developed by Starton
| Filename : TypographyLink
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Typography, TypographyProps } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TypographyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	typographyProps?: TypographyProps
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const TypographyLinkStyled = styled(Typography)(({ theme }) => ({
	textDecoration: 'underline',
	...theme.typography.underline.sm,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const TypographyLink: React.FC<TypographyLinkProps> = (props) => {
	const { children, typographyProps, ...anchorProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<a {...anchorProps} style={{ width: 'fit-content' }}>
			<TypographyLinkStyled {...typographyProps}>{children}</TypographyLinkStyled>
		</a>
	)
}
