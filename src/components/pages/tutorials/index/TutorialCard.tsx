/*
| Developed by Starton
| Filename : TutorialCard.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Avatar, Card, CardProps, Divider, Palette, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import UpdateIcon from '@mui/icons-material/Update'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import Link from '@docusaurus/Link'
import useGlobalData from '@docusaurus/useGlobalData'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type HomeTutorialDiffculty = 'get-started' | 'beginner' | 'intermediate' | 'advanced'
export interface HomeTutorialItem {
	date: Date
	duration: string
	difficulty: HomeTutorialDiffculty
	title: string
	description: string
	href: string
	authorId: Array<string>
	alt?: string
}
export interface TutorialCardProps extends HomeTutorialItem {}

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const DIFFICULTY_BADGE = {
	'get-started': 'Get started',
	beginner: 'Beginner',
	intermediate: 'Intermediate',
	advanced: 'Advanced',
}

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
	gap: theme.spacing(3),
	padding: theme.spacing(3),
	borderRadius: 0,

	'&:hover': {
		borderColor: theme.palette.reverse.light,
	},
}))

const MetadataStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: theme.spacing(2),
	width: '100%',
	color: theme.palette.text.secondary,
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
})<{ difficulty: HomeTutorialDiffculty }>(({ theme, difficulty }) => ({
	width: 8,
	height: 8,
	backgroundColor:
		difficulty === 'get-started'
			? theme.palette.success.main
			: difficulty === 'beginner'
			? theme.palette.info.main
			: difficulty === 'intermediate'
			? theme.palette.warning.main
			: theme.palette.error.main,
	borderRadius: 4,
}))

const DescriptionStyled = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontWeight: 400,
}))

const DividerStyled = styled(Divider)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	width: '100%',
}))

const AvatarGroupStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: theme.spacing(1.5),
}))

const AvatarStyled = styled(Avatar)(({ theme }) => ({
	width: 24,
	height: 24,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const TutorialCard: React.FC<TutorialCardProps> = ({
	alt,
	href,
	title,
	date,
	authorId,
	difficulty,
	duration,
	description,
}) => {
	const docusaurusContext = useDocusaurusContext()

	React.useEffect(() => {
		console.log(`[F:TutorialCard.tsx - L:124] docusaurusContext(): `, docusaurusContext)
	}, [docusaurusContext])

	return (
		<Link to={href} aria-description={alt ?? title}>
			<CardStyled>
				<MetadataStyled>
					<MetadataItemStyled>
						<UpdateIcon sx={{ fontSize: 12 }} />
						<Typography variant={'caption'}>
							{Intl.DateTimeFormat('en-US', {
								year: 'numeric',
								month: 'long',
							}).format(date)}
						</Typography>
					</MetadataItemStyled>
					<MetadataItemStyled>
						<TimerOutlinedIcon sx={{ fontSize: 12 }} />
						<Typography variant={'caption'}>{duration}</Typography>
					</MetadataItemStyled>
					<MetadataItemStyled>
						<DifficultyBadge difficulty={difficulty} />
						<Typography variant={'caption'}>{DIFFICULTY_BADGE[difficulty]}</Typography>
					</MetadataItemStyled>
				</MetadataStyled>
				<Box>
					<Typography variant={'h3'} textAlign={'left'} marginBottom={1}>
						{title}
					</Typography>
					<DescriptionStyled>{description}</DescriptionStyled>
				</Box>
				<DividerStyled />
				<AvatarGroupStyled>
					<AvatarStyled
						src={
							'https://uploads-ssl.webflow.com/64748b36fe25af55e0fc6752/655f5d838512900bc1a43dc5_calixte-de-tourris.jpeg'
						}
					/>
					<Box display={'flex'} flexDirection={'column'}>
						<Typography variant={'caption'}>Calixte de Touris</Typography>
						<Typography variant={'caption'} color={'text.secondary'}>
							Frontend Developer
						</Typography>
					</Box>
				</AvatarGroupStyled>
			</CardStyled>
		</Link>
	)
}
