/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import NavbarLayout from '@theme/Navbar/Layout'
import NavbarContent from '@theme/Navbar/Content'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface NavbarProps {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const Navbar: React.FC<NavbarProps> = () => {
	return (
		<NavbarLayout>
			<NavbarContent />
		</NavbarLayout>
	)
}

export default Navbar
