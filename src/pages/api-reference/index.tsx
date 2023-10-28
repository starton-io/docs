/*
| Developed by Dirupt
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import React from 'react'
import Layout from '@theme/Layout'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
export default function ApiReferencePage() {
	React.useEffect(() => {
		const scalarScript = document.createElement('script')
		scalarScript.src = 'https://www.unpkg.com/@scalar/api-reference@0.8.4'
		scalarScript.async = true

		scalarScript.onload = () => {
			console.log('Scalar script has been loaded.')
		}

		document.body.appendChild(scalarScript)

		return () => {
			document.body.removeChild(scalarScript)
		}
	}, [])

	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials" noFooter>
			<div className={'api-container'} id={'api-reference-root'}>
				<script
					id="api-reference"
					data-url="https://raw.githubusercontent.com/starton-io/starton-openapi/master/starton-openapi.json"
					data-proxy-url="https://api.scalar.com/request-proxy"
				></script>
			</div>
		</Layout>
	)
}
