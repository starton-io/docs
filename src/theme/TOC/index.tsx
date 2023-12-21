/*
| Developed by Starton
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useTOCHighlight, useFilteredAndTreeifiedTOC, type TOCHighlightConfig } from '@docusaurus/theme-common/internal'
import type { Props } from '@theme/TOC'
import { Box } from '@mui/material'
import { TOCItemTree } from '@site/src/theme/TOC/TOCItemTree'

/*
|--------------------------------------------------------------------------
| Contracts
|--------------------------------------------------------------------------
*/
export interface TOCProps extends Props {}

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const TOC: React.FC<TOCProps> = ({
	toc,
	className = 'table-of-contents table-of-contents__left-border',
	minHeadingLevel: minHeadingLevelOption,
	maxHeadingLevel: maxHeadingLevelOption,
	...props
}) => {
	const themeConfig = useThemeConfig()

	const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel
	const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel

	const tocTree = useFilteredAndTreeifiedTOC({
		toc: toc,
		minHeadingLevel,
		maxHeadingLevel,
	})

	const tocHighlightConfig: TOCHighlightConfig | undefined = React.useMemo(() => {
		return {
			linkClassName: 'table-of-contents__link',
			linkActiveClassName: 'active',
			minHeadingLevel,
			maxHeadingLevel,
		}
	}, [minHeadingLevel, maxHeadingLevel])
	useTOCHighlight(tocHighlightConfig)

	return (
		<Box className={'thin-scrollbar'}>
			<TOCItemTree toc={tocTree} className={className} linkClassName={'table-of-contents__link'} {...props} />
		</Box>
	)
}

export default TOC
