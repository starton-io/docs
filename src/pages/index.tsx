/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import { HomeMainResources, HomeServices, HomeTutorials } from '@site/src/components/pages/Home'

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
			<HomeServices />
			<HomeMainResources />
			<HomeTutorials />
		</Layout>
	)
}

export default Home
