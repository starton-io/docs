/*
| Developed by Starton
| Filename : SearchNavbarItem.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import SearchBar from '@theme/SearchBar'
import NavbarSearch from '@theme/Navbar/Search'
import type { Props } from '@theme/NavbarItem/SearchNavbarItem'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const SearchNavbarItem: React.FC<Props> = ({ mobile, className }) => {
	if (mobile) {
		return null
	}

	return (
		<NavbarSearch className={className}>
			<SearchBar />
		</NavbarSearch>
	)
}

export default SearchNavbarItem
