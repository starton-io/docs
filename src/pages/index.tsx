/*
| Developed by Dirupt
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { HomeHero } from '@site/src/components/pages/Home/HomeHero'
import { HomeIndexes } from '@site/src/components/pages/Home/HomeIndexes'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Home() {
	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			{/* HERO BANNER */}
			<HomeHero />

			{/* SECTIONS */}
			<HomeIndexes />
		</Layout>
	)
}

export default Home
