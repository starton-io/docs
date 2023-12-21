/*
| Developed by Starton
| Filename : DocsSectionLinks.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Grid, { GridProps } from '@mui/material/Grid'
import { DocsGradientCard, DocsGradientCardProps } from '@site/src/components/pages/docs/common'
import { VideoIframe, VideoIframeProps } from '@site/src/components/commons/VideoIframe'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DocsSectionLinksProps {
	links: Array<DocsGradientCardProps>
	video?: VideoIframeProps
	hideBottomDivider?: boolean
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const Container = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'hideBottomDivider',
})<GridProps & Pick<DocsSectionLinksProps, 'hideBottomDivider'>>(({ theme, hideBottomDivider }) => ({
	...(!hideBottomDivider && {
		paddingBottom: theme.spacing(10),
		marginBottom: theme.spacing(10),
		borderBottom: `1px solid ${theme.palette.divider}`,
	}),
}))

const VideoIframeContainer = styled(Grid)<GridProps>(() => ({
	width: '100%',
	aspectRatio: '16/9',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const DocsSectionLinks: React.FC<DocsSectionLinksProps> = (props) => {
	return (
		<Container display={'flex'} flexDirection={{ xs: 'column', lg: 'row' }} gap={3}>
			<Box display={'flex'} flexDirection={'column'} gap={3} minWidth={'50%'}>
				{props.links.map((link, index) => (
					<DocsGradientCard key={index} {...link} />
				))}
			</Box>
			{props.video ? (
				<VideoIframeContainer item xs={12} md={6}>
					<VideoIframe {...props.video} />
				</VideoIframeContainer>
			) : null}
		</Container>
	)
}
