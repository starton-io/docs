/*
| Developed by Dirupt
| Filename : MotionLazy.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { LazyMotion, m, domMax } from 'framer-motion'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
type MotionLazyProps = {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const MotionLazy: React.FC<MotionLazyProps> = ({ children }) => {
	return (
		<LazyMotion strict features={domMax}>
			<m.div style={{ height: '100%' }}>{children}</m.div>
		</LazyMotion>
	)
}
