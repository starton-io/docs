/*
| Developed by Starton
| Filename : HomeGuideHeader.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { BoxProps, styled } from '@mui/material'
import Box from '@mui/material/Box'
import { useBlogPost } from '@docusaurus/theme-common/internal'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface HomeGuideHeaderProps {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/
const ImageStyled = styled(Box, {
	shouldForwardProp: (prop) => prop !== 'imageUrl',
})<BoxProps & { imageUrl: string }>(({ theme, imageUrl }) => ({
	width: '100%',
	height: 380,
	backgroundImage: `url(${imageUrl ?? '/img/guides/default-image.png'})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	marginBottom: theme.spacing(4),
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const HomeGuideHeader: React.FC<HomeGuideHeaderProps> = () => {
	const { metadata } = useBlogPost()
	const { frontMatter } = metadata
	const { image } = frontMatter

	return <ImageStyled imageUrl={image} />
}
