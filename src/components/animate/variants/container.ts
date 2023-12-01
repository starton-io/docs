/*
| Developed by Starton
| Filename : container.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export type VariantContainerProps = {
	staggerIn?: number
	delayIn?: number
	staggerOut?: number
}

/*
|--------------------------------------------------------------------------
| Container variant
|--------------------------------------------------------------------------
*/
export const variantContainer = (props?: VariantContainerProps) => {
	const staggerIn = props?.staggerIn || 0.05
	const delayIn = props?.staggerIn || 0.05
	const staggerOut = props?.staggerIn || 0.05

	return {
		animate: {
			transition: {
				staggerChildren: staggerIn,
				delayChildren: delayIn,
			},
		},
		exit: {
			transition: {
				staggerChildren: staggerOut,
				staggerDirection: -1,
			},
		},
	}
}
