/*
| Developed by Starton
| Filename : HomeGuideContent.tsx
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
export interface HomeGuideContentProps {
	children: React.ReactNode
}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeGuideContent: React.FC<HomeGuideContentProps> = (props) => {
	return (
		<Grid item xs={12} lg={9} id={blogPostContainerID} className={'markdown'} itemProp={'articleBody'}>
			<MDXContent>{props.children}</MDXContent>
		</Grid>
	)
}
