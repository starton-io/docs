---
title: Understanding Transactions with the Relayer
description: Learn about blockchain lifecycle transactions. On Starton, the Relayer is a blockchain transaction management solution to create transactions, deploy and interact with smart contracts on the behalf of a user.
keywords: [Relayer, Starton, Smart contracts, Deploy, Interact, Transaction]
---

# Understanding Transactions with the Relayer

The **Relayer** is a blockchain transaction management solution to create transactions, deploy and interact with smart contracts on the behalf of a user.

As the underlying API on which are based the **Deploy** and **Interact** services, it enables developers to interact with blockchain from a simple request.

You can:
- make a standard transaction (sending funds to someone)
- call a smart contract’s function from the back-end
- deploy a new smart contract on supported blockchains networks

![Relayer](src/Relayer.png)

To resume, the **Relayer** acts as an API layer above blockchain protocols for smoother interactions.

**Relayer** is a service enabling centralised servers to interact with the blockchain. It can be used for example, when users want to pay the gas fees of their clients.

## The scope of the Relayer


Pre-chain, the Relayer:

- **Checks transaction**: The relayer verifies that the transaction format is valid.
- Estimates **gas price**: The relayer checks with blockchain providers and estimates how much the user will pay per unit of gas as a fee.
- Estimates **gas limit**  
- Sets a nonce to indicate the order of transactions:
- Sign with a KMS (AWS)

![Relayer prechain](src/schemaLight.jpg)

Then, the **Relayer** monitors the transaction:

- checks mempool
- checks nonce
- checks gas price



**Related topics**

- More on [Transactions](/Transactions/creating-a-transaction.mdx)
- More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
- More on [Developer mode](/Developer/Discovering-coding-interface.md)
