/*
| Developed by Starton
| Filename : TableHead.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { styled, TableHeadProps as MuiTableHeadProps, TableHead as MuiTableHead } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TableHeadProps extends MuiTableHeadProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
export const TableHeadStyled = styled(MuiTableHead)<TableHeadProps>(({ theme }) => ({
	...theme.typography.table.header,
	color: theme.palette.text.secondary,
	backgroundColor: theme.palette.background.default,
}))
