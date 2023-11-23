/*
| Developed by Starton
| Filename : HomeMainResources.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Card, CardProps, styled, Typography } from '@mui/material'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { SectionTitle } from '@site/src/components/commons/SectionTitle'
import { m } from 'framer-motion'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import Box from '@mui/material/Box'
import { HOME_MAIN_RESOURCES } from '@site/src/config/home-main-resources.config'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeMainResourceItem {
	icon: React.ReactNode
	title: string
	description: string
	href: string
	alt?: string
}
export interface HomeMainResourcesProps {}
/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: theme.spacing(2),
	height: '168px',
	padding: theme.spacing(5, 3),
	borderRadius: 0,

	'&:hover': {
		borderColor: theme.palette.reverse.light,
	},
}))

const DescriptionStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontWeight: 400,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeMainResources: React.FC<HomeMainResourcesProps> = () => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle title={'Main resources'} />
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="center"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(4, 1fr)',
					}}
				>
					{HOME_MAIN_RESOURCES.map((resource, index) => (
						<Link key={index} to={resource.href} aria-description={resource?.alt ?? resource.title}>
							<CardStyled>
								{resource.icon}
								<Box>
									<Typography variant={'h4'} component={'h3'} textAlign={'left'}>
										{resource.title}
									</Typography>
									<DescriptionStyled variant={'body2'}>{resource.description}</DescriptionStyled>
								</Box>
							</CardStyled>
						</Link>
					))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
