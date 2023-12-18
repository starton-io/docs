/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { IconButton, IconButtonProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface MobileSidebarProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const MenuIcon = styled(IconButton)<IconButtonProps>(({ theme, hidden }) => ({
	color: theme.palette.text.primary,
	marginRight: theme.spacing(1),

	...(!hidden && {
		display: 'none',
	}),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const MobileSidebar: React.FC<MobileSidebarProps> = () => {
	const { toggle, shown, shouldRender } = useNavbarMobileSidebar()

	return (
		<MenuIcon
			onClick={toggle}
			aria-label={translate({
				id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
				message: 'Toggle navigation bar',
				description: 'The ARIA label for hamburger menu button of mobile navigation',
			})}
			hidden={shouldRender}
		>
			<MenuRoundedIcon />
		</MenuIcon>
	)
}

export default MobileSidebar
