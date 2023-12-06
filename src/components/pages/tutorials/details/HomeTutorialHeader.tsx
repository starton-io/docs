/*
| Developed by Starton
| Filename : HomeTutorialHeader.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { ContainerProps, styled } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import Grid from '@mui/material/Grid'
import { m } from 'framer-motion'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import { HomeTutorialDifficulty, TUTORIAL_DIFFICULTY } from '@site/plugins/starton-tutorial-plugin/types'
import Box from '@mui/material/Box'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialHeaderProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const HeroBanner = styled(Container)<ContainerProps>(({ theme }) => ({
	backgroundImage: 'url(/img/tutorials/header.jpg)',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: 16,
	minHeight: 260,

	[theme.breakpoints.up('md')]: {
		minHeight: 316,
		padding: theme.spacing(0, 10),
		flexDirection: 'row',
	},
}))

const HeroSubtitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.warning.main,
	textTransform: 'uppercase',
}))

const HeroTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: theme.typography.h3.fontSize,
	fontWeight: 600,
	letterSpacing: '1.328px',
	maxWidth: 900,

	'& span': {
		color: theme.palette.warning.main,
	},
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.h1.fontSize,
	},
}))

const MetadataItemStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	gap: theme.spacing(1),
}))

const DifficultyBadge = styled('span', {
	shouldForwardProp: (propName) => propName !== 'difficulty',
})<{ difficulty: HomeTutorialDifficulty }>(({ theme, difficulty }) => ({
	width: 8,
	height: 8,
	backgroundColor:
		difficulty === 'beginner'
			? theme.palette.info.main
			: difficulty === 'intermediate'
			? theme.palette.warning.main
			: theme.palette.error.main,
	borderRadius: 4,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialHeader: React.FC<HomeTutorialHeaderProps> = () => {
	const { metadata } = useBlogPost()
	const { title, frontMatter } = metadata
	const { difficulty } = frontMatter

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
					<Box
						component={m.div}
						variants={variantFade().inLeft}
						display={'flex'}
						flexDirection={'row'}
						alignItems={'center'}
						gap={4}
						marginBottom={2}
					>
						<Link to={'/tutorials'} aria-description={'See more tutorials'}>
							<HeroSubtitle variant={'overline'}>Tutorial</HeroSubtitle>
						</Link>
						<MetadataItemStyled>
							<DifficultyBadge difficulty={difficulty as HomeTutorialDifficulty} />
							<Typography variant={'caption'}>
								{TUTORIAL_DIFFICULTY[difficulty as HomeTutorialDifficulty]}
							</Typography>
						</MetadataItemStyled>
					</Box>
					<m.div variants={variantFade().inLeft}>
						<HeroTitle variant={'h1'} itemProp={'headline'}>
							{title}
						</HeroTitle>
					</m.div>
				</Grid>
			</Grid>
		</HeroBanner>
	)
}
