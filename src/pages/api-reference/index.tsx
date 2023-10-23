/*
| Developed by Dirupt
| Filename : index.tsx
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import styles from './styles.module.css'
import React from 'react'
import Layout from '@theme/Layout'

/*
|--------------------------------------------------------------------------
| Page
|--------------------------------------------------------------------------
*/
export default function ApiReferencePage() {
	React.useEffect(() => {
		// Create a script element to load the Scalar script
		const scalarScript = document.createElement('script')
		scalarScript.src = 'https://www.unpkg.com/@scalar/api-reference'
		scalarScript.async = true

		// Create a script element to load Swagger file
		// const swaggerScript = document.createElement('script')
		// swaggerScript.id = 'api-reference'
		// swaggerScript['data-url'] = 'http://localhost:3000/api/swagger.json'
		// swaggerScript.async = true

		// Script hooks
		// swaggerScript.onload = () => {
		// 	// The script has loaded, you can now use any functions or objects from it
		// 	console.log('Swagger script has been loaded.')
		// }
		scalarScript.onload = () => {
			// The script has loaded, you can now use any functions or objects from it
			console.log('Scalar script has been loaded.')
		}

		// Append the script element to the document's head
		// document.body.appendChild(swaggerScript)
		document.body.appendChild(scalarScript)

		// Cleanup: remove the script element when the component unmounts
		return () => {
			// document.body.removeChild(swaggerScript)
			document.body.removeChild(scalarScript)
		}
	}, [])

	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			<div className={styles.apicontainer} id={'api-reference-root'}>
				<script id="api-reference" data-url="/api/swagger.json"></script>
			</div>
		</Layout>
	)
}
