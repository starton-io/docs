/*
| Developed by Starton
| Filename : Snippet
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { styled, Typography } from '@mui/material'
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
	width: 'fit-content',
}))

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
			<Typography textTransform="uppercase" minWidth={400} variant="h6">
				<Typography textTransform="uppercase" component="span" color="primary.main">
					const{' '}
				</Typography>
				<Typography textTransform="uppercase" component="span" color="text.primary">
					documentation ={' '}
				</Typography>
				<Typography textTransform="uppercase" component="span" color="warning.main">
					state("
				</Typography>
				<Typography textTransform="uppercase" component="span" color="text.primary">
					{lines[currentIndex]}
				</Typography>
				<Typography textTransform="uppercase" component="span" color="warning.main">
					")
				</Typography>
			</Typography>
		</SnippetStyled>
	)
}
