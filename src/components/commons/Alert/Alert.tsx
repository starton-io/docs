/*
| Developed by Starton
| Filename : StartonAlert
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Box, BoxProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonAlertProps extends Omit<BoxProps, 'title'> {
	onClose?: () => void
	severity?: 'primary' | 'warning' | 'info' | 'success' | 'error'
	variant?: 'text' | 'contained' | 'outlined'
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonAlertStyled = styled(Box)<Required<Pick<StartonAlertProps, 'severity' | 'variant'>>>(
	({ theme, severity, variant }) => ({
		// Base
		//--------------------------------------------------------------------------
		display: 'flex',
		flexDirection: 'column',
		gap: theme.autoSpacing('xs'),
		padding: theme.autoSpacing('xl'),
		borderColor: theme.palette[severity].main,
		boxSizing: 'border-box',

		// Variants
		//--------------------------------------------------------------------------
		...(variant === 'text' && {
			borderLeftWidth: 4,
			borderLeftStyle: 'solid',
			backgroundColor: theme.palette.component.alpha5,
			color: theme.palette.text.primary,
			'& .StartonAlertBody-root': {
				color: theme.palette.text.secondary,
			},
		}),
		...(variant === 'contained' && {
			borderLeftWidth: 4,
			borderLeftStyle: 'solid',
			backgroundColor: theme.palette[severity].hover,
			color: theme.palette[severity].light,
		}),
		...(variant === 'outlined' && {
			borderWidth: 1,
			borderStyle: 'solid',
			backgroundColor: theme.palette.component.alpha5,
			color: theme.palette.text.primary,
			'& .StartonAlertBody-root': {
				color: theme.palette.text.secondary,
			},
		}),
	}),
)

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonAlert = React.forwardRef<HTMLDivElement, StartonAlertProps>((props, ref) => {
	const { severity, variant, children, ...boxProps } = props

	// Render
	//--------------------------------------------------------------------------
	return (
		<StartonAlertStyled severity={severity ?? 'primary'} variant={variant ?? 'text'} {...boxProps} ref={ref}>
			{children}
		</StartonAlertStyled>
	)
})

StartonAlert.defaultProps = {
	color: 'primary',
	variant: 'contained',
}

StartonAlert.displayName = 'StartonAlert'
