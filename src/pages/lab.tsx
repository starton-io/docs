/*
| Developed by Starton
| Filename : lab.tsx
| Author : Calixte De Tourris (calixte@starton.io)
*/

import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { CardTitle } from '@site/src/components/v2/CardTitle'
import { RocketLaunchOutlined } from '@mui/icons-material'
import { CardIndex } from '@site/src/components/v2/CardIndex'
import { TypographyLink } from '@site/src/components/v2/TypographyLink'
import { CardPost } from '@site/src/components/v2/CardPost'
import { Link } from '@site/src/components/v2/Link'
import {
	StartonFooter,
	StartonFooterBody,
	StartonFooterHead,
	StartonFooterLinkList,
} from '@site/src/components/v2/StartonFooter'
import { StartonButton } from '@site/src/components/v2/Button'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
const Lab: React.FC = () => {
	const theme = useTheme()

	return (
		<Box display="flex" flexDirection="column" gap={3}>
			<Box padding={3} display="flex" flexDirection="column" gap={3}>
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
				<Link href="https://www.google.com/" target="_blank">
					Documentation
				</Link>
				<Link href="https://www.google.com/" target="_blank" variant="reverse">
					Documentation
				</Link>
			</Box>
			<StartonFooter>
				<StartonFooterHead>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
					<StartonButton size="large" color="reverse" variant="outlined" startIcon={<RocketLaunchOutlined />}>
						Button
					</StartonButton>
				</StartonFooterHead>
				<StartonFooterBody>
					<StartonFooterLinkList>
						<Typography
							variant="subtitle2"
							color={theme.palette.background.default}
							textTransform="uppercase"
						>
							Documentation
						</Typography>
						<Link href="https://www.google.com/" target="_blank" variant="reverse">
							Documentation
						</Link>
						<Link href="https://www.google.com/" target="_blank" variant="reverse">
							Documentation
						</Link>
						<Link href="https://www.google.com/" target="_blank" variant="reverse">
							Documentation
						</Link>
					</StartonFooterLinkList>
					<StartonFooterLinkList>
						<Typography
							variant="subtitle2"
							color={theme.palette.background.default}
							textTransform="uppercase"
						>
							Other links
						</Typography>
						<Link href="https://www.google.com/" target="_blank" variant="reverse">
							Documentation
						</Link>
						<Link href="https://www.google.com/" target="_blank" variant="reverse">
							Documentation
						</Link>
					</StartonFooterLinkList>
				</StartonFooterBody>
			</StartonFooter>
		</Box>
	)
}

export default Lab
