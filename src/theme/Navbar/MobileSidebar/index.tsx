/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useLockBodyScroll, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout'
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header'
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu'
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavarMobileSidebarProps {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavarMobileSidebar: React.FC<NavarMobileSidebarProps> = () => {
	const mobileSidebar = useNavbarMobileSidebar()
	useLockBodyScroll(mobileSidebar.shown)

	if (!mobileSidebar.shouldRender) {
		return null
	}

	return (
		<NavbarMobileSidebarLayout
			header={<NavbarMobileSidebarHeader />}
			primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
			secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
		/>
	)
}

export default NavarMobileSidebar
