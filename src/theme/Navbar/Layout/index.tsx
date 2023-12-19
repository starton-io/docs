/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { AppBar, AppBarProps, styled, Toolbar } from '@mui/material'
import type { Props } from '@theme/Navbar/Layout'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useHideableNavbar } from '@docusaurus/theme-common/internal'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarLayoutProps extends Props {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }) => ({
	backgroundColor: theme.palette.background.paper2,
	borderBottom: `1px solid ${theme.palette.divider}`,
	position: 'sticky',
	flexGrow: 1,
	zIndex: theme.zIndex.drawer + 1,
	// TODO: Remove this when we find a solution for deleting the navbar class.
	paddingRight: '0px !important',
	width: '100vw',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
	const {
		navbar: { hideOnScroll },
	} = useThemeConfig()
	const { navbarRef } = useHideableNavbar(hideOnScroll)

	return (
		<React.Fragment>
			<AppBarStyled component={'nav'} className={'navbar'} ref={navbarRef}>
				<Toolbar>{children}</Toolbar>
			</AppBarStyled>
			<NavbarMobileSidebar />
		</React.Fragment>
	)
}

export default NavbarLayout
