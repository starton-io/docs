/*
| Developed by Dirupt
| Filename : Footer.js
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import {
	StartonFooter,
	StartonFooterBody,
	StartonFooterHead,
	StartonFooterLinkList,
} from '@site/src/components/commons/StartonFooter'
import { StartonButton } from '@site/src/components/commons/Button'
import { Typography, useTheme } from '@mui/material'
import { Link } from '@site/src/components/commons/Link'
import { SocialDiscord, SocialLinkedin, SocialTwitter, Starton } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Footer() {
	const theme = useTheme()

	return (
		<StartonFooter>
			<StartonFooterHead>
				<StartonButton
					size="large"
					color="reverse"
					variant="outlined"
					startIcon={<Starton fill={'currentColor'} />}
				>
					Website
				</StartonButton>
				<StartonButton
					size="large"
					color="reverse"
					variant="outlined"
					startIcon={<SocialTwitter fill={'currentColor'} />}
				>
					Twitter
				</StartonButton>
				<StartonButton
					size="large"
					color="reverse"
					variant="outlined"
					startIcon={<SocialDiscord fill={'currentColor'} />}
				>
					Discord
				</StartonButton>
				<StartonButton
					size="large"
					color="reverse"
					variant="outlined"
					startIcon={<SocialLinkedin fill={'currentColor'} />}
				>
					LinkedIn
				</StartonButton>
				<StartonButton size="large" color="reverse" variant="contained" startIcon={<Starton />}>
					Login
				</StartonButton>
			</StartonFooterHead>
			<StartonFooterBody>
				<StartonFooterLinkList>
					<Typography variant="subtitle2" color={theme.palette.background.default} textTransform="uppercase">
						Documentation
					</Typography>
					<Link href="https://docs.starton.com/docs/overview" variant="reverse">
						Documentation
					</Link>
					<Link href="https://docs.starton.com/intro" variant="reverse">
						API
					</Link>
					<Link href="https://docs.starton.com/docs/Tutorials/Home" variant="reverse">
						Tutorials
					</Link>
					<Link href="https://docs.starton.com/blog/web3auth" variant="reverse">
						Guide
					</Link>
				</StartonFooterLinkList>
				<StartonFooterLinkList>
					<Typography variant="subtitle2" color={theme.palette.background.default} textTransform="uppercase">
						Other links
					</Typography>
					<Link href="https://docs.starton.com/docs/release-notes" variant="reverse">
						Release note
					</Link>
					<Link href="https://github.com/starton-io" target="_blank" variant="reverse">
						GitHub
					</Link>
				</StartonFooterLinkList>
			</StartonFooterBody>
		</StartonFooter>
	)
}
export default React.memo(Footer)
