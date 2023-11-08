/*
| Developed by Starton
| Filename : HomeTutorials.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { Container, styled, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { CardIndex } from '@site/src/components/commons/CardIndex'
import { TypographyLink } from '@site/src/components/commons/TypographyLink'
import { CardPost } from '@site/src/components/commons/CardPost'
import { SectionContainer } from '@site/src/components/commons/SectionContainer'
import { TUTORIALS_LIST } from '@site/src/mock/tutorials.mock'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const SectionTitle = styled(Typography)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontWeight: 400,
	fontFamily: `"Inter", Arial, sans-serif`,
	fontSize: '16px',
	lineHeight: '18px',
	letterSpacing: '1.328px',
	textTransform: 'uppercase',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export function HomeTutorials() {
	const lastTutorials = React.useMemo(() => {
		return TUTORIALS_LIST.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 3)
	}, [])

	return (
		<SectionContainer>
			<Grid container spacing={3} direction={'column'}>
				<Grid item xs={12}>
					<SectionTitle>Last tutorials</SectionTitle>
				</Grid>

				<Grid container spacing={2} item xs={12}>
					{lastTutorials.map((tutorial, index) => (
						<Grid key={index} item xs={12} md={4}>
							<CardPost {...tutorial} />
						</Grid>
					))}
				</Grid>

				<Grid item xs={12} textAlign={'center'}>
					<TypographyLink href="/tutorials">+ See more</TypographyLink>
				</Grid>
			</Grid>
		</SectionContainer>
	)
}
