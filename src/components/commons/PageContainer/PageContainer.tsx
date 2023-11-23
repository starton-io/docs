/*
| Developed by Starton
| Filename : PageContainer.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Container, ContainerProps, styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface PageContainerProps extends ContainerProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ContainerStyled = styled(Container)(({ theme }) => ({
	padding: theme.spacing(5, 3),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const PageContainer: React.FC<PageContainerProps> = ({ children, ...containerProps }) => {
	return (
		<ContainerStyled maxWidth={'lg'} {...containerProps}>
			{children}
		</ContainerStyled>
	)
}
