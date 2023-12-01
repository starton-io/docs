/*
| Developed by Starton
| Filename : HomeTutorialContent.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import MDXContent from '@theme/MDXContent'
import { blogPostContainerID } from '@docusaurus/utils-common'
import Grid from '@mui/material/Grid'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeTutorialContentProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeTutorialContent: React.FC<HomeTutorialContentProps> = (props) => {
	return (
		<Grid item xs={12} lg={9} id={blogPostContainerID} className={'markdown'} itemProp={'articleBody'}>
			<MDXContent>{props.children}</MDXContent>
		</Grid>
	)
}
