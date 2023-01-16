---
title: Using Starton in your application
---

# Using Starton in your application

You can use Starton to turn your application into a dApp in a few steps.

Let's create a project to make a transaction using Starton.

You will need:

-   [Node.js](https://nodejs.org/en/)
-   [Starton wallet](https://starton.io/)
-   [Starton API Key](https://starton.io/)
-   A wallet address to receive the transaction.

## Creating an Application project

1. Create a directory for your app.
1. Create a directory named `src`.
1. In your terminal, install the express package using
   `npm i express`
1. In `src`, create a `index.js` file.
1. In `index.js`, enter the following lines to set up a port for your project:

```jsx showLineNumbers
const express = require("express")
const routes = require("./routes")
const app = express()
app.use(bodyParser.json())
const port = 3001 // Port of the project

app.set("port", port) // Set the port of the project
app.use("/", routes)
app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})
```

This will deploy your app on port `3001`.

Now for the good part, let's connect Starton to your application.

## Connecting Starton to your application

1. In src, create a `routes.js` file.

    ```jsx showLineNumbers
    const express = require("express")
    const axios = require("axios")
    const router = express.Router()
    ```

1. In it, first authenticate with your API KEY.

    ```jsx showLineNumbers
    // AUTHENTICATING TO THE API USING YOUR API KEY
    const startonApi = axios.create({
    	baseURL: "https://api.starton.io",
    	headers: {
    		"x-api-key": "YOUR API KEY ",
    	},
    })
    ```

1. Make an API call to create a transaction.

    ```jsx showLineNumbers
    const createTx = async (value, to, signerWallet, network) => {
    	try {
    		return await startonApi.post("/v3/transaction", {
    			value,
    			to, // receiving wallet
    			signerWallet, // sender wallet
    			network,
    		})
    	} catch (error) {
    		console.log(error.response.data)
    	}
    }
    createTx(
    	"1",
    	"0x0000000000000000000000000000000000000000", // enter the receiver wallet address
    	"0x0000000000000000000000000000000000000000", // enter the signer wallet address
    	"binance-testnet", //network on which the transaction will appear
    	"average", // Optional: speed of your transaction, WARNING: your transaction speed has an impact on gas fees.
    )
    	.then((response) => console.log(response))
    	.catch((error) => console.log(error))
    ```

1. Display a message on your `localhost:3001` to inform you that the transaction is successful.

    ```jsx showLineNumbers
    router.get("/", (req, res) => {
    	res.send("Transaction successful")
    })

    module.exports = router
    ```

## Starting your application

1. In your terminal, run `node src`.

You created your first transaction with Starton. Congratulations!

If you already created your app, select one of the following guides to fit your usecase.

Now that you're all set, what would you like to do with Starton in your app?

## Choose your use case

<div class="row-is-multiline">

<div class="col col--2" class="cards">
<a class="button-card button-card--vertical" href="/docs/Tutorials/deploy-first-smart-contract"><h3>Deploy</h3>
<div class="button-card__inner">
<p color="white">Deploy your first smart contract. </p>
</div>
</a>
</div>

<div class="col col--2" class="cards">
<a class="button-card button-card--vertical" href="/docs/Tutorials/storing-files-on-IPFS"><h3>Store</h3>
<div class="button-card__inner">
<p>Upload files on IPFS with Starton.</p>
</div>
</a>
</div>

<div class="col col--2" class="cards">
<a class="button-card button-card--vertical" href="/docs/Tutorials/monitoring-blockchain-activity"><h3>Monitor</h3>
<div class="button-card__inner">
<p>Monitor blockchain events with watchers.</p>
</div>
</a>
</div>
</div>
