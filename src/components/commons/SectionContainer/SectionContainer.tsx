/*
| Developed by Starton
| Filename : SectionContainer.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { Container, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface SectionContainerProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
export const Section = styled(Container)(({ theme }) => ({
	padding: theme.spacing(6, 3),
	[theme.breakpoints.up('md')]: {
		padding: theme.spacing(6, 6),
		flexDirection: 'row',
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const SectionContainer: React.FC<SectionContainerProps> = (props) => {
	return <Section maxWidth={false}>{props.children}</Section>
}

/*
|--------------------------------------------------------------------------
| Component configurations
|--------------------------------------------------------------------------
*/
SectionContainer.displayName = 'SectionContainer'
