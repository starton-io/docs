/*
| Developed by Starton
| Filename : StartonAlertTitle
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Box, BoxProps, Typography } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonAlertTitleProps extends Omit<BoxProps, 'title'> {
	icon?: React.ReactNode
	onClose?: () => void
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAlertTitle = React.forwardRef<HTMLDivElement, StartonAlertTitleProps>((props, ref) => {
	const { icon, onClose, children, ...boxProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<Box ref={ref} display="flex" gap={2} alignItems="center" {...boxProps}>
			{icon}
			<Typography variant="h3">{children}</Typography>
		</Box>
	)
})

StartonAlertTitle.displayName = 'StartonAlertTitle'
