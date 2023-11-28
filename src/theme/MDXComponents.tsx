/*
| Developed by Starton
| Filename : MDXComponents.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React, { ComponentProps } from 'react'
import type { MDXComponentsObject } from '@theme/MDXComponents'
import DefaultMDXComponents from '@theme-original/MDXComponents'
import { Typography } from '@mui/material'

const MDXComponents: MDXComponentsObject = {
	...DefaultMDXComponents,
	// Typographies
	// @ts-ignore
	h1: (props: ComponentProps<'h1'>) => <Typography variant={'h1'} {...props} />,
	// @ts-ignore
	h2: (props: ComponentProps<'h2'>) => <Typography variant={'h2'} {...props} />,
	// @ts-ignore
	h3: (props: ComponentProps<'h3'>) => <Typography variant={'h3'} {...props} />,
	// @ts-ignore
	h4: (props: ComponentProps<'h4'>) => <Typography variant={'h4'} {...props} />,
	// @ts-ignore
	h5: (props: ComponentProps<'h5'>) => <Typography variant={'h5'} {...props} />,
	// @ts-ignore
	h6: (props: ComponentProps<'h6'>) => <Typography variant={'h6'} {...props} />,
	// @ts-ignore
	p: (props: ComponentProps<'p'>) => <Typography {...props} />,
	// Map the "<Highlight>" tag to our Highlight component
	// `Highlight` will receive all props that were passed to `<Highlight>` in MDX
	// Highlight,
}

export default MDXComponents
