/*
| Developed by Starton
| Filename : DocsGradientCard.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Card from '@mui/material/Card'
import { Avatar, CardProps, styled, Typography } from '@mui/material'
import Link from '@docusaurus/Link'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DocsGradientCardProps {
	link: string
	title: string
	description: string
	icon: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.background.paper}`,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	height: '100%',
	gap: theme.spacing(3),
	padding: theme.spacing(3),
	borderRadius: 0,
	background: `linear-gradient(127deg, #212B33 0%, #171E27 100%)`,
	boxShadow: 'none',

	'&:hover': {
		borderColor: theme.palette.reverse.light,
	},
}))

const DescriptionStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontWeight: 400,
}))

const IconStyled = styled(Avatar)(({ theme }) => ({
	backgroundColor: 'transparent',
	boxSizing: 'border-box',
	color: theme.palette.primary.main,

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
export const DocsGradientCard: React.FC<DocsGradientCardProps> = (props) => {
	return (
		<Link to={props.link} aria-description={props.title}>
			<CardStyled>
				<IconStyled variant="square">{props.icon}</IconStyled>
				<Box>
					<Typography variant={'h4'}>{props.title}</Typography>
					<DescriptionStyled variant={'body2'}>{props.description}</DescriptionStyled>
				</Box>
			</CardStyled>
		</Link>
	)
}
