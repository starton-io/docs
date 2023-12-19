/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import ComponentTypes from '@theme/NavbarItem/ComponentTypes'
import type { NavbarItemType, Props } from '@theme/NavbarItem'

/*
|--------------------------------------------------------------------------
| Utils methods
|--------------------------------------------------------------------------
*/
function normalizeComponentType(type: NavbarItemType, props: object) {
	// Backward compatibility: navbar item with no type set
	// but containing dropdown items should use the type "dropdown"
	if (!type || type === 'default') {
		return 'items' in props ? 'dropdown' : 'default'
	}
	return type
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const NavbarItem: React.FC<Props> = ({ type, ...props }) => {
	const componentType = normalizeComponentType(type, props)
	const NavbarItemComponent = ComponentTypes[componentType]

	if (!NavbarItemComponent) {
		throw new Error(`No NavbarItem component found for type "${type}".`)
	}

	return <NavbarItemComponent {...(props as any)} />
}

export default NavbarItem
