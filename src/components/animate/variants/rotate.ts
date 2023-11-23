/*
| Developed by Starton
| Filename : rotate.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Rotate variant
|--------------------------------------------------------------------------
*/
export const variantRotate = (props?: VariantsType) => {
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// In
		// ----------------------------------------------------------------------------
		in: {
			initial: { opacity: 0, rotate: -360 },
			animate: {
				opacity: 1,
				rotate: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				opacity: 0,
				rotate: -360,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},

		// Out
		// ----------------------------------------------------------------------------
		out: {
			initial: { opacity: 1, rotate: 0 },
			animate: {
				opacity: 0,
				rotate: -360,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
	}
}
