/*
| Developed by Starton
| Filename : HomeServices.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { styled, Card, CardProps, Typography } from '@mui/material'
import Link from '@docusaurus/Link'
import Box from '@mui/material/Box'
import { m } from 'framer-motion'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { SectionTitle } from '@site/src/components/commons/SectionTitle/SectionTitle'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { HOME_SERVICE_LIST } from '@site/src/config/home-services.config'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeServiceItem {
	content: string
	href: string
	alt?: string
}
export interface HomeServicesProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	background: 'radial-gradient(at top left, #20303E 0%, #181E23 100%)',
	display: 'flex',
	alignItems: 'center',
	height: '80px',
	padding: theme.spacing(2),
	borderRadius: 0,

	'&:hover': {
		borderColor: theme.palette.reverse.light,
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeServices: React.FC<HomeServicesProps> = () => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle title={'Services'} />
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="center"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{Object.entries(HOME_SERVICE_LIST).map(([key, value]) => (
						<Link key={key} to={value.href} aria-description={value?.alt ?? value.content}>
							<CardStyled>
								<Typography variant={'h4'} component={'h3'} textAlign={'left'}>
									{value.content}
								</Typography>
							</CardStyled>
						</Link>
					))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
