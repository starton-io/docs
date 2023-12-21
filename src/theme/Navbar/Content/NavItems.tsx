/*
| Developed by Starton
| Filename : NavItems.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { ErrorCauseBoundary } from '@docusaurus/theme-common'
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavItemsProps {
	items: Array<NavbarItemConfig>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const NavItems: React.FC<NavItemsProps> = ({ items }) => {
	return (
		<React.Fragment>
			{items.map((item, i) => (
				<ErrorCauseBoundary
					key={i}
					onError={(error) =>
						new Error(
							`A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify({ item, error }, null, 2)}`,
						)
					}
				>
					<NavbarItem {...item} />
				</ErrorCauseBoundary>
			))}
		</React.Fragment>
	)
}
