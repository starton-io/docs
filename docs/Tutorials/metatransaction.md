---
title: How to create a metatransaction 
description:  Learn more about metatransactions and how 
---

# How to create a meta transaction

## What is a meta transaction?

A meta transaction is a type of transaction that allows a user to pay for gas fees or transaction fees on behalf of someone else. This means that instead of the recipient paying for the transaction fees themselves, the fees are paid by a third-party, typically a relayer, on their behalf.

Meta transactions are commonly used in decentralized applications (dApps) that run on blockchain networks, such as Ethereum. These dApps often require users to pay for gas fees in order to execute transactions on the blockchain, which can be a barrier to entry for some users. Meta transactions can help reduce this barrier by allowing users to interact with the dApp without needing to hold cryptocurrency or pay for gas fees themselves.

Meta transactions are often implemented using smart contracts, which can execute the transaction and reimburse the user who paid for the gas fees. This mechanism can be beneficial for both users and dApp developers, as it can help increase user adoption and reduce the cost of using the dApp.

Meta transactions are one of the most powerful features that we can have in a smart contract, it can empower users to not have to worry about fees when submitting a transaction.

Imagine that one of your user have some ERC20 tokens in his wallet however no ETH to transfer them or do anything with them. With meta transaction, the user can sign the transaction to transfer their tokens to another address and you are going to submit the transaction and pay the gas fees for him.


:::info PREREQUISITES 
- nodejs with at least version 16
- npm installed
- ethersjs 5

:::



:::info STARTON LIBRARY

You will need to have an already deployed token from the Starton library (it can be ERC20, ERC721 or ERC1155). Smart contract templates from Starton library integrates metatransactions.
You do not need to deploy a specific metatransaction template.

:::

## Computing the signature of the user of the transaction

The main feature with metatransaction will come with the `executeMetaTransaction` function. 

The function requires arguments we need to compute. First, you need to compute the signature of the user of the transaction. 

To do so here is a example of code that will create a signature from a `setApprovalForAll(true)` call.

```jsx
import { ethers } from "hardhat";
import axios from "axios";

async function createMetatransaction() {
  // Load the configuration necessary to use axios with starton
  const apiKey = ""; // It isn't recommanded to put his api key directly in his code but for the easiness of the tutorial we are going to put it here
  const network = ""; // Need to set the network for this
  const url = "https://api.staging.starton.io/v3/smart-contract";
  const config = {
    headers: {
      "x-api-key": apiKey,
    },
  };

  // Load the wallet, can be using the private key or using metamask fpr exemple with this code
  /*
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const wallet = provider.getSigner();
  */
  const privateKey = "";
  const wallet = new ethers.Wallet(privateKey);

  // Load the contract into etherjs using his abi and contractAddress
  const contractAddress = "";
  const contractABI = [];
  const instanceERC721 = new ethers.Contract(
    contractAddress,
    contractABI,
    wallet
  );

  // Create the typed transaction
  const metaTransactionType = [
    {
      name: "nonce",
      type: "uint256",
    },
    {
      name: "from",
      type: "address",
    },
    {
      name: "functionSignature",
      type: "bytes",
    },
  ];

  // Load everything needed for the transaction using the interact from starton
  const name = await axios.post(
    `${url}/${network}/${contractAddress}/read`,
    { functionName: "name", params: [] },
    config
  );
  const version = await axios.post(
    `${url}/${network}/${contractAddress}/read`,
    { functionName: "ERC712_VERSION", params: [] },
    config
  );
  const nonce = await axios.post(
    `${url}/${network}/${contractAddress}/read`,
    { functionName: "getNonce", params: [await wallet.getAddress()] },
    config
  );
  const chainId = await axios.post(
    `${url}/${network}/${contractAddress}/read`,
    { functionName: "getChainId", params: [] },
    config
  );

  // Creates the domain type for the EIP712 transaction that will give more insight on the transaction
  const domainType = {
    name: name.data.response,
    version: version.data.response,
    verifyingContract: instanceERC721.address,
    salt: "0x" + parseInt(chainId.data.response).toString(16).padStart(64, "0"),
  };

  // Create the function signature that will be called by the user (here a setApprovalForAll but it can be anything from the contract)
  const functionSignature = instanceERC721.interface.encodeFunctionData(
    "setApprovalForAll",
    ["0x0000000000000000000000000000000000000000", true]
  );

  // Sign the transaction with the user wallet
  const signature = await wallet._signTypedData(
    domainType,
    {
      MetaTransaction: metaTransactionType,
    },
    {
      nonce: nonce.data.response.toString(),
      from: await wallet.getAddress(),
      functionSignature,
    }
  );

  // Split the signature acquired just before
  const { r, s, v } = ethers.utils.splitSignature(signature);

	console.log(r, s, v);
}

(async () => {
  createMetatransaction();
})();
```

## Calling the function executeMetaTransaction

Once it’s done you can execute the meta transaction like this:

```jsx
// Submit the transaction to the interact
  await axios.post(
    `https://api.starton.io/v3/smart-contract/${network}/${contractAddress}/call`,
    {
      functionName: "executeMetaTransaction",
      params: [await wallet.getAddress(), functionSignature, r, s, v],
      signerWallet: "", // The wallet you wish the transaction to submit
    },
    config
  );
```


Now that everything it’s done, you can connect your front-end where users will sign transactions. They can then be stored in a back-end to be executed in a meta transaction.