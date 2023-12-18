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
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'
import clsx from 'clsx'

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
const Nav = styled(Box)<BoxProps>(() => ({
	position: 'sticky',
	flexGrow: 1,
	paddingTop: 66,
}))

const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }) => ({
	backgroundColor: theme.palette.background.paper2,
	borderBottom: `1px solid ${theme.palette.divider}`,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavbarLayout: React.FC<NavbarLayoutProps> = ({ children }) => {
	const {
		navbar: { hideOnScroll, style },
	} = useThemeConfig()
	const mobileSidebar = useNavbarMobileSidebar()
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

	return (
		<Nav
			component={'nav'}
			className={clsx(
				'navbar',
				'navbar--fixed-top',
				hideOnScroll && [styles.navbarHideable, !isNavbarVisible && styles.navbarHidden],
				{
					'navbar--dark': style === 'dark',
					'navbar--primary': style === 'primary',
					'navbar-sidebar--show': mobileSidebar.shown,
				},
			)}
			ref={navbarRef}
		>
			<AppBarStyled>
				<Toolbar>{children}</Toolbar>
			</AppBarStyled>
			<div role="presentation" className={'navbar-sidebar__backdrop'} onClick={mobileSidebar.toggle} />
			<NavbarMobileSidebar />
		</Nav>
	)
}

export default NavbarLayout
