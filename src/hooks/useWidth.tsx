/*
| Developed by Starton
| Filename : useResponsive.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { useTheme, Breakpoint } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
type BreakpointOrNull = Breakpoint | null

/*
|--------------------------------------------------------------------------
| Hook
|--------------------------------------------------------------------------
*/
export function useWidth() {
	const theme = useTheme()
	const keys = [...theme.breakpoints.keys].reverse()

	return (
		keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const matches = useMediaQuery(theme.breakpoints.up(key))

			return !output && matches ? key : output
		}, null) || 'xs'
	)
}
