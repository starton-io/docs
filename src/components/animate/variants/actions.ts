/*
| Developed by Starton
| Filename : actions.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Hover variant
|--------------------------------------------------------------------------
*/
export const variantHover = (hover = 1.09, tap = 0.97) => ({
	hover: { scale: hover },
	tap: { scale: tap },
})
