/*
| Developed by Dirupt
| Filename : HomeTutorials.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import { MotionViewport, variantFade } from '@site/src/components/animate'
import { PageContainer } from '@site/src/components/commons/PageContainer'
import { SectionTitle } from '@site/src/components/commons/SectionTitle'
import { m } from 'framer-motion'
import { StartonButton } from '@site/src/components/commons/Button'
import Box from '@mui/material/Box'
import { TutorialCard } from '@site/src/components/pages/tutorials'
import { HomeProps } from '@site/src/components/pages/home/Home'
import Link from '@docusaurus/Link'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialsProps extends Pick<HomeProps, 'recentTutorials'> {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorials: React.FC<HomeTutorialsProps> = (props) => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle
					title={'Last tutorials'}
					titleRight={
						<Link to={'/tutorials'} aria-description={'See more tutorials'}>
							<StartonButton size="large" variant="outlined">
								See more tutorials
							</StartonButton>
						</Link>
					}
				/>
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="stretch"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{props.recentTutorials
						.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
						.slice(0, 3)
						.map((tutorial, index) => (
							<TutorialCard key={index} {...tutorial.metadata} />
						))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
