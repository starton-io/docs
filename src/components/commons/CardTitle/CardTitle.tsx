/*
| Developed by Starton
| Filename : CardTitle
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Avatar, BoxProps, styled, Typography, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { ArrowLargeTopRight } from '@starton/react-ui-iconography'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardTitleProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	icon: React.ReactNode
	boxProps?: BoxProps
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardTitleStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: theme.palette.divider,
	backgroundColor: theme.palette.background.paper,
	position: 'relative',
	width: '100%',
	marginBottom: theme.spacing(2),

	'& .MuiSvgIcon-root': {
		transition: theme.transitions.create(['transform']),
	},
	'& .StartonCardTitle-arrowLarge': {
		position: 'absolute',
		top: 16,
		right: 16,
	},
	'&:hover': {
		backgroundColor: theme.palette.background.paper,
		'& .StartonCardTitle-arrowLarge': {
			transform: 'translate(8px, -8px)',
		},
	},
}))

const IconStyled = styled(Avatar)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	boxSizing: 'border-box',
	color: theme.palette.primary.main,
	width: theme.spacing(9),
	height: theme.spacing(9),
	'& svg': {
		width: theme.autoSizing('xl2'),
		height: theme.autoSizing('xl2'),
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const CardTitle: React.FC<CardTitleProps> = (props) => {
	const { children, icon, boxProps, ...anchorProps } = props
	const theme = useTheme()

	// Render
	//--------------------------------------------------------------------------
	return (
		<Link {...anchorProps} to={anchorProps.href} style={{ width: 'fit-content' }}>
			<CardTitleStyled width="fit-content" {...boxProps}>
				<IconStyled variant="square">{icon}</IconStyled>
				{typeof children === 'string' ? (
					<Typography variant="h4" color="default" paddingLeft={2} paddingRight={8}>
						{children}
					</Typography>
				) : (
					children
				)}
				<ArrowLargeTopRight
					fill={theme.palette.text.primary}
					sx={{ width: 16, height: 16 }}
					className="StartonCardTitle-arrowLarge"
				/>
			</CardTitleStyled>
		</Link>
	)
}
