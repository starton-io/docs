/*
| Developed by Starton
| Filename : DocsVersionNavbarItem.tsx
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import React from 'react'
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal'
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem'
import type { Props } from '@theme/NavbarItem/DocsVersionNavbarItem'
import type { GlobalVersion } from '@docusaurus/plugin-content-docs/client'

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
const getVersionMainDoc = (version: GlobalVersion) => version.docs.find((doc) => doc.id === version.mainDocId)!

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
const DocsVersionNavbarItem: React.FC<Props> = ({ label: staticLabel, to: staticTo, docsPluginId, ...props }) => {
	const version = useDocsVersionCandidates(docsPluginId)[0]
	const label = staticLabel ?? version.label
	const path = staticTo ?? getVersionMainDoc(version).path

	return <DefaultNavbarItem {...props} label={label} to={path} />
}

export default DocsVersionNavbarItem
