/*
| Developed by Starton
| Filename : index2.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import { HomeFeaturesTour, HomeMainResources, HomeServices, HomeTutorials } from '@site/src/components/pages/home'
import { RecentTutorial } from '@site/plugins/starton-tutorial-plugin/types'
import Box from '@mui/material/Box'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeProps {
	recentTutorials: Array<RecentTutorial>
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Home(props: HomeProps) {
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
			<Box paddingBottom={11}>
				<HomeServices />
				<HomeMainResources />
				<HomeTutorials recentTutorials={props.recentTutorials} />
				<HomeFeaturesTour />
			</Box>
		</Layout>
	)
}

export default Home
