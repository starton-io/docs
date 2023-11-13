/*
| Developed by Starton
| Filename : SearchBar.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import SearchBar from '@theme-original/SearchBar'
import type SearchBarType from '@theme/SearchBar'
import type { WrapperProps } from '@docusaurus/types'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type Props = WrapperProps<typeof SearchBarType>

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function SearchBarWrapper(props: Props): JSX.Element {
	return <SearchBar {...props} />
}
