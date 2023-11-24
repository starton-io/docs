/*
| Developed by Starton
| Filename : index2.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'
import { PageHeader } from '@site/src/components/commons/PageHeader'
import { CardPost, CardPostProps } from '@site/src/components/commons/CardPost'
import { Grid } from '@mui/material'
import { SectionContainer } from '@site/src/components/commons/SectionContainer'
import { TUTORIALS_LIST } from '@site/src/config/tutorials.config'

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
function Tutorials() {
	const tutorials = React.useMemo(() => {
		return TUTORIALS_LIST.sort((a, b) => b.date.getTime() - a.date.getTime())
	}, [])

	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			{/* HERO BANNER */}
			<PageHeader
				title={
					<React.Fragment>
						Starton <span>Tutorials</span>
					</React.Fragment>
				}
				description={'Start building using step-by-step tutorials!'}
			/>

			{/* LISTS */}
			<SectionContainer>
				<Grid container spacing={2} item xs={12}>
					{tutorials.map((tutorial, index) => (
						<Grid key={index} item xs={12} sm={6} md={6} lg={4} xl={3}>
							<CardPost {...tutorial} />
						</Grid>
					))}
				</Grid>
			</SectionContainer>
		</Layout>
	)
}

export default Tutorials
