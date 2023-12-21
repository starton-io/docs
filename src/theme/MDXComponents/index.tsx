/*
| Developed by Starton
| Filename : MDXComponents.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React, { ComponentProps } from 'react'
import { Table, TableContainer, Typography, Stack } from '@mui/material'
import type { MDXComponentsObject } from '@theme/MDXComponents'
import DefaultMDXComponents from '@theme-original/MDXComponents'
import CardRequirements from '@site/src/components/commons/CardRequirements/CardRequirements'
import { List } from '@site/src/components/commons/List'
import { StepSection } from '@site/src/components/commons/StepSection'
import { CardLink } from '@site/src/components/commons/CardLink'
import { TableCellStyled, TableHeadStyled, TableRowStyled } from '@site/src/theme/MDXComponents/table'
import { VideoIframe } from '@site/src/components/commons/VideoIframe'
import {
	DocsGradientCard,
	DocsSectionGuides,
	DocsSectionLinks,
	DocsGettingStarted,
} from '@site/src/components/pages/docs'

const MDXComponents: MDXComponentsObject = {
	...DefaultMDXComponents,
	// Typographies (TODO: Check later props for Typography)
	// h1: (props: ComponentProps<'h1'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h1'} {...props} sx={{ marginBottom: 3, ...props.sx }} />
	// ),
	// h2: (props: ComponentProps<'h2'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h2'} {...props} sx={{ marginBottom: 3, ...props.sx }} />
	// ),
	// h3: (props: ComponentProps<'h3'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h3'} {...props} sx={{ marginBottom: 3, marginTop: 3, ...props.sx }} />
	// ),
	// h4: (props: ComponentProps<'h4'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h4'} {...props} sx={{ marginBottom: 3, marginTop: 3, ...props.sx }} />
	// ),
	// h5: (props: ComponentProps<'h5'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h5'} {...props} sx={{ marginBottom: 3, marginTop: 3, ...props.sx }} />
	// ),
	// h6: (props: ComponentProps<'h6'>) => (
	// 	// @ts-ignore
	// 	<Typography variant={'h6'} {...props} sx={{ marginBottom: 3, marginTop: 3, ...props.sx }} />
	// ),
	// @ts-ignore
	p: (props: ComponentProps<'p'>) => <Typography {...props} marginBottom={3} />,
	table: (props: ComponentProps<'table'>) => (
		<TableContainer sx={{ marginBottom: 2 }}>
			{/* @ts-ignore */}
			<Table sx={{ width: '100%' }} {...props} />
		</TableContainer>
	),
	// @ts-ignore
	thead: (props: ComponentProps<'thead'>) => <TableHeadStyled {...props} />,
	// @ts-ignore
	tr: (props: ComponentProps<'tr'>) => <TableRowStyled {...props} />,
	// @ts-ignore
	th: (props: ComponentProps<'th'>) => <TableCellStyled {...props} />,
	// @ts-ignore
	td: (props: ComponentProps<'td'>) => <TableCellStyled {...props} />,
	Stack,
	Typography,
	List,
	StepSection,
	CardRequirements,
	CardLink,
	DocsGradientCard,
	VideoIframe,
	DocsSectionLinks,
	DocsGettingStarted,
	DocsSectionGuides,
}

export default MDXComponents
