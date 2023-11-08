/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { HomeIndexes } from '@site/src/components/pages/Home/HomeIndexes'
import { HomeTutorials } from '@site/src/components/pages/Home/HomeTutorials'
import { PageHeader } from '@site/src/components/commons/PageHeader'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Home() {
	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			{/* HERO BANNER */}
			<PageHeader
				subTitle={'Welcome on'}
				title={
					<React.Fragment>
						Starton <span>Documentation</span>
					</React.Fragment>
				}
			/>

			{/* SECTIONS */}
			<HomeIndexes />

			{/* TUTORIALS */}
			<HomeTutorials />
		</Layout>
	)
}

export default Home
