/*
| Developed by Starton
| Filename : CardLink.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Card, CardProps, styled, Typography } from '@mui/material'
import { ArrowLargeTopRight } from '@starton/react-ui-iconography'
import Link, { Props as LinkProps } from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardLinkProps {
	title: string
	href: string
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardLinkStyled = styled(Card)<CardProps & LinkProps>(({ theme }) => ({
	background: theme.palette.background.paper,
	display: 'flex',
	flexDirection: 'row',
	gap: theme.spacing(2),
	padding: theme.spacing(3),
	marginBottom: theme.spacing(2),
	borderRadius: 0,
	border: `1px solid ${theme.palette.primary.main}`,

	'&:hover svg': {
		transform: 'rotate(45deg)',
	},
}))

const ArrowLargeTopRightStyled = styled(ArrowLargeTopRight)(({ theme }) => ({
	width: 24,
	height: 24,
	fill: theme.palette.primary.main,
	transition: 'all 0.2s ease-in-out',

	'& path': {
		fill: theme.palette.primary.main,
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const CardLink: React.FC<CardLinkProps> = (props) => {
	return (
		<CardLinkStyled component={Link} to={props.href}>
			<ArrowLargeTopRightStyled />
			<Typography variant={'h4'} component={'span'}>
				{props.title}
			</Typography>
		</CardLinkStyled>
	)
}
