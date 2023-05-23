/*
| Developed by Dirupt
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { HomeHero } from '@site/src/components/pages/Home/HomeHero'
import { HomeIndexes } from '@site/src/components/pages/Home/HomeIndexes'
import { HomeTutorials } from '@site/src/components/pages/Home/HomeTutorials'

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

			{/* TUTORIALS */}
			<HomeTutorials />
		</Layout>
	)
}

export default Home
