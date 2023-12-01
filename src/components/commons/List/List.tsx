/*
| Developed by Starton
| Filename : List.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import {
	List as MuiList,
	ListItem,
	ListItemButton,
	ListItemButtonProps,
	ListItemIcon,
	ListItemIconProps,
	styled,
	Typography,
} from '@mui/material'
import { ArrowDownwardOutlined } from '@mui/icons-material'
import Link, { Props as LinkProps } from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface ListItem {
	href?: string
	text: string
}
export interface ListProps {
	title?: string
	icon?: React.ReactNode
	items: Array<ListItem>
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps & LinkProps>(({ theme }) => ({
	color: theme.palette.primary.main,
	transition: 'all 0.2s ease-in-out',

	'& svg': {
		transition: 'all 0.2s ease-in-out',
	},

	'&:hover svg': {
		transform: 'rotate(-90deg)',
	},
}))

const ListIconStyled = styled(ListItemIcon)<ListItemIconProps>(({ theme }) => ({
	minWidth: 24,
	marginRight: theme.spacing(1),
	color: theme.palette.primary.main,
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const List: React.FC<ListProps> = (props) => {
	const icon = props?.icon ? props.icon : <ArrowDownwardOutlined />

	return (
		<React.Fragment>
			{props.title && <Typography variant={'h3'}>{props.title}</Typography>}
			<MuiList disablePadding>
				{props.items.map((item, index) => {
					if (item.href) {
						return (
							<ListItemButtonStyled key={index} component={Link} to={item.href}>
								<ListIconStyled>{icon}</ListIconStyled>
								{item.text}
							</ListItemButtonStyled>
						)
					}

					return (
						<ListItem key={index}>
							<ListIconStyled>{icon}</ListIconStyled>
							{item.text}
						</ListItem>
					)
				})}
			</MuiList>
		</React.Fragment>
	)
}
