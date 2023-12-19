/*
| Developed by Starton
| Filename : HtmlNavbarItem.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import clsx from 'clsx'
import type { Props } from '@theme/NavbarItem/HtmlNavbarItem'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const HtmlNavbarItem: React.FC<Props> = ({ value, className, mobile = false, isDropdownItem = false }) => {
	const Comp = isDropdownItem ? 'li' : 'div'

	return (
		<Comp
			className={clsx(
				{
					navbar__item: !mobile && !isDropdownItem,
					'menu__list-item': mobile,
				},
				className,
			)}
			dangerouslySetInnerHTML={{ __html: value }}
		/>
	)
}

export default HtmlNavbarItem
