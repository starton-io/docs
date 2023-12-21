/*
| Developed by Starton
| Filename : DefaultNavbarItem.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import clsx from 'clsx'
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink'
import type { DesktopOrMobileNavBarItemProps, Props } from '@theme/NavbarItem/DefaultNavbarItem'

/*
|--------------------------------------------------------------------------
| Sub component
|--------------------------------------------------------------------------
*/
const DefaultNavbarItemDesktop: React.FC<DesktopOrMobileNavBarItemProps> = ({
	className,
	isDropdownItem = false,
	...props
}) => {
	const element = (
		<NavbarNavLink
			className={clsx(isDropdownItem ? 'dropdown__link' : 'navbar__item navbar__link', className)}
			isDropdownLink={isDropdownItem}
			{...props}
		/>
	)

	if (isDropdownItem) {
		return <li>{element}</li>
	}

	return element
}

const DefaultNavbarItemMobile: React.FC<DesktopOrMobileNavBarItemProps> = ({ className, isDropdownItem, ...props }) => {
	return (
		<li className="menu__list-item">
			<NavbarNavLink className={clsx('menu__link', className)} {...props} />
		</li>
	)
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DefaultNavbarItem: React.FC<Props> = ({
	mobile = false,
	position, // Need to destructure position from props so that it doesn't get passed on.
	...props
}) => {
	const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop

	return (
		<Comp
			{...props}
			activeClassName={props.activeClassName ?? (mobile ? 'menu__link--active' : 'navbar__link--active')}
		/>
	)
}

export default DefaultNavbarItem
