/*
| Developed by Dirupt
| Filename : HomeHero.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { styled } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Snippet } from '@site/src/components/v2/Snippet'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HeroBanner = styled(Container)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper2,
	padding: theme.spacing(6, 3),
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(6, 0),
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
export function HomeHero() {
	return (
		<HeroBanner maxWidth={false}>
			<Grid container justifyContent={'space-between'} alignItems={'flex-end'}>
				<Grid item>
					<HeroSubtitle variant={'subtitle2'}>Welcome on</HeroSubtitle>
					<HeroTitle variant={'h1'}>
						Starton <span>documentation</span>
					</HeroTitle>
				</Grid>
				<Grid item>
					<Snippet />
				</Grid>
			</Grid>
		</HeroBanner>
	)
}
