/*
| Developed by Starton
| Filename : fade.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Fade variant
|--------------------------------------------------------------------------
*/
export const variantFade = (props?: VariantsType) => {
	const distance = props?.distance || 120
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// IN
		in: {
			initial: { opacity: 0 },
			animate: { opacity: 1, transition: variantTransitionEnter },
			exit: { opacity: 0, transition: variantTransitionExit },
		},
		inUp: {
			initial: { y: distance, opacity: 0 },
			animate: {
				y: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				y: distance,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inDown: {
			initial: { y: -distance, opacity: 0 },
			animate: {
				y: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				y: -distance,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inLeft: {
			initial: { x: -distance, opacity: 0 },
			animate: {
				x: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				x: -distance,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inRight: {
			initial: { x: distance, opacity: 0 },
			animate: {
				x: 0,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				x: distance,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},

		// OUT
		out: {
			initial: { opacity: 1 },
			animate: { opacity: 0, transition: variantTransitionEnter({ durationIn, easeIn }) },
			exit: { opacity: 1, transition: variantTransitionExit({ durationOut, easeOut }) },
		},
		outUp: {
			initial: { y: 0, opacity: 1 },
			animate: {
				y: -distance,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				y: 0,
				opacity: 1,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		outDown: {
			initial: { y: 0, opacity: 1 },
			animate: {
				y: distance,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				y: 0,
				opacity: 1,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		outLeft: {
			initial: { x: 0, opacity: 1 },
			animate: {
				x: -distance,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				x: 0,
				opacity: 1,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		outRight: {
			initial: { x: 0, opacity: 1 },
			animate: {
				x: distance,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				x: 0,
				opacity: 1,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
	}
}
