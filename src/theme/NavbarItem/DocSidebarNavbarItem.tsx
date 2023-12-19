/*
| Developed by Starton
| Filename : DocSidebarNavbarItem.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client'
import { useLayoutDocsSidebar } from '@docusaurus/theme-common/internal'
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem'
import type { Props } from '@theme/NavbarItem/DocSidebarNavbarItem'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DocSidebarNavbarItem: React.FC<Props> = ({ sidebarId, label, docsPluginId, ...props }) => {
	const { activeDoc } = useActiveDocContext(docsPluginId)
	const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link

	if (!sidebarLink) {
		throw new Error(`DocSidebarNavbarItem: Sidebar with ID "${sidebarId}" doesn't have anything to be linked to.`)
	}

	return (
		<DefaultNavbarItem
			exact
			{...props}
			isActive={() => activeDoc?.sidebar === sidebarId}
			label={label ?? sidebarLink.label}
			to={sidebarLink.path}
		/>
	)
}

export default DocSidebarNavbarItem
