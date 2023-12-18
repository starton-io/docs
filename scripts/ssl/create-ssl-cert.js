/*
| Developed by Starton
| Filename : create-ssl-cert.js
| Author : Philippe DESPLATS (philippe@starton.io)
*/

require('dotenv').config()
const fs = require('fs')
const devcert = require('devcert')

/*
|--------------------------------------------------------------------------
| Create .certs folder if don't exists
|--------------------------------------------------------------------------
*/
if (!fs.existsSync('./.certs')) {
	fs.mkdirSync('./.certs')
}

/*
|--------------------------------------------------------------------------
| Dev cert configurations
|--------------------------------------------------------------------------
*/
const HOSTNAME = process.env.HOSTNAME || 'docs.local.starton-staging.com'
const domains = [HOSTNAME]

/*
|--------------------------------------------------------------------------
| Dev cert generation
|--------------------------------------------------------------------------
*/
devcert
	.certificateFor(domains, { getCaPath: true })
	.then(({ key, cert, caPath }) => {
		fs.writeFileSync(`./.certs/${HOSTNAME}.key`, key)
		fs.writeFileSync(`./.certs/${HOSTNAME}.cert`, cert)
		fs.writeFileSync('./.certs/.capath', caPath)
	})
	.catch(console.error)
