/*
| Developed by Starton
| Filename : MotionContainer.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { m, MotionProps } from 'framer-motion'
import Box, { BoxProps } from '@mui/material/Box'
import { variantContainer } from './variants'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type ExtendsProps = BoxProps & MotionProps
export interface MotionContainerProps extends ExtendsProps {
	animate?: boolean
	action?: boolean
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MotionContainer: React.FC<MotionContainerProps> = ({ animate, action = false, children, ...other }) => {
	if (action) {
		return (
			<Box
				component={m.div}
				initial={false}
				animate={animate ? 'animate' : 'exit'}
				variants={variantContainer()}
				{...other}
			>
				{children}
			</Box>
		)
	}

	return (
		<Box component={m.div} initial="initial" animate="animate" exit="exit" variants={variantContainer()} {...other}>
			{children}
		</Box>
	)
}
