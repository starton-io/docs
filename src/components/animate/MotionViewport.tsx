/*
| Developed by Starton
| Filename : MotionViewport.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { m, MotionProps } from 'framer-motion'
import Box, { BoxProps } from '@mui/material/Box'
import { useResponsive } from '../../hooks/useResponsive'
import { variantContainer } from './variants'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type ExtendsProps = BoxProps & MotionProps
interface MotionViewportProps extends ExtendsProps {
	children: React.ReactNode
	disableAnimatedMobile?: boolean
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MotionViewport: React.FC<MotionViewportProps> = ({ children, disableAnimatedMobile = true, ...other }) => {
	const smDown = useResponsive('down', 'sm')

	// Render
	// ----------------------------------------------------------------------------
	if (smDown && disableAnimatedMobile) {
		return <Box {...other}>{children}</Box>
	}

	return (
		<Box
			component={m.div}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.3 }}
			variants={variantContainer()}
			{...other}
		>
			{children}
		</Box>
	)
}
