/*
| Developed by Starton
| Filename : DocsEndpoints.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import {
	CardContentProps,
	CardHeader,
	CardHeaderProps,
	CardProps,
	styled,
	Theme,
	Typography,
	TypographyProps,
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type EndpointMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
export interface DocsEndpointItem {
	link: string
}
export interface DocsEndpointsProps {
	endpoints: Array<DocsEndpointItem>
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: 0,
	width: '100%',
}))

const CardHeaderStyled = styled(CardHeader)<CardHeaderProps>(({ theme }) => ({
	borderBottom: `1px solid ${theme.palette.divider}`,
	color: theme.palette.text.secondary,
	fontFamily: 'Inter',
	fontSize: 14,
	fontWeight: 500,
	lineHeight: '120%',
	letterSpacing: '1.328px',
	textTransform: 'uppercase',
}))

const CardContentStyled = styled(CardContent)<CardContentProps>(({ theme }) => ({
	padding: theme.spacing(2),

	'&:last-child': {
		paddingBottom: theme.spacing(2),
	},
}))

const EndpointLink = styled(Link)(({ theme }) => ({
	color: theme.palette.text.primary,
	textDecoration: 'none',
	transition: 'all 0.2s ease-in-out',

	'&:hover': {
		color: theme.palette.primary.main,
	},
}))

const Method = styled(Typography, {
	shouldForwardProp: (prop) => prop !== 'method',
})<TypographyProps & { method: EndpointMethod }>(({ theme, method }) => {
	const colors = {
		GET: theme.palette.info.main,
		POST: theme.palette.success.main,
		PUT: theme.palette.warning.main,
		PATCH: theme.palette.warning.main,
		DELETE: theme.palette.error.main,
	}

	return {
		fontWeight: theme.typography.fontWeightBold,
		color: colors[method],
		width: 60,
	}
})

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const DocsEndpoints: React.FC<DocsEndpointsProps> = (props) => {
	return (
		<CardStyled>
			<CardHeaderStyled title={'Endpoints'} />
			<CardContentStyled>
				<Box display={'flex'} flexDirection={'column'} gap={0.5}>
					{props.endpoints.map((endpoint, index) => {
						const methodMatch = endpoint.link.match(/\[([a-z]+)\]/i)
						const method = methodMatch ? methodMatch[1].toUpperCase() : null
						const pathIndex = methodMatch
							? endpoint.link.indexOf(methodMatch[0]) + methodMatch[0].length
							: 0
						const path = `/${endpoint.link.substring(pathIndex).replace(/^\//, '')}`

						return (
							<EndpointLink to={endpoint.link} key={index}>
								<Box key={index} display={'flex'} flexDirection={'row'} gap={2}>
									<Method variant={'body1'} method={method as EndpointMethod}>
										{method}
									</Method>
									<Typography variant={'body1'}>{path}</Typography>
								</Box>
							</EndpointLink>
						)
					})}
				</Box>
			</CardContentStyled>
		</CardStyled>
	)
}
