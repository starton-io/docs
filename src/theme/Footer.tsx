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
import { Box, styled, Typography, useTheme } from '@mui/material'
import { Link } from '@site/src/components/commons/Link'
import { SocialDiscord, SocialLinkedin, SocialTwitter, Starton } from '@starton/react-ui-iconography'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const FooterCopyright = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 3, 2),
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(0, 9, 2),
	},
}))

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
				<a href={'https://www.starton.com'} target={'_blank'} style={{ width: 'fit-content' }} rel="noreferrer">
					<StartonButton
						size="large"
						color="reverse"
						variant="outlined"
						startIcon={<Starton fill={'currentColor'} />}
					>
						Website
					</StartonButton>
				</a>
				<a
					href={'https://twitter.com/starton_com'}
					target={'_blank'}
					style={{ width: 'fit-content' }}
					rel="noreferrer"
				>
					<StartonButton
						size="large"
						color="reverse"
						variant="outlined"
						startIcon={<SocialTwitter fill={'currentColor'} />}
					>
						Twitter
					</StartonButton>
				</a>
				<a
					href={'https://discord.starton.com/'}
					target={'_blank'}
					style={{ width: 'fit-content' }}
					rel="noreferrer"
				>
					<StartonButton
						size="large"
						color="reverse"
						variant="outlined"
						startIcon={<SocialDiscord fill={'currentColor'} />}
					>
						Discord
					</StartonButton>
				</a>
				<a
					href={'https://www.linkedin.com/company/starton-io/'}
					target={'_blank'}
					style={{ width: 'fit-content' }}
					rel="noreferrer"
				>
					<StartonButton
						size="large"
						color="reverse"
						variant="outlined"
						startIcon={<SocialLinkedin fill={'currentColor'} />}
					>
						LinkedIn
					</StartonButton>
				</a>
				<a
					href={'https://auth.starton.com/login'}
					target={'_blank'}
					style={{ width: 'fit-content' }}
					rel="noreferrer"
				>
					<StartonButton size="large" color="reverse" variant="contained" startIcon={<Starton />}>
						Login
					</StartonButton>
				</a>
			</StartonFooterHead>
			<StartonFooterBody>
				<StartonFooterLinkList>
					<Typography variant="subtitle2" color={theme.palette.background.default} textTransform="uppercase">
						Documentation
					</Typography>
					<Link href="/docs/overview" variant="reverse">
						Documentation
					</Link>
					<Link href="/intro" variant="reverse">
						API
					</Link>
					<Link href="/tutorials" variant="reverse">
						Tutorials
					</Link>
					<Link href="/blog" variant="reverse">
						Guide
					</Link>
				</StartonFooterLinkList>
				<StartonFooterLinkList>
					<Typography variant="subtitle2" color={theme.palette.background.default} textTransform="uppercase">
						Other links
					</Typography>
					<Link href="/docs/release-notes" variant="reverse">
						Release note
					</Link>
					<Link href="https://github.com/starton-io" target="_blank" variant="reverse">
						GitHub
					</Link>
				</StartonFooterLinkList>
			</StartonFooterBody>
			<FooterCopyright>
				<Typography
					color={'secondary.main'}
					variant={'body1'}
					textAlign={{ xs: 'center', md: 'left' }}
				>{`Copyright © ${new Date().getFullYear()} Starton Documentation, Inc. Built with Docusaurus.`}</Typography>
			</FooterCopyright>
		</StartonFooter>
	)
}
export default React.memo(Footer)
