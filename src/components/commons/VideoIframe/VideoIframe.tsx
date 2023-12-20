/*
| Developed by Starton
| Filename : VideoIframe.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { styled } from '@mui/material'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface VideoIframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {}

/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
*/

const VideoIframeStyled = styled('iframe')<React.IframeHTMLAttributes<HTMLIFrameElement>>(() => ({
	width: '100%',
	aspectRatio: '16/9',
}))

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export const VideoIframe: React.FC<VideoIframeProps> = (props) => {
	return (
		<VideoIframeStyled
			title="YouTube video player"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
			{...props}
		/>
	)
}
