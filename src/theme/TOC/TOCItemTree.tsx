/*
| Developed by Starton
| Filename : TOCItemTree.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import type { Props } from '@theme/TOCItems/Tree'
import { List, ListItemButton, ListItemButtonProps, ListItemText, ListProps, styled } from '@mui/material'
import Link, { Props as LinkProps } from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TOCItemTreeProps extends Props {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ListStyled = styled('ul')<React.ComponentProps<'ul'> & Pick<TOCItemTreeProps, 'isChild'>>(
	({ theme, isChild }) => ({
		paddingLeft: isChild ? theme.spacing(2) : 0,
		listStyle: 'none',
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1.5),

		...(isChild && {
			borderLeft: `1px solid ${theme.palette.divider}`,
		}),
	}),
)

const ListItemButtonStyled = styled('li')<React.ComponentProps<'li'>>(({ theme }) => ({
	...theme.typography.nav.body.sm,
	transition: 'all 0.2s ease-in-out',
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(1.5),

	'& a': {
		color: theme.palette.text.primary,

		'&.active': {
			color: theme.palette.primary.main,
		},

		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const TOCItemTree: React.FC<TOCItemTreeProps> = (props) => {
	if (!props.toc.length) return null

	return (
		<ListStyled isChild={props.isChild}>
			{props.toc.map((heading) => (
				<ListItemButtonStyled key={heading.id}>
					<Link
						to={`#${heading.id}`}
						className={props?.linkClassName ?? undefined}
						dangerouslySetInnerHTML={{ __html: heading.value }}
					/>
					<TOCItemTree
						isChild
						toc={heading.children}
						className={props.className}
						linkClassName={props.linkClassName}
					/>
				</ListItemButtonStyled>
			))}
		</ListStyled>
	)
}
