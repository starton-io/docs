/*
| Developed by Starton
| Filename : TutorialCard.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Avatar, Card, CardProps, Divider, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import UpdateIcon from '@mui/icons-material/Update'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import Link from '@docusaurus/Link'
import {
	HomeTutorialDifficulty,
	TUTORIAL_DIFFICULTY,
	TutorialMetadata,
} from '@site/plugins/starton-tutorial-plugin/types'
import { StartonUtils } from '@site/src/utils/starton.utils'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TutorialCardProps extends TutorialMetadata {}

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
	height: '100%',
	gap: theme.spacing(3),
	padding: theme.spacing(3),
	borderRadius: 0,
	backgroundColor: 'transparent',

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

const AvatarStyled = styled(Avatar)(() => ({
	width: 24,
	height: 24,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const TutorialCard: React.FC<TutorialCardProps> = ({
	link,
	title,
	date,
	difficulty,
	readingTime,
	description,
	authors,
}) => {
	return (
		<Link to={link} aria-description={title}>
			<CardStyled>
				<MetadataStyled>
					<MetadataItemStyled>
						<UpdateIcon sx={{ fontSize: 12 }} />
						<Typography variant={'caption'}>
							{Intl.DateTimeFormat('en-US', {
								year: 'numeric',
								month: 'long',
							}).format(new Date(date))}
						</Typography>
					</MetadataItemStyled>
					<MetadataItemStyled>
						<TimerOutlinedIcon sx={{ fontSize: 12 }} />
						<Typography variant={'caption'}>{Math.ceil(Number(readingTime))} min</Typography>
					</MetadataItemStyled>
					<MetadataItemStyled>
						<DifficultyBadge difficulty={difficulty} />
						<Typography variant={'caption'}>{TUTORIAL_DIFFICULTY[difficulty]}</Typography>
					</MetadataItemStyled>
				</MetadataStyled>
				<Box flex={1}>
					<Typography variant={'h3'} textAlign={'left'} marginBottom={1}>
						{title}
					</Typography>
					{/* Excerpt description with 144 characters maximum without break words */}
					<DescriptionStyled>{StartonUtils.excerptFromString(description, 132)}</DescriptionStyled>
				</Box>
				<DividerStyled />
				{authors.map((author, index) => (
					<AvatarGroupStyled key={index}>
						<AvatarStyled src={author.imageURL} />
						<Box display={'flex'} flexDirection={'column'}>
							<Typography variant={'caption'}>{author.name}</Typography>
							<Typography variant={'caption'} color={'text.secondary'}>
								{author.title}
							</Typography>
						</Box>
					</AvatarGroupStyled>
				))}
			</CardStyled>
		</Link>
	)
}
