/*
| Developed by Starton
| Filename : path.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Transition configuration
|--------------------------------------------------------------------------
*/
export const TRANSITION = {
	duration: 2,
	ease: [0.43, 0.13, 0.23, 0.96],
}

/*
|--------------------------------------------------------------------------
| Path variant
|--------------------------------------------------------------------------
*/
export const variantPath = {
	animate: {
		fillOpacity: [0, 0, 1],
		pathLength: [1, 0.4, 0],
		transition: TRANSITION,
	},
}
