/*
| Developed by Starton
| Filename : CardRequirements.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Card, CardProps, List, ListItem, ListItemIcon, ListItemText, styled, Typography } from '@mui/material'
import { InfoOutlined, SubdirectoryArrowRightOutlined } from '@mui/icons-material'
import CardContent from '@mui/material/CardContent'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface CardRequirementsProps {
	title?: string
	items: Array<string>
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const CardStyled = styled(Card)<CardProps>(({ theme }) => ({
	background: theme.palette.background.paper,
	border: `1px solid ${theme.palette.divider}`,
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(3),
	padding: theme.spacing(3),
	marginBottom: theme.spacing(5),
	borderRadius: 0,
}))

const CardHeaderStyled = styled(CardContent)(({ theme }) => ({
	padding: 0,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: theme.spacing(1),
}))

const ListIconStyled = styled(ListItemIcon)(({ theme }) => ({
	minWidth: 24,
	marginRight: theme.spacing(1),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const CardRequirements: React.FC<CardRequirementsProps> = (props) => {
	return (
		<CardStyled>
			<CardHeaderStyled>
				<InfoOutlined />
				<Typography variant={'h3'}>{props?.title ?? 'You will need'}</Typography>
			</CardHeaderStyled>
			<List disablePadding>
				{props.items.map((item, index) => (
					<ListItem disablePadding key={index}>
						<ListIconStyled>
							<SubdirectoryArrowRightOutlined color={'primary'} />
						</ListIconStyled>
						<ListItemText primary={item} />
					</ListItem>
				))}
			</List>
		</CardStyled>
	)
}

export default CardRequirements
