/*
| Developed by Starton
| Filename : Snippet
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Typography, TypographyProps } from '@mui/material'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SnippetProps {}

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const lines = ['awesome', 'useful', 'accessible'] as const

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const SnippetStyled = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: theme.palette.background.default,
	borderWidth: 1,
	borderStyle: 'solid',
	borderColor: theme.palette.divider,
	maxWidth: 400,
	width: '100%',
	minWidth: 'initial',
	[theme.breakpoints.up('md')]: {
		fontSize: theme.typography.h5.fontSize,
		minWidth: 400,
	},
}))

const SnippetTypography = styled((props) => <Typography component={'span'} {...props} />)<TypographyProps>(
	({ theme }) => ({
		...theme.typography.caption,
		textTransform: 'uppercase',
		fontSize: 12,
		[theme.breakpoints.up('md')]: {
			fontSize: theme.typography.h5.fontSize,
		},
	}),
)

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const Snippet: React.FC<SnippetProps> = () => {
	const [currentIndex, setCurrentIndex] = React.useState(0)

	React.useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevState) => (prevState + 1 >= lines.length ? 0 : prevState + 1))
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	// Render
	//--------------------------------------------------------------------------
	return (
		<SnippetStyled>
			<SnippetTypography>
				<SnippetTypography color="primary.main">const </SnippetTypography>
				<SnippetTypography color="text.primary">documentation = </SnippetTypography>
				<SnippetTypography color="warning.main">state("</SnippetTypography>
				<SnippetTypography color="text.primary">{lines[currentIndex]}</SnippetTypography>
				<SnippetTypography color="warning.main">")</SnippetTypography>
			</SnippetTypography>
		</SnippetStyled>
	)
}
