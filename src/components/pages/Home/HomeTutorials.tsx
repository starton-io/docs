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
import { TUTORIAL_LIST } from '@site/src/config/tutorials.config'
import { TutorialCard } from '@site/src/components/pages/tutorials/index/TutorialCard'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialsProps {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorials: React.FC<HomeTutorialsProps> = () => {
	return (
		<PageContainer component={MotionViewport}>
			<m.div variants={variantFade().inLeft}>
				<SectionTitle
					title={'Last tutorials'}
					titleRight={
						<StartonButton size="large" variant="outlined">
							See more tutorials
						</StartonButton>
					}
				/>
				<Box
					gap={{ xs: 2, lg: 3 }}
					display="grid"
					alignItems="center"
					gridTemplateColumns={{
						xs: 'repeat(1, 1fr)',
						md: 'repeat(3, 1fr)',
					}}
				>
					{TUTORIAL_LIST.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
						.slice(0, 3)
						.map((tutorial, index) => (
							<TutorialCard key={index} {...tutorial} />
						))}
				</Box>
			</m.div>
		</PageContainer>
	)
}
