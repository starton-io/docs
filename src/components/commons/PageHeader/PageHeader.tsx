/*
| Developed by Dirupt
| Filename : PageHeader.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { styled } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Snippet } from '@site/src/components/commons/Snippet'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PageHeaderProps {
	title: React.ReactNode | string
	subTitle?: string
	description?: string
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HeroBanner = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper2,
	padding: theme.spacing(6, 3),
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(6, 6),
		flexDirection: 'row',
	},
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontWeight: 400,
	fontFamily: `"PP Neue Machina", "Inter", Arial, sans-serif`,
	textTransform: 'uppercase',
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	'& span': {
		color: theme.palette.warning.main,
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<HeroBanner maxWidth={false}>
			<Grid container justifyContent={'space-between'} alignItems={'flex-end'}>
				<Grid item>
					<HeroSubtitle variant={'subtitle2'}>{props.subTitle}</HeroSubtitle>
					<HeroTitle variant={'h1'}>{props.title}</HeroTitle>
				</Grid>
				<Grid item>
					<Snippet />
				</Grid>
			</Grid>
		</HeroBanner>
	)
}

/*
|--------------------------------------------------------------------------
| Component configurations
|--------------------------------------------------------------------------
*/
PageHeader.displayName = 'PageHeader'
