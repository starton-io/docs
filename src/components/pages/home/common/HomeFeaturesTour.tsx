/*
| Developed by Starton
| Filename : HomeFeaturesTour.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
// @ts-ignore
import Image, { Props } from '@theme/IdealImage'
import { Card, CardProps, styled } from '@mui/material'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { m } from 'framer-motion'
import { SectionTitle } from '@site/src/components/commons/SectionTitle'
import Box from '@mui/material/Box'
import Link from '@docusaurus/Link'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { StartonButton } from '@site/src/components/commons/Button'
import { HOME_FEATURES_TOUR_LIST } from '@site/src/config/home-features-tour.config'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeFeaturesTourItem {
	image: Props['img']
	href: string
	alt: string
}
export interface HomeFeaturesTourProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: 0,
	position: 'relative',
	overflow: 'hidden',

	'&::before': {
		content: '""',
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		border: `1px solid ${theme.palette.primary.main}`,
		zIndex: 1,
	},

	'&:hover::before': {
		borderColor: theme.palette.reverse.light,
	},

	'& img': {
		transition: 'all 0.15s ease-in-out',
	},

	'&:hover img': {
		transform: 'scale(1.05)',
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeFeaturesTour: React.FC<HomeFeaturesTourProps> = () => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle
					title={'Features tour'}
					titleRight={
						<Link
							to={'https://www.youtube.com/@starton_com'}
							aria-description={'Watch more videos'}
							target={'_blank'}
						>
							<StartonButton size="large" variant="outlined">
								Watch more videos
							</StartonButton>
						</Link>
					}
				/>
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="center"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{HOME_FEATURES_TOUR_LIST.map((service, index) => (
						<Link key={index} to={service.href} aria-description={service.alt}>
							<CardStyled>
								<Image img={service.image} alt={service.alt} style={{ marginBottom: '-7px' }} />
							</CardStyled>
						</Link>
					))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
