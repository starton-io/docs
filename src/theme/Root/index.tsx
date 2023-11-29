/*
| Developed by Starton
| Filename : Root.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { ThemeProvider } from '@mui/material'
import theme from '@site/src/styles/mui-themes'
import { MotionLazy } from '@site/src/components/animate'

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
			<ThemeProvider theme={theme}>
				<MotionLazy>{children}</MotionLazy>
			</ThemeProvider>
		</React.Fragment>
	)
}
