/*
| Developed by Starton
| Filename : StepSection.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { Box, BoxProps, styled, Typography } from '@mui/material'
import { MotionContainer, MotionViewport, variantFade } from '@site/src/components/animate'
import { m } from 'framer-motion'
import MDXContent from '@theme/MDXContent'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface StepSectionProps {
	bottomDivider?: boolean
	stepTitle?: number | string
	children: React.ReactNode
	motionContainer?: boolean
}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const Section = styled(Box)<Omit<BoxProps, 'bottomDivider'> & Pick<StepSectionProps, 'bottomDivider'>>(
	({ theme, bottomDivider }) => ({
		marginTop: theme.spacing(10),
		paddingTop: theme.spacing(10),
		borderTop: `1px solid ${theme.palette.divider}`,

		...(bottomDivider && {
			paddingBottom: theme.spacing(10),
			borderBottom: `1px solid ${theme.palette.divider}`,
		}),

		'& .MuiTypography-root + h2': {
			marginTop: 0,
		},

		'& h2:not(.MuiTypography-root)': {
			marginTop: 0,
		},
	}),
)

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const StepSection: React.FC<StepSectionProps> = (props) => {
	return (
		<Section
			bottomDivider={props.bottomDivider}
			component={props.motionContainer ? MotionContainer : MotionViewport}
		>
			<m.div variants={variantFade().inLeft}>
				{props.stepTitle ? (
					<Typography component={'p'} variant={'overline'} color={'warning.main'} paddingBottom={2}>
						{Number(props.stepTitle) ? `Step ${props.stepTitle}` : props.stepTitle}
					</Typography>
				) : null}
				{props.children}
			</m.div>
		</Section>
	)
}
