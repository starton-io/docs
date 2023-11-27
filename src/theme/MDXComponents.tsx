/*
| Developed by Starton
| Filename : MDXComponents.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import MDXComponents from '@theme-original/MDXComponents'

export default {
	// Re-use the default mapping
	...MDXComponents,
	// Map the "<Highlight>" tag to our Highlight component
	// `Highlight` will receive all props that were passed to `<Highlight>` in MDX
	// Highlight,
}
