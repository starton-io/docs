/*
| Developed by Starton
| Filename : StartonButton
| Author : Calixte DE TOURRIS (calixte@starton.io)
*/

import React from 'react'
import { Button, ButtonProps, CircularProgress, styled, useTheme } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Module extension
|--------------------------------------------------------------------------
*/
declare module '@mui/material/Button' {
	export interface ButtonPropsColorOverrides {
		reverse: true
	}
}

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StartonButtonProps extends Omit<ButtonProps, 'color'> {
	isLoading?: boolean
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'reverse'
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const StartonButtonStyled = styled(Button, {
	shouldForwardProp: (propName) => propName !== 'isLoading',
})<StartonButtonProps>(({ theme, variant, color, size, disabled }) => ({
	borderRadius: 0,
	display: 'flex',
	boxShadow: 'none',

	// Variants
	//--------------------------------------------------------------------------
	'&, &.Mui-disabled': {
		...(variant === 'outlined' && {
			border: '1px solid',
			borderColor: theme.palette.divider,
			backgroundColor: 'transparent',
			color: color && color !== 'inherit' ? theme.palette[color].main : color,
			...(color === 'reverse' && {
				borderColor: theme.palette.reverse.light,
			}),
		}),
		...(variant === 'contained' && {
			border: '1px solid',
			borderColor: color && color !== 'inherit' ? theme.palette[color].main : color,
			backgroundColor: color && color !== 'inherit' ? theme.palette[color].main : color,
			color: color && color !== 'inherit' ? theme.palette[color].contrastText : color,
		}),
		...(variant === 'text' && {
			border: '1px solid',
			borderColor: 'transparent',
			backgroundColor: 'transparent',
			color: color && color !== 'inherit' ? theme.palette[color].main : color,
		}),
		// Color override
		//--------------------------------------------------------------------------
		...(color === 'secondary' && {
			color: theme.palette.secondary.light,
		}),
	},

	// Sizes
	//--------------------------------------------------------------------------
	...(size === 'small' && {
		gap: theme.autoSpacing('xs2'),
		height: theme.autoSizing('xl'),
		padding: theme.autoSpacing(0, 'xs2'),
		...theme.typography.button2,
	}),
	...(size === 'medium' && {
		gap: theme.autoSpacing('xs2'),
		height: theme.autoSizing('xl2'),
		padding: theme.autoSpacing(0, 'xs'),
		...theme.typography.button,
	}),
	...(size === 'large' && {
		gap: theme.autoSpacing('xs'),
		height: theme.autoSizing('xl3'),
		padding: theme.autoSpacing(0, 'sm'),
		...theme.typography.button,
	}),

	// Icons
	//--------------------------------------------------------------------------
	'& .MuiButton-iconSizeMedium, & .MuiButton-iconSizeMedium svg, & .MuiButton-iconSizeLarge, & .MuiButton-iconSizeLarge svg':
		{
			width: theme.autoSizing('md'),
			height: theme.autoSizing('md'),
			margin: 0,
		},
	'& .MuiButton-iconSizeSmall, & .MuiButton-iconSizeSmall svg': {
		width: theme.autoSizing('sm'),
		height: theme.autoSizing('sm'),
		margin: 0,
	},

	// States
	//--------------------------------------------------------------------------
	...(!disabled && {
		'&:hover': {
			...(variant === 'outlined' && {
				borderColor: theme.palette.divider,
				backgroundColor:
					color && color !== 'inherit' ? theme.palette[color].hover : theme.palette.primary.hover,
				...(color === 'reverse'
					? {
							color: theme.palette.reverse.contrastText,
					  }
					: {
							color: color && color !== 'inherit' ? theme.palette[color].main : color,
					  }),
			}),
			...(variant === 'contained' && {
				borderColor: color && color !== 'inherit' ? theme.palette[color].dark : theme.palette.primary.dark,
				backgroundColor: color && color !== 'inherit' ? theme.palette[color].dark : theme.palette.primary.dark,
			}),
			...(variant === 'text' && {
				backgroundColor:
					color && color !== 'inherit' ? theme.palette[color].hover : theme.palette.primary.hover,
			}),
			...(color === 'reverse' && {
				backgroundColor: theme.palette.reverse.dark,
				boxShadow: 'none',
			}),
		},
	}),

	'&.Mui-disabled': {
		opacity: theme.palette.action.disabledOpacity,
	},

	'&:focus': {
		borderColor: theme.palette.text.primary,
		...(color === 'secondary' && {
			color: theme.palette.text.primary,
		}),
		...(color === 'reverse' && {
			borderColor: theme.palette.reverse.main,
		}),
	},

	'&:active': {
		borderColor: color && color !== 'inherit' ? theme.palette[color].main : theme.palette.primary.main,
		...(color === 'secondary' && {
			borderColor: theme.palette.secondary.light,
			color: theme.palette.secondary.light,
		}),
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StartonButton = React.forwardRef<HTMLButtonElement, StartonButtonProps>((props, ref) => {
	const { children, startIcon, isLoading, size, onClick, color, ...buttonProps } = props
	const theme = useTheme()

	// Methods
	//--------------------------------------------------------------------------
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (isLoading) return
		onClick?.(event)
	}

	// Render
	//--------------------------------------------------------------------------
	return (
		<StartonButtonStyled
			{...buttonProps}
			color={color}
			onClick={handleClick}
			ref={ref}
			size={size}
			startIcon={
				isLoading ? (
					<CircularProgress
						size={size === 'small' ? theme.autoSpacing('sm') : theme.autoSpacing('md')}
						color="inherit"
					/>
				) : (
					startIcon
				)
			}
		>
			{children}
		</StartonButtonStyled>
	)
})

StartonButton.defaultProps = {
	size: 'medium',
	color: 'primary',
	variant: 'text',
}
