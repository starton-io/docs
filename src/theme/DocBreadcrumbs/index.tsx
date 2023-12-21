/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useSidebarBreadcrumbs, useHomePageRoute } from '@docusaurus/theme-common/internal'
import Link from '@docusaurus/Link'
import { Breadcrumbs, LinkProps, styled } from '@mui/material'
import { translate } from '@docusaurus/Translate'
import { ArrowForwardIosOutlined } from '@mui/icons-material'
import { StartonUtils } from '@site/src/utils/starton.utils'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface DocBreadcrumbsProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const BreadcrumbsStyled = styled(Breadcrumbs)(({ theme }) => ({
	marginBottom: theme.spacing(4),
}))

const Separator = styled(ArrowForwardIosOutlined)(({ theme }) => ({
	color: theme.palette.text.secondary,
	fontSize: 16,
}))

const BreadcrumbsLink = styled(Link, {
	shouldForwardProp: (prop) => prop !== 'isLast',
})<LinkProps & { isLast?: boolean }>(({ theme, isLast }) => ({
	color: isLast ? theme.palette.text.primary : theme.palette.text.secondary,
	fontFamily: 'Inter',
	fontSize: 12,
	fontWeight: 400,
	lineHeight: '130%',
	letterSpacing: '1.328px',
	textDecoration: 'none',

	'&:hover': {
		color: isLast ? theme.palette.text.primary : theme.palette.primary.main,
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DocBreadcrumbs: React.FC<DocBreadcrumbsProps> = () => {
	const breadcrumbs = useSidebarBreadcrumbs()
	const homePageRoute = useHomePageRoute()

	if (!breadcrumbs) return null

	return (
		<BreadcrumbsStyled
			aria-label={translate({
				id: 'theme.docs.breadcrumbs.navAriaLabel',
				message: 'Breadcrumbs',
				description: 'The ARIA label for the breadcrumbs',
			})}
			separator={<Separator />}
		>
			{homePageRoute && (
				<BreadcrumbsLink
					key={1}
					href={Array.isArray(homePageRoute.path) ? homePageRoute.path[0] : homePageRoute.path}
				>
					Home
				</BreadcrumbsLink>
			)}
			{breadcrumbs.map((item, idx) => {
				const isLast = idx === breadcrumbs.length - 1
				const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href

				return (
					<BreadcrumbsLink key={idx} href={!isLast ? href : undefined} isLast={isLast}>
						{StartonUtils.toCapitalize(item.label)}
					</BreadcrumbsLink>
				)
			})}
		</BreadcrumbsStyled>
	)
}

export default DocBreadcrumbs
