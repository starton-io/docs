/*
| Developed by Starton
| Filename : SectionTitle.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SectionTitleProps {
	title: React.ReactNode | string
	titleRight?: React.ReactNode
	description?: string
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const SectionTitle: React.FC<SectionTitleProps> = ({ title, titleRight, description }) => {
	return (
		<Box display={'flex'} flexDirection={'column'}>
			<Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
				<Typography variant={'h2'} marginBottom={3}>
					{title}
				</Typography>
				{React.isValidElement(titleRight) ? titleRight : null}
			</Box>
			{description ? (
				<Typography variant={'body1'} color={'secondary.light'}>
					{description}
				</Typography>
			) : null}
		</Box>
	)
}
