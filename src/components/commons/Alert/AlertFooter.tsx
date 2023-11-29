/*
| Developed by Starton
| Filename : StartonAlertFooter
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Box, BoxProps } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonAlertFooterProps extends Omit<BoxProps, 'title'> {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAlertFooter = React.forwardRef<HTMLDivElement, StartonAlertFooterProps>((props, ref) => {
	const { children, ...boxProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<Box ref={ref} display="flex" gap={2} alignItems="center" {...boxProps}>
			{children}
		</Box>
	)
})

StartonAlertFooter.defaultProps = {}
StartonAlertFooter.displayName = 'StartonAlertFooter'
