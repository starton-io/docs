/*
| Developed by Starton
| Filename : Link
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Box, BoxProps, Typography, useTheme } from '@mui/material'
import { ArrowLargeTopRight } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	boxProps?: Omit<BoxProps, 'children'>
	children: React.ReactNode
	color?: 'primary' | 'reverse'
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const LinkStyled = styled(Box, {
	shouldForwardProp: (propName) => propName !== 'color',
})<LinkProps>(({ theme, color }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	padding: theme.spacing(2),
	transition: theme.transitions.create(['color', 'background-color']),
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: theme.palette.divider,
	...(color === 'primary' && {
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
	...(color === 'reverse' && {
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
	const { children, boxProps, color, ...anchorProps } = props
	const theme = useTheme()

	// Render
	//--------------------------------------------------------------------------
	return (
		<a {...anchorProps}>
			<LinkStyled {...boxProps} color={color}>
				{typeof children === 'string' ? <Typography>{children}</Typography> : null}
				<ArrowLargeTopRight sx={{ width: 16, height: 16 }} />
			</LinkStyled>
		</a>
	)
}

Link.defaultProps = {
	color: 'primary',
}
