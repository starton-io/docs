/*
| Developed by Starton
| Filename : slide.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Slide variant
|--------------------------------------------------------------------------
*/
export const varSlide = (props?: VariantsType) => {
	const distance = props?.distance || 160
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// In
		// ----------------------------------------------------------------------------
		inUp: {
			initial: { y: distance },
			animate: { y: 0, transition: variantTransitionEnter({ durationIn, easeIn }) },
			exit: { y: distance, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		inDown: {
			initial: { y: -distance },
			animate: { y: 0, transition: variantTransitionEnter({ durationIn, easeIn }) },
			exit: { y: -distance, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		inLeft: {
			initial: { x: -distance },
			animate: { x: 0, transition: variantTransitionEnter({ durationIn, easeIn }) },
			exit: { x: -distance, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		inRight: {
			initial: { x: distance },
			animate: { x: 0, transition: variantTransitionEnter({ durationIn, easeIn }) },
			exit: { x: distance, transition: variantTransitionExit({ durationOut, easeOut }) },
		},

		// Out
		// ----------------------------------------------------------------------------
		outUp: {
			initial: { y: 0 },
			animate: {
				y: -distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: { y: 0, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		outDown: {
			initial: { y: 0 },
			animate: {
				y: distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: { y: 0, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		outLeft: {
			initial: { x: 0 },
			animate: {
				x: -distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: { x: 0, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		outRight: {
			initial: { x: 0 },
			animate: {
				x: distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: { x: 0, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
	}
}
