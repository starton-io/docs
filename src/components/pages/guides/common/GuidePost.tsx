/*
| Developed by Starton
| Filename : GuidePost.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Avatar, BoxProps, styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Link, { Props as LinkProps } from '@docusaurus/Link'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { m } from 'framer-motion'
import UpdateIcon from '@mui/icons-material/Update'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import { Author } from '@docusaurus/plugin-content-blog'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface GuidePostProps {
	permalink: string
	title: string
	date: string
	readingTime: number
	authors: Array<Author>
	imageUrl: string
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const PostContainer = styled(Box)<BoxProps & LinkProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: theme.spacing(3),
	padding: theme.spacing(3, 0),
	borderRadius: 0,
	backgroundColor: 'transparent',
	cursor: 'pointer',

	'&:not(:last-child)': {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},

	'&:hover': {
		backgroundColor: theme.palette.background.paper,
	},

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(3),
	},
}))

const AvatarStyled = styled(Avatar)(() => ({
	width: 24,
	height: 24,
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

const ImageStyled = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'imageUrl',
})<BoxProps & { imageUrl: string }>(({ theme, imageUrl }) => ({
	width: '100%',
	height: 200,
	backgroundImage: `url(${imageUrl ?? '/img/guides/default-image.png'})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center center',

	[theme.breakpoints.up('md')]: {
		flex: 1,
		maxWidth: 200,
		width: 'auto',
		height: 'auto',
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const GuidePost: React.FC<GuidePostProps> = (props) => {
	const author = React.useMemo(() => {
		return props.authors[0]
	}, [props.authors])

	return (
		<PostContainer key={props.permalink} component={Link} to={props.permalink}>
			<MotionViewport width={'100%'}>
				<Box
					component={m.div}
					variants={variantFade().inLeft}
					display={'flex'}
					flexDirection={{
						xs: 'column-reverse',
						md: 'row',
					}}
					justifyContent={'space-between'}
					gap={3}
					width={'100%'}
				>
					<Box
						component={m.div}
						variants={variantFade().inLeft}
						display={'flex'}
						flexDirection={'column'}
						gap={3}
					>
						{author ? (
							<Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={2}>
								<AvatarStyled src={author.imageURL} />
								<Typography variant={'body2'} color={'text.primary'}>
									{author.name}
								</Typography>
								<Typography variant={'body2'} color={'text.secondary'}>
									{author.title}
								</Typography>
							</Box>
						) : null}
						<Typography variant={'h4'} color={'text.primary'}>
							{props.title}
						</Typography>
						<MetadataStyled>
							<MetadataItemStyled>
								<UpdateIcon sx={{ fontSize: 22 }} />
								<Typography variant={'body2'}>
									{Intl.DateTimeFormat('en-US', {
										year: 'numeric',
										month: 'long',
									}).format(new Date(props.date))}
								</Typography>
							</MetadataItemStyled>
							<MetadataItemStyled>
								<TimerOutlinedIcon sx={{ fontSize: 22 }} />
								<Typography variant={'body2'}>{Math.ceil(Number(props.readingTime))} min</Typography>
							</MetadataItemStyled>
						</MetadataStyled>
					</Box>
					<ImageStyled imageUrl={props.imageUrl} />
				</Box>
			</MotionViewport>
		</PostContainer>
	)
}
