/*
| Developed by Starton
| Filename : lab.tsx
| Author : Calixte De Tourris (calixte@starton.io)
*/

import React from 'react'
import { Box } from '@mui/material'
import { CardTitle } from '@site/src/components/v2/CardTitle'
import { RocketLaunchOutlined } from '@mui/icons-material'
import { CardIndex } from '@site/src/components/v2/CardIndex'
import { TypographyLink } from '@site/src/components/v2/TypographyLink'
import { CardPost } from '@site/src/components/v2/CardPost'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
const Lab: React.FC = () => {
	return (
		<Box padding={4} display="flex" flexDirection="column" gap={3}>
			<CardTitle icon={<RocketLaunchOutlined />} href="https://www.google.com/" target="_blank">
				Hello, CardTitle!
			</CardTitle>
			<CardIndex
				href="https://www.google.com/"
				target="_blank"
				title="Wallets"
				description="Deploy a  contract on the blockchain. NFT, Tokens start here to explore web3 world"
			>
				<TypographyLink href="https://www.starton.io/" target="_blank">
					This is a link
				</TypographyLink>
			</CardIndex>
			<CardPost
				href="https://www.google.com/"
				target="_blank"
				title="Interact with a contract from code"
				date="March 20th 2023"
				labels={[{ label: 'Label' }, { label: 'Label 1' }, { label: 'Label 2' }]}
			/>
		</Box>
	)
}

export default Lab
