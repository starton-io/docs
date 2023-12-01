/*
| Developed by Starton
| Filename : TableRow.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { styled, TableRowProps as MuiTableRowProps, TableRow as MuiTableRow } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TableRowProps extends MuiTableRowProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
export const TableRowStyled = styled(MuiTableRow, {
	shouldForwardProp(propName: PropertyKey) {
		return propName !== 'handleClick'
	},
})<TableRowProps>(({ theme, onClick }) => ({
	cursor: onClick ? 'pointer' : 'initial',

	'&.MuiTableRow-hover': {
		'&:hover': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))
