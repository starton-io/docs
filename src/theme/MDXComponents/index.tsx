/*
| Developed by Starton
| Filename : MDXComponents.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React, { ComponentProps } from 'react'
import { Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import type { MDXComponentsObject } from '@theme/MDXComponents'
import DefaultMDXComponents from '@theme-original/MDXComponents'
import CardRequirements from '@site/src/components/commons/CardRequirements/CardRequirements'
import { List } from '@site/src/components/commons/List'
import { StepSection } from '@site/src/components/commons/StepSection'
import { CardLink } from '@site/src/components/commons/CardLink'
import Paper from '@mui/material/Paper'

const MDXComponents: MDXComponentsObject = {
	...DefaultMDXComponents,
	// Typographies (TODO: Check later props for Typography)
	// @ts-ignore
	h1: (props: ComponentProps<'h1'>) => <Typography variant={'h1'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	h2: (props: ComponentProps<'h2'>) => <Typography variant={'h2'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	h3: (props: ComponentProps<'h3'>) => <Typography variant={'h3'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	h4: (props: ComponentProps<'h4'>) => <Typography variant={'h4'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	h5: (props: ComponentProps<'h5'>) => <Typography variant={'h5'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	h6: (props: ComponentProps<'h6'>) => <Typography variant={'h6'} {...props} sx={{ marginBottom: 3, ...props.sx }} />,
	// @ts-ignore
	p: (props: ComponentProps<'p'>) => <Typography {...props} marginBottom={3} />,
	table: (props: ComponentProps<'table'>) => (
		<TableContainer sx={{ marginBottom: 2 }}>
			{/* @ts-ignore */}
			<Table sx={{ width: '100%' }} {...props} />
		</TableContainer>
	),
	// @ts-ignore
	thead: (props: ComponentProps<'thead'>) => <TableHead {...props} />,
	// @ts-ignore
	tr: (props: ComponentProps<'tr'>) => <TableRow {...props} />,
	// @ts-ignore
	th: (props: ComponentProps<'th'>) => <TableCell {...props} />,
	// @ts-ignore
	td: (props: ComponentProps<'td'>) => <TableCell {...props} />,
	Typography,
	List,
	StepSection,
	CardRequirements,
	CardLink,
}

export default MDXComponents
