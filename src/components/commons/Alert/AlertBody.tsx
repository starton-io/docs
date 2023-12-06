/*
| Developed by Starton
| Filename : StartonAlertBody
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Box, BoxProps } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonAlertBodyProps extends Omit<BoxProps, 'title'> {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAlertBody = React.forwardRef<HTMLDivElement, StartonAlertBodyProps>((props, ref) => {
	const { children, ...boxProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<Box className="StartonAlertBody-root" ref={ref} display="flex" flexDirection={'column'} gap={2} {...boxProps}>
			{children}
		</Box>
	)
})

StartonAlertBody.defaultProps = {}
StartonAlertBody.displayName = 'StartonAlertBody'
