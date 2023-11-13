/*
| Developed by Starton
| Filename : TypographyLink
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Typography, TypographyProps } from '@mui/material'
import Link from '@docusaurus/Link'

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
const TypographyLinkStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
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
		<Link {...anchorProps} to={anchorProps.href} style={{ width: 'fit-content' }}>
			<TypographyLinkStyled {...typographyProps} component={'span'}>{children}</TypographyLinkStyled>
		</Link>
	)
}
