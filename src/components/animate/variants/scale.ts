/*
| Developed by Starton
| Filename : scale.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Scale variant
|--------------------------------------------------------------------------
*/
export const variantScale = (props?: VariantsType) => {
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// In
		// ----------------------------------------------------------------------------
		inX: {
			initial: { scaleX: 0, opacity: 0 },
			animate: {
				scaleX: 1,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scaleX: 0,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inY: {
			initial: { scaleY: 0, opacity: 0 },
			animate: {
				scaleY: 1,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scaleY: 0,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},

		// Out
		// ----------------------------------------------------------------------------
		outX: {
			initial: { scaleX: 1, opacity: 1 },
			animate: {
				scaleX: 0,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
		outY: {
			initial: { scaleY: 1, opacity: 1 },
			animate: {
				scaleY: 0,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
	}
}
