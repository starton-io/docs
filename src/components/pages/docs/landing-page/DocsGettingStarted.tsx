/*
| Developed by Starton
| Filename : DocsGettingStarted.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { CardLink, CardLinkProps } from '@site/src/components/commons/CardLink'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, Typography } from '@mui/material'
import { DocsEndpoints, DocsEndpointsProps } from '@site/src/components/pages/docs/common/DocsEndpoints'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DocsGettingStartedProps extends Partial<DocsEndpointsProps> {
	links: Array<CardLinkProps>
	hideBottomDivider?: boolean
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const Container = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'hideBottomDivider',
})<GridProps & Pick<DocsGettingStartedProps, 'hideBottomDivider'>>(({ theme, hideBottomDivider }) => ({
	...(!hideBottomDivider && {
		paddingBottom: theme.spacing(10),
		marginBottom: theme.spacing(10),
		borderBottom: `1px solid ${theme.palette.divider}`,
	}),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const DocsGettingStarted: React.FC<DocsGettingStartedProps> = (props) => {
	return (
		<Box display={'flex'} flexDirection={'column'} gap={3}>
			<Typography variant={'h3'} component={'h2'}>
				Getting started
			</Typography>
			<Container display={'flex'} flexDirection={{ xs: 'column', lg: 'row' }} gap={3}>
				<Box display={'flex'} flexDirection={'column'} gap={3} minWidth={'50%'}>
					{props.links.map((link, index) => (
						<CardLink {...link} />
					))}
				</Box>
				{props.endpoints ? <DocsEndpoints endpoints={props.endpoints} /> : null}
			</Container>
		</Box>
	)
}
