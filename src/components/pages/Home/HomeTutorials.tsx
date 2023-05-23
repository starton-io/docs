/*
| Developed by Dirupt
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
	return (
		<SectionContainer>
			<Grid container spacing={3} direction={'column'}>
				<Grid item xs={12}>
					<SectionTitle>Last tutorials</SectionTitle>
				</Grid>

				<Grid container spacing={2} item xs={12}>
					<Grid item xs={12} md={4}>
						<CardPost
							href="https://docs.starton.com/docs/Tutorials/ai-nft-collection"
							title="Generating your NFT collection with AI"
							date="April 2023"
							labels={[{ label: 'NFT' }, { label: 'AI' }, { label: 'CODE' }, { label: 'ADVANCED' }]}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<CardPost
							href="https://docs.starton.com/docs/Tutorials/starton-web3auth"
							title="Creating metatransactions with Web3Auth and Starton"
							date="March 2023"
							labels={[{ label: 'AUTH' }, { label: 'WALLET' }, { label: 'CODE' }, { label: 'ADVANCED' }]}
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<CardPost
							href="https://docs.starton.com/docs/Tutorials/track-wallet-activity"
							title="Track a wallet activity on a GoogleSheets using Starton and Zapier"
							date="December 2022"
							labels={[
								{ label: 'ZAPIER' },
								{ label: 'MONITOR' },
								{ label: 'INTERFACE' },
								{ label: 'BEGINNER' },
							]}
						/>
					</Grid>
				</Grid>

				<Grid item xs={12} textAlign={'center'}>
					<TypographyLink href="https://docs.starton.com/docs/Tutorials" target="_blank">
						+ See more
					</TypographyLink>
				</Grid>
			</Grid>
		</SectionContainer>
	)
}
