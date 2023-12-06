/*
| Developed by Starton
| Filename : HomeTutorialInfos.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Box from '@mui/material/Box'
import { Avatar, Card, CardProps, Divider, styled, Typography } from '@mui/material'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import TOC from '@theme/TOC'
import Link from '@docusaurus/Link'
import { GitHub } from '@mui/icons-material'
import Grid from '@mui/material/Grid'
import { m } from 'framer-motion'
import { variantFade } from '@site/src/components/animate'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialInfosProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	background: theme.palette.background.paper,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(2),
	padding: theme.spacing(3),
	borderRadius: 0,

	'&:hover': {
		borderColor: theme.palette.reverse.light,
	},
}))

const AvatarStyled = styled(Avatar)(({ theme }) => ({
	width: 111,
	height: 111,
	alignSelf: 'center',
	marginBottom: theme.spacing(1),
}))

const GitHubStyled = styled(GitHub)(({ theme }) => ({
	fill: theme.palette.text.secondary,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialInfos: React.FC<HomeTutorialInfosProps> = () => {
	const {
		toc,
		metadata: { authors, date, readingTime, frontMatter },
	} = useBlogPost()
	const { toc_min_heading_level: tocMinHeadingLevel, toc_max_heading_level: tocMaxHeadingLevel } = frontMatter
	const author = React.useMemo(() => authors?.[0], [authors])

	return (
		<Grid
			item
			xs={12}
			lg={3}
			display={'flex'}
			flexDirection={{
				xs: 'column-reverse',
				md: 'column',
			}}
			gap={3}
			marginTop={{ xs: 0, lg: 'calc(-40px - 2.5rem)' }}
			component={m.div}
			variants={variantFade().inRight}
		>
			<CardStyled>
				{author ? (
					<React.Fragment>
						<AvatarStyled src={author.imageURL} />
						<Box>
							<Box
								display={'flex'}
								flexDirection={'row'}
								alignItems={'center'}
								justifyContent={'space-between'}
							>
								<Typography variant={'h4'}>{author.name}</Typography>
								{author.url ? (
									<Link to={author.url}>
										<GitHubStyled />
									</Link>
								) : null}
							</Box>
							<Typography variant={'body2'} color={'text.secondary'}>
								{author.title}
							</Typography>
						</Box>
						<Divider />
					</React.Fragment>
				) : null}
				<Box>
					<Box display={'flex'} flexDirection={'row'} gap={0.5}>
						<Typography variant={'body2'} color={'text.secondary'}>
							Created:
						</Typography>
						<Typography variant={'body2'}>
							{Intl.DateTimeFormat('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
							}).format(new Date(date))}
						</Typography>
					</Box>
					<Box display={'flex'} flexDirection={'row'} gap={0.5}>
						<Typography variant={'body2'} color={'text.secondary'}>
							Reading time:
						</Typography>
						<Typography variant={'body2'}>{Math.ceil(Number(readingTime))} min</Typography>
					</Box>
				</Box>
				<Divider />
			</CardStyled>

			{toc.length > 0 ? (
				<CardStyled sx={{ position: 'sticky', top: 80 }}>
					<Typography variant={'caption'} color={'text.secondary'} textTransform={'uppercase'}>
						Content
					</Typography>
					<TOC toc={toc} minHeadingLevel={tocMinHeadingLevel} maxHeadingLevel={tocMaxHeadingLevel} />
				</CardStyled>
			) : null}
		</Grid>
	)
}
