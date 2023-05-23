/*
| Developed by Dirupt
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import { CardPost, CardPostProps } from '@site/src/components/commons/CardPost'
import { Grid } from '@mui/material'
import { SectionContainer } from '@site/src/components/commons/SectionContainer'

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
export const TUTORIALS_LIST: Array<CardPostProps> = [
	{
		title: 'Generating your NFT collection with AI',
		date: 'April 2023',
		labels: [{ label: 'NFT' }, { label: 'AI' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '#',
	},
	{
		title: 'Creating metatransactions with Web3Auth and Starton',
		date: 'March 2023',
		labels: [{ label: 'AUTH' }, { label: 'WALLET' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '#',
	},
	{
		title: 'Interact with a contract from code',
		date: 'February 2023',
		labels: [{ label: 'CODE' }, { label: 'INTERACT' }],
		href: '#',
	},
	{
		title: 'How to sell an NFT collection in an auction',
		date: 'February 2023',
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'AUCTION' }, { label: 'SALE' }],
		href: '#',
	},
	{
		title: 'How to create a meta transaction',
		date: 'February 2023',
		labels: [{ label: 'CODE' }, { label: 'METATRANSACTION' }, { label: 'ADVANCED' }],
		href: '#',
	},
	{
		title: 'How to sell NFTs to a list of approved addresses',
		date: 'February 2023',
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'WHITELIST' }, { label: 'SALE' }],
		href: '#',
	},
	{
		title: 'Track a wallet activity on a GoogleSheets using Starton and Zapier',
		date: 'February 2023',
		labels: [{ label: 'ZAPIER' }, { label: 'MONITOR' }, { label: 'INTERFACE' }, { label: 'BEGINNER' }],
		href: '#',
	},
	{
		title: 'How to create your own limited supply token (ERC20)',
		date: 'January 2022',
		labels: [{ label: 'CODE' }, { label: 'INTERFACE' }, { label: 'TOKEN' }, { label: 'FIXED SUPPLY' }],
		href: '#',
	},
	{
		title: 'How to create your own cryptocurrency (ERC20)',
		date: 'January 2022',
		labels: [{ label: 'CODE' }, { label: 'INTERFACE' }, { label: 'TOKEN' }, { label: 'MINTABLE' }],
		href: '#',
	},
	{
		title: 'How to create to one-to-many NFT collection',
		date: 'January 2023',
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '#',
	},
	{
		title: 'How to sell an NFT in an auction',
		date: 'January 2023',
		labels: [{ label: 'INTERFACE' }, { label: 'NFT' }, { label: 'SALE' }, { label: 'AUCTION' }],
		href: '#',
	},
	{
		title: 'Deploy your own contract from bytecode',
		date: 'November 2022',
		labels: [{ label: 'CODE' }, { label: 'DEPLOY' }],
		href: '#',
	},
	{
		title: 'Deploy your NFTs on blockchain with Starton',
		date: 'November 2022',
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '#',
	},
	{
		title: "How to ensure monitor's webhooks are from Starton",
		date: 'November 2022',
		labels: [{ label: 'CODE' }, { label: 'MONITOR' }, { label: 'VERIFY' }],
		href: '#',
	},
	{
		title: 'Deploy your NFTs on BNB smart chain with Starton',
		date: 'November 2022',
		labels: [{ label: 'INTERFACE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '#',
	},
	{
		title: "How to change the smart contracts' ownership",
		date: 'November 2022',
		labels: [{ label: 'INTERFACE' }, { label: 'ROLES' }, { label: 'SMART CONTRACT' }],
		href: '#',
	},
]

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Home() {
	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			{/* HERO BANNER */}
			<PageHeader
				title={
					<React.Fragment>
						Starton <span>Tutorials</span>
					</React.Fragment>
				}
				description={'Start building using step-by-step tutorials!'}
			/>

			{/* LISTS */}
			<SectionContainer>
				<Grid container spacing={2} item xs={12}>
					{TUTORIALS_LIST.map((tutorial, index) => (
						<Grid key={index} item xs={12} md={4}>
							<CardPost {...tutorial} />
						</Grid>
					))}
				</Grid>
			</SectionContainer>
		</Layout>
	)
}

export default Home
