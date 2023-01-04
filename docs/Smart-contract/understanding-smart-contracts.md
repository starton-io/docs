---
title: Understanding smart contracts
description: Smart contracts are programs deployed on the blockchain. Their functions are executed with transactions. Learn more about smart contracts with Starton.
keywords: [Deploy, Import, Interact, Starton, Smart contracts]
---

# Understanding smart contracts

**Smart contracts** are programs deployed on the blockchain. Their functions are executed with transactions.

Starton allows you to access a collection of audited smart contracts covering most frequent use cases and needs.
It currently includes flavours of the classic **ERC20** (cryptocurrency), **ERC721** and **ERC1155** (NFT) smart contracts.

[comment]: <(We plan to include staking and multisig contracts in the near future and to have  the biggest smart contract library in the long run.)>

## Smart contract templates

## ERC20 - Creating your fungible token

The ERC20 is a smart contract standard made for fungible tokens (i.e: interchangeable tokens like coins).

|Smart Contract|Description|Blockchain|
|---|---|-|
|[ERC20 Token with fixed supply](/Smart-contract/ERC20-fixed-Meta.md)| This meta-transaction version enables you to send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC20 Token with mintable supply](/Smart-contract/ERC20-mintable-Meta.md)| This meta-transaction enables you to send transactions on behalf of your users so they can use their tokens without having to pay for gas fees.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|


## ERC721 - Deploy and sell your one-to-many NFTs

The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT) and out-of-the-box compatible with Opensea.
In an ERC721, every NFT is unique which means you have to reference the content for each NFT.

:::info

The ERC721 can still be used to upload several copies of the same content but is less optimised for this use case than the ERC1155.

:::

|Smart Contract|Description|Blockchain|
|---|----|-|
|[ERC721 NFT Smart Contract](/Smart-contract/ERC721-Meta.md)|The smart contract template to deploy single-copy NFTs.This version allows you to dissociate the wallet funding gas fees.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC721 NFT with limited supply](/Smart-contract/ERC721-Capped.md)|The capped ERC721 NFT smart contract template for single-copy Non Fungible Tokens (NFT).|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC721 single-copy NFT Sale](/Smart-contract/ERC721-Sale.md)|This version enables you to sell NFTs.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC721 NFT Sale in an Auction](/Smart-contract/ERC721-Auction-Sale.md)|This version enables you to sell NFTs to the highest bider in a time slot.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|



## ERC1155 - Deploy and sell one-to-many NFTs

The ERC1155 is a smart contract standard which is specialised in multiple-copies Non Fungible Tokens (NFT) and out-of-the-box compatible with Opensea. The ERC1155 enables you to create “collections” containing several copies of the same NFT.


|Smart Contract|Description|Blockchain|
|---|----|-|
|[ERC1155 NFTs collection](/Smart-contract/ERC1155-Meta.md)|The smart contract standard to manage multiple-copies NFTs.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC1155 NFT Collection Sale](/Smart-contract/ERC1155-Sale.md)|This version enables you to sell collections of NFTs.|![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|
|[ERC1155 NFT collection Sale in an Auction](/Smart-contract/ERC1155-Auction.md)|This version enables you to sell collections of NFTs to the highest bider in a time slot. |![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|

## Other templates

|Smart Contract|Description|Blockchain|
|---|----|-|
|[Payment Splitter](/Smart-contract/payment-splitter.md)|The smart contract to split all payments between a list of users with a defined share for each of them. The sender is not aware that the payment is split. The contract handles the split in a transparent manner. |![Ethereum logo](src/Ethereum.png) ![Bnb chain logo](src/bnb_chain.png) ![Avalanche logo](src/Avalanche.png) ![Matic logo](src/Matic.png)|





**Related topics**

- More on [Transactions](/Transactions/creating-a-transaction.mdx)
- More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
- More on [Developer mode](/Developer/Discovering-coding-interface.md)
