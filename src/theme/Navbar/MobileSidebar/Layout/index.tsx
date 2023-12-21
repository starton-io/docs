/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useNavbarMobileSidebar, useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal'
import { ButtonProps, Drawer, styled, Toolbar } from '@mui/material'
import { useThemeConfig } from '@docusaurus/theme-common'
import NavbarItem from '@theme/NavbarItem'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarMobileSidebarProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const MobileDrawer = styled(Drawer)(({ theme }) => ({
	width: '80vw',
	flexShrink: 0,

	'& .MuiDrawer-paper': {
		backgroundColor: theme.palette.background.paper2,
		width: '80vw',
		boxSizing: 'border-box',
	},
}))

const MobileDrawerContainer = styled(Box)(({ theme }) => ({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	height: `calc(100% - 60px)`,
}))

const BottomButton = styled(Button)<ButtonProps>(() => ({
	width: '100%',
	height: 48,
	minHeight: 48,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavbarMobileSidebar: React.FC<NavbarMobileSidebarProps> = () => {
	const secondaryMenu = useNavbarSecondaryMenu()
	const mobileSidebar = useNavbarMobileSidebar()
	const items = useThemeConfig().navbar.items
	const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0

	const container = window !== undefined ? () => window.document.body : undefined

	return (
		<MobileDrawer
			container={container}
			variant={'temporary'}
			open={mobileSidebar.shown}
			onClose={mobileSidebar.toggle}
			ModalProps={{ keepMounted: true }}
		>
			<Toolbar />
			<MobileDrawerContainer>
				{secondaryMenu.shown ? (
					<React.Fragment>
						{secondaryMenu.content}
						{!isPrimaryMenuEmpty ? (
							<BottomButton onClick={secondaryMenu.hide}>Back to main menu</BottomButton>
						) : null}
					</React.Fragment>
				) : (
					<ul className="menu__list">
						{items.map((item, i) => (
							// @ts-ignore
							<NavbarItem mobile {...item} onClick={mobileSidebar.toggle} key={i} />
						))}
					</ul>
				)}
			</MobileDrawerContainer>
		</MobileDrawer>
	)
}

export default NavbarMobileSidebar
