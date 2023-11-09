/*
| Developed by Starton
| Filename : HomeIndexes.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { styled, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { CardIndex } from '@site/src/components/commons/CardIndex'
import { TypographyLink } from '@site/src/components/commons/TypographyLink'
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
export function HomeIndexes() {
	return (
		<SectionContainer>
			<Grid container spacing={2} alignItems={'flex-start'}>
				{/* GETTING STARTED */}
				<Grid container spacing={3} item md={4}>
					<Grid item xs={12}>
						<SectionTitle>Getting started</SectionTitle>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="/docs/tutorials/deploy-first-smart-contract"
							title="DEPLOYING YOUR FIRST SMART CONTRACT"
							description="Start by deploying a smart contract from Code"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/SmartContract/operation/SmartContractCreateFromTemplate">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="/docs/tutorials/storing-files-on-IPFS"
							title="STORING YOUR FIRST FILE ON IPFS"
							description="Upload content on a distributed storage network from Code"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/Ipfs/operation/IpfsFileCreate">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="/docs/tutorials/monitoring-blockchain-activity"
							title="MONITORING BLOCKCHAIN ACTIVITY"
							description="Create your first watcher to monitor events from Code"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/watcher/operation/WatcherCreateOne">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
				</Grid>

				{/* RELAYER */}
				<Grid container spacing={3} item md={4}>
					<Grid item xs={12}>
						<SectionTitle>Relayer</SectionTitle>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/wallet/about-wallets"
							title="WALLETS"
							description="Create or connect a wallet to sign transactions from API and our web application"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/Kms">API ref.</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/transactions/understanding-the-relayer"
							title="TRANSACTIONS"
							description="Create and manage transactions from API and our web application"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/Transaction/operation/TransactionCreate">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/Smart-contract/understanding-smart-contracts"
							title="SMART CONTRACT"
							description="Deploy and interact with smart contracts from API and our web application"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/SmartContract">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
				</Grid>

				{/* MONITOR */}
				<Grid container spacing={3} item md={4}>
					<Grid item xs={12}>
						<SectionTitle>Monitor</SectionTitle>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/watcher/understanding-watchers"
							title="WATCHERS"
							description="Create a watcher to monitor blockchain addresses and events"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/Watcher">API ref.</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/watcher/webhooks"
							title="WEBHOOKS"
							description="Create Webhooks triggered by events for your watcher"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/Webhook">API ref.</TypographyLink>
						</CardIndex>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/watcher/confirmation-blocks"
							title="CONFIRMATION BLOCKS"
							description="Learn confirmations blocks and default value per network"
						/>
					</Grid>
					<Grid item xs={12}>
						<CardIndex
							href="https://docs.starton.com/docs/watcher/watcher-state-and-status"
							title="WATCHER STATES & STATUTS"
							description="Understand what's happening to your watcher"
						>
							<TypographyLink href="https://docs.starton.com/intro#tag/watcher/operation/WatcherGetOne">
								API ref.
							</TypographyLink>
						</CardIndex>
					</Grid>
				</Grid>
			</Grid>
		</SectionContainer>
	)
}
