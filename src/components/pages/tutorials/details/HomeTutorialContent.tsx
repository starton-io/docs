/*
| Developed by Starton
| Filename : HomeTutorialContent.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import MDXContent from '@theme/MDXContent'
import { blogPostContainerID } from '@docusaurus/utils-common'
import Box from '@mui/material/Box'

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
		<Box id={blogPostContainerID} className={'markdown'} itemProp={'articleBody'} flex={1}>
			<MDXContent>{props.children}</MDXContent>
		</Box>
	)
}
