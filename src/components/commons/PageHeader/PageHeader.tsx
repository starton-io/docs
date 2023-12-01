/*
| Developed by Starton
| Filename : PageHeader.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { ContainerProps, styled } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Snippet } from '@site/src/components/commons/Snippet'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { m } from 'framer-motion'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PageHeaderProps {
	title: React.ReactNode | string
	subTitle?: string
	description?: string
	hideSnippet?: boolean
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HeroBanner = styled(Container)<ContainerProps>(({ theme }) => ({
	background: 'linear-gradient(125deg, #121C26 28.72%, #0E1114 70.73%)',
	padding: theme.spacing(8, 3, 6),
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 40,
	[theme.breakpoints.up('md')]: {
		minHeight: 260,
		padding: theme.spacing(0, 10),
		flexDirection: 'row',
	},
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	textTransform: 'uppercase',
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.subtitle2.fontSize,
	},
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: theme.typography.h3.fontSize,
	fontWeight: 600,
	letterSpacing: '1.328px',
	'& span': {
		color: theme.palette.warning.main,
	},
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.h1.fontSize,
	},
}))

const HeroDescription = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<HeroBanner maxWidth={false} component={MotionViewport}>
			<Grid
				container
				justifyContent={'space-between'}
				alignItems={{ xs: 'flex-start', md: 'flex-end' }}
				flexDirection={{ xs: 'column', md: 'row' }}
				maxWidth={1280}
			>
				<Grid item xs={12} md width={{ xs: '100%', md: 'fit-content' }}>
					<m.div variants={variantFade().inLeft}>
						{props.subTitle ? <HeroSubtitle variant={'subtitle2'}>{props.subTitle}</HeroSubtitle> : null}
						<HeroTitle variant={'h1'}>{props.title}</HeroTitle>
						{props.description ? (
							<HeroDescription variant={'body1'}>{props.description}</HeroDescription>
						) : null}
					</m.div>
				</Grid>
				{!props.hideSnippet ? (
					<Grid item marginTop={{ xs: 6 }} xs={12} md={'auto'} width={{ xs: '100%', md: 'fit-content' }}>
						<m.div variants={variantFade().inRight}>
							<Snippet />
						</m.div>
					</Grid>
				) : null}
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
