/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import type { Props } from '@theme/Admonition/Layout'
import {
	StartonAlert,
	StartonAlertBody,
	StartonAlertProps,
	StartonAlertTitle,
} from '@site/src/components/commons/Alert'
import { InfoOutlined } from '@mui/icons-material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type AdmonitionTypes = 'note' | 'tip' | 'info' | 'caution' | 'warning' | 'danger'
export interface AdmonitionLayoutProps extends Props {}

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const SEVERITY: Record<AdmonitionTypes, StartonAlertProps['severity']> = {
	note: 'primary',
	tip: 'success',
	info: 'info',
	caution: 'warning',
	warning: 'warning',
	danger: 'error',
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const AdmonitionLayout: React.FC<AdmonitionLayoutProps> = (props) => {
	return (
		<StartonAlert severity={SEVERITY[props.type]} variant={'contained'} marginBottom={5}>
			<StartonAlertTitle icon={<InfoOutlined />}>{props.title}</StartonAlertTitle>
			<StartonAlertBody marginleft={0}>{props.children}</StartonAlertBody>
		</StartonAlert>
	)
}

export default AdmonitionLayout
