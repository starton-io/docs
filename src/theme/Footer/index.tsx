/*
| Developed by Starton
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
import { Box, styled, Typography } from '@mui/material'
import { Link } from '@site/src/components/commons/Link'
import { default as DocusaurusLink } from '@docusaurus/Link'
import { SocialDiscord, SocialLinkedin, SocialTwitter, Starton } from '@starton/react-ui-iconography'
import { PageContainer } from '@site/src/components/commons/PageContainer'

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonFooterStyled = styled(StartonFooter)(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.divider}`,
}))

const FooterCopyright = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 0, 2),

	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(0, 0, 2),
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Footer() {
	return (
		<StartonFooterStyled>
			<PageContainer sx={{ paddingX: 0 }}>
				<StartonFooterHead>
					<DocusaurusLink
						to={'https://www.starton.com'}
						target={'_blank'}
						style={{ width: 'fit-content' }}
						rel="noreferrer"
					>
						<StartonButton
							size="large"
							color="primary"
							variant="outlined"
							startIcon={<Starton fill={'currentColor'} />}
						>
							Website
						</StartonButton>
					</DocusaurusLink>
					<DocusaurusLink
						to={'https://twitter.com/starton_com'}
						target={'_blank'}
						style={{ width: 'fit-content' }}
						rel="noreferrer"
					>
						<StartonButton
							size="large"
							color="primary"
							variant="outlined"
							startIcon={<SocialTwitter fill={'currentColor'} />}
						>
							Twitter
						</StartonButton>
					</DocusaurusLink>
					<DocusaurusLink
						to={'https://discord.starton.com/'}
						target={'_blank'}
						style={{ width: 'fit-content' }}
						rel="noreferrer"
					>
						<StartonButton
							size="large"
							color="primary"
							variant="outlined"
							startIcon={<SocialDiscord fill={'currentColor'} />}
						>
							Discord
						</StartonButton>
					</DocusaurusLink>
					<DocusaurusLink
						to={'https://www.linkedin.com/company/starton-io/'}
						target={'_blank'}
						style={{ width: 'fit-content' }}
						rel="noreferrer"
					>
						<StartonButton
							size="large"
							color="primary"
							variant="outlined"
							startIcon={<SocialLinkedin fill={'currentColor'} />}
						>
							LinkedIn
						</StartonButton>
					</DocusaurusLink>
					<DocusaurusLink
						to={'https://auth.starton.com/login'}
						target={'_blank'}
						style={{ width: 'fit-content' }}
						rel="noreferrer"
					>
						<StartonButton
							size="large"
							color="primary"
							variant="contained"
							startIcon={<Starton fill={'black'} />}
						>
							Login
						</StartonButton>
					</DocusaurusLink>
				</StartonFooterHead>
				<StartonFooterBody>
					<StartonFooterLinkList>
						<Typography variant="overline" color={'text.secondary'} marginBottom={3}>
							Documentation
						</Typography>
						<Link href="/docs/overview" variant="primary">
							Documentation
						</Link>
						<Link href="/api-reference" variant="primary">
							API
						</Link>
						<Link href="/tutorials" variant="primary">
							Tutorials
						</Link>
						<Link href="/guides/web3auth" variant="primary">
							Guide
						</Link>
					</StartonFooterLinkList>
					<StartonFooterLinkList>
						<Typography variant="overline" color={'text.secondary'} marginBottom={3}>
							Other links
						</Typography>
						<Link href="/docs/release-notes" variant="primary">
							Release note
						</Link>
						<Link href="https://github.com/starton-io" target="_blank" variant="primary">
							GitHub
						</Link>
					</StartonFooterLinkList>
				</StartonFooterBody>
				<FooterCopyright>
					<Typography
						color={'secondary.light'}
						variant={'body2'}
						textAlign={{ xs: 'center', md: 'left' }}
					>{`Copyright © ${new Date().getFullYear()} Starton Documentation, Inc. Built with Docusaurus.`}</Typography>
				</FooterCopyright>
			</PageContainer>
		</StartonFooterStyled>
	)
}
export default React.memo(Footer)
