/*
| Developed by Starton
| Filename : Link
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Box, BoxProps, Typography } from '@mui/material'
import { ArrowLargeTopRight } from '@starton/react-ui-iconography'
import { default as DocusaurusLink } from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	boxProps?: BoxProps
	children: React.ReactNode
	variant?: 'primary' | 'reverse'
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const LinkStyled = styled(Box, {
	shouldForwardProp: (propName) => propName !== 'variant',
})<Pick<LinkProps, 'boxProps' | 'variant'>>(({ theme, variant }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	padding: theme.spacing(2),
	transition: theme.transitions.create(['color', 'background-color']),
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: theme.palette.divider,
	...(variant === 'primary' && {
		color: theme.palette.text.primary,
		'& .MuiSvgIcon-root path': {
			transition: theme.transitions.create(['fill']),
			fill: theme.palette.text.primary,
		},
		'&:hover': {
			color: theme.palette.background.paper2,
			backgroundColor: theme.palette.text.primary,
			'& .MuiSvgIcon-root path': {
				fill: theme.palette.background.paper2,
			},
		},
	}),
	...(variant === 'reverse' && {
		color: theme.palette.reverse.main,
		'& .MuiSvgIcon-root path': {
			transition: theme.transitions.create(['fill']),
			fill: theme.palette.reverse.main,
		},
		'&:hover': {
			color: theme.palette.reverse.contrastText,
			backgroundColor: theme.palette.reverse.dark,
			'& .MuiSvgIcon-root path': {
				fill: theme.palette.reverse.contrastText,
			},
		},
	}),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Link: React.FC<LinkProps> = (props) => {
	const { children, boxProps, variant, ...anchorProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<DocusaurusLink {...anchorProps} to={anchorProps.href}>
			<LinkStyled variant={variant} {...boxProps}>
				{typeof children === 'string' ? (
					<Typography variant={'button'} textTransform={'uppercase'}>
						{children}
					</Typography>
				) : null}
				<ArrowLargeTopRight sx={{ width: 16, height: 16 }} />
			</LinkStyled>
		</DocusaurusLink>
	)
}

Link.defaultProps = {
	variant: 'primary',
}
