/*
| Developed by Starton
| Filename : index2.tsx
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
		scalarScript.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.1.3'
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
