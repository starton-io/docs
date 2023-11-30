/*
| Developed by Starton
| Filename : TableCell.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { styled, TableCellProps as MuiTableCellProps, TableCell as MuiTableCell } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TableCellProps extends MuiTableCellProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
export const TableCellStyled = styled(MuiTableCell)<TableCellProps>(({ theme }) => ({
	...theme.typography.table.text,
	color: theme.palette.text.primary,
	borderBottomColor: theme.palette.divider,
	height: 48,
	fontWeight: 400,
}))
