---
title: Understanding message signings
description: Learn what is a message signing
keywords: [Wallet, Starton, Smart contracts, Metamask, Transaction]
---

import threePoints from "./assets/three-points.png"
import signMessage from "./assets/sign-a-message.png"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import CodeBlock from "@theme/CodeBlock"

# Signing a message

Cryptographic signatures are a key part of the blockchain. They are used to prove ownership of an address without exposing its private key.

This is primarily used for signing transactions but can also be used to sign arbitrary messages.

A message signature mathematically guarantees that certain message was signed by certain (secret) private key, which corresponds to certain (non-secret) public key.

After a message is signed, the message and the signature cannot be modified and thus message authentication and integrity is guaranteed.

Anyone, who knows the public key of the message signer, can verify the signature.

![sign a message](assets/signAMessage.svg)

## Signing a message with a Wallet



They are used to prove ownership of an address without exposing its private key. This is primarily used for signing transactions but can also be used to sign arbitrary messages.

:::caution

After a message is signed, the message and the signature cannot be modified and thus message authentication and integrity is guaranteed. Anyone, who knows the public key of the message signer, can verify the signature.

:::

<Tabs>
<TabItem value="code" label="From Code">

```jsx showLineNumbers
const axios = require("axios")
// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": "YOUR_API_KEY",
	},
})

// SIGNING A MESSAGE
const signMessage = async (address, message) => {
	try {
		return await startonApi.post(`/v3/kms/wallet/${address}/sign-message`, {
			message, // The message you want to sign with the address required in the route.
		})
	} catch (error) {
		console.log(error.response.data)
	}
}

signMessage("0x", "Hello, World!")
	.then((response) => console.log(response))
	.catch((error) => console.log(error))
```

</TabItem>
<TabItem value="dashboard" label="From Dashboard">

<img src={signMessage} style={{ width: 500 }} />

1. Click <img src={threePoints} style={{width: 30}} className="icon"/>.
1. Click **Sign**.
1. Enter your message.
1. Click **Submit**.

After loading, your signature appears.

</TabItem>
</Tabs>
