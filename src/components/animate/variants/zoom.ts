/*
| Developed by Dirupt
| Filename : zoom.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { VariantsType } from '../types'
import { variantTransitionEnter, variantTransitionExit } from './transition'

/*
|--------------------------------------------------------------------------
| Zoom variant
|--------------------------------------------------------------------------
*/
export const variantZoom = (props?: VariantsType) => {
	const distance = props?.distance || 720
	const durationIn = props?.durationIn
	const durationOut = props?.durationOut
	const easeIn = props?.easeIn
	const easeOut = props?.easeOut

	return {
		// In
		// ----------------------------------------------------------------------------
		in: {
			initial: { scale: 0, opacity: 0 },
			animate: {
				scale: 1,
				opacity: 1,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scale: 0,
				opacity: 0,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inUp: {
			initial: { scale: 0, opacity: 0, translateY: distance },
			animate: {
				scale: 1,
				opacity: 1,
				translateY: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scale: 0,
				opacity: 0,
				translateY: distance,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inDown: {
			initial: { scale: 0, opacity: 0, translateY: -distance },
			animate: {
				scale: 1,
				opacity: 1,
				translateY: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scale: 0,
				opacity: 0,
				translateY: -distance,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inLeft: {
			initial: { scale: 0, opacity: 0, translateX: -distance },
			animate: {
				scale: 1,
				opacity: 1,
				translateX: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scale: 0,
				opacity: 0,
				translateX: -distance,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},
		inRight: {
			initial: { scale: 0, opacity: 0, translateX: distance },
			animate: {
				scale: 1,
				opacity: 1,
				translateX: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
			exit: {
				scale: 0,
				opacity: 0,
				translateX: distance,
				transition: variantTransitionExit({ durationOut, easeOut }),
			},
		},

		// Out
		// ----------------------------------------------------------------------------
		out: {
			initial: { scale: 1, opacity: 1 },
			animate: {
				scale: 0,
				opacity: 0,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
		outUp: {
			initial: { scale: 1, opacity: 1 },
			animate: {
				scale: 0,
				opacity: 0,
				translateY: -distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
		outDown: {
			initial: { scale: 1, opacity: 1 },
			animate: {
				scale: 0,
				opacity: 0,
				translateY: distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
		outLeft: {
			initial: { scale: 1, opacity: 1 },
			animate: {
				scale: 0,
				opacity: 0,
				translateX: -distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
		outRight: {
			initial: { scale: 1, opacity: 1 },
			animate: {
				scale: 0,
				opacity: 0,
				translateX: distance,
				transition: variantTransitionEnter({ durationIn, easeIn }),
			},
		},
	}
}
