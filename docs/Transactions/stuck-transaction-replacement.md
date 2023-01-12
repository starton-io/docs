---
title: Transactions management 
---

# Transactions management 

When sending a transaction, you can face issues with processing.
 First, you got nonce issues. When sending a transaction without having the correct nonce, the next nonce available in database and the nonce of the transaction might be desynchronized. 

Then, if the gas speed set is low and there are a lot of transactions to be sent to the blockchain, minors won't be incentivized to pick yours. 

With Starton, you can set your project strategy so that our Relayer increases the gas speed and handles stuck transactions. 

## Setting your Relayer strategy

Setting the strategy of your Relayer allows Starton to manage stuck transactions until they reach a maximum amount. You need to set these values by using Starton's API. First, we will check the default Relayer strategy, then we will set your own custom strategy.

### Checking your current Relayer strategy 

To check your current Relayer strategy, you can use the following snippet. Simply enter your api key
 and select the network on which you want to set up your Relayer strategy. 

```
// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
  baseURL: 'https://api.starton.io',
  headers: {
    'x-api-key': 'Your API KEY ',
  },
});
/// RETRIEVE SETTINGS 
 startonApi.get('/v3/setting/relayer/{network}')
     .then((response) => {
	console.log(response.data)
})
```

Before you set your strategy, by default, this request will return: 

```
{
"id": "string",
"projectId": "string",
"network": "{network}",
"unstuckMaxGasPrice": "string",
"unstuckMissingNonce": true,
"unstuckMissingNonceDelay": 0,
"unstuckCustomGasPrice": true,
"unstuckAutomaticGasPrice": true,
"unstuckGasPriceDelay": 0,
"createdAt": "2023-01-11T16:17:54.201Z",
"updatedAt": "2023-01-11T16:17:54.201Z"
}
```

The following parameters will be used to set your own gas strategy: 

- "network": the network on which strategy is set
- "unstuckMaxGasPrice": the maximum gas price for which you allow Starton to reprocess stuck transactions 
- "unstuckMissingNonce": whether or not you allow Starton to help with stuck missing nonces 
- "unstuckMissingNonceDelay": number of seconds you wish to wait for Starton to act on missing nonce,
- "unstuckCustomGasPrice": whether or not you allow Starton to handle issues related to a transaction with custom gas price,
- "unstuckAutomaticGasPrice": whether or not you allow Starton to handle issues related to a transaction with chosen gas speed,
- "unstuckGasPriceDelay": number of seconds you wish to wait for Starton to act on transactions with a gas price issue 

### Setting your Relayer strategy 

To set your current Relayer strategy, you can use the following snippet. Simply enter your api key
and select the network on which you want to set up your Relayer strategy. Then, you will set the parameters, seen above, according to your needs. 

```
// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
  baseURL: 'https://api.starton.io',
  headers: {
    'x-api-key': 'Your API KEY ',
  },
});
/// 
 startonApi.post('/v3/setting/relayer/{network}{
  "unstuckMaxGasPrice": "string",
  "unstuckMissingNonce": true,
  "unstuckMissingNonceDelay": 3600,// in seconds 
  "unstuckCustomGasPrice": true,
  "unstuckAutomaticGasPrice": true,
  "unstuckGasPriceDelay": 3600 // in seconds 
}')
     .then((response) => {
	console.log(response.data)
})
```

If the request is successful, your settings have been changed. To understand any other return, you can see our API reference (lien). 