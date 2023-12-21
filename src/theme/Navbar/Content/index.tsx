/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { useThemeConfig } from '@docusaurus/theme-common'
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle'
import NavbarItem from '@theme/NavbarItem'
import Link from '@docusaurus/Link'
import Box from '@mui/material/Box'
import NavbarSearch from '@theme/Navbar/Search'
import SearchBar from '@theme/SearchBar'
import { StartonButton } from '@site/src/components/commons/Button'
import { Starton } from '@starton/react-ui-iconography'
import NavbarLogo from '@theme/Navbar/Logo'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarContentProps {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavbarContent: React.FC<NavbarContentProps> = () => {
	const mobileSidebar = useNavbarMobileSidebar()
	const items = useThemeConfig().navbar.items
	const [leftItems, rightItems] = splitNavbarItems(items)
	const searchBarItem = items.find((item) => item.type === 'search')

	return (
		<React.Fragment>
			{!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}

			<NavbarLogo />

			{leftItems.map((item, i) => (
				// @ts-ignore
				<NavbarItem {...item} key={i} />
			))}

			<Box sx={{ flexGrow: 1 }} />

			{rightItems.map((item, i) => (
				// @ts-ignore
				<NavbarItem {...item} key={i} />
			))}

			{!searchBarItem && (
				<NavbarSearch>
					<div
						style={{
							display: 'flex',
							gap: '12px',
						}}
					>
						<SearchBar />
					</div>
				</NavbarSearch>
			)}

			<Box
				display={{
					xs: 'none',
					lg: 'block',
				}}
			>
				<Link to={'https://auth.starton.com'} aria-description={'Login'} target={'_blank'}>
					<StartonButton variant={'outlined'} color={'primary'} startIcon={<Starton fill={'currentColor'} />}>
						Login
					</StartonButton>
				</Link>
			</Box>
		</React.Fragment>
	)
}

export default NavbarContent
