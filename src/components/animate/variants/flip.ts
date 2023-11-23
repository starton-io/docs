/*
| Developed by Dirupt
| Filename : flip.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Flip variant
|--------------------------------------------------------------------------
*/
export const variantFlip = (props?: VariantsType) => {
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// In
		// ----------------------------------------------------------------------------
		inX: {
			initial: { rotateX: -180, opacity: 0 },
			animate: {
				rotateX: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				rotateX: -180,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inY: {
			initial: { rotateY: -180, opacity: 0 },
			animate: {
				rotateY: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				rotateY: -180,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},

		// Out
		// ----------------------------------------------------------------------------
		outX: {
			initial: { rotateX: 0, opacity: 1 },
			animate: {
				rotateX: 70,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		outY: {
			initial: { rotateY: 0, opacity: 1 },
			animate: {
				rotateY: 70,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
	}
}
