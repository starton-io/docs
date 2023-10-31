/*
| Developed by Starton
| Filename : Root.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import theme from '@site/src/components/MuiTheme'
import { ThemeProvider } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface RootProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function Root({ children }: RootProps): JSX.Element {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</React.Fragment>
	)
}
