---
title: ERC721 single-copy NFT Sale
description: The smart contract standard to manage unique tokens.
keywords: [ERC-721, ERC721, Deploy, Starton, Smart contracts, parameters, functions]
---

# ERC721 single-copy NFT Sale

The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT) and out-of-the-box compatible with Opensea. In an ERC721, every NFT is unique which means you have to reference the content for each NFT.

The smart contract to help you sell ERC721 tokens. In a video game, you can sell a piece of land.

The sale version enables you to mint a new token and sell it to your users. It helps you set up a whole sale choosing when it starts and ends, set a maximum number of tokens that can be sold in total or to the same user.

Notice that the baseURI of the ERC721 contract should be the a URI that is linked to a directory on ipfs or your centralized server because when minting a new token, the URI will be added to the id. For example, `https://ipfs.io/QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR/0`

## Parameters

-   **definitiveTokenAddress:** The token address of the ERC721 that you want to sell.
-   **definitivePrice:** The price that the NFTs will be sold for.
-   **definitiveStartTime:** The time when the sale will begin and users can mint tokens.
-   **definitiveEndTime:** The time when the sale will end and users couldn't mint anymore tokens.
-   **definitiveMaxTokensPerAddress:** The maximum amount of tokens that can be minted by a single address.
-   **definitiveMaxSupply:** The maximum amount of tokens that can be minted during the sale.
-   **definitiveFeeReceiver:** The address that will receive all the price paid to mint the NFTs.

## Functions

| Function            | Input Parameters             | Description                                                                                                                                                              |
| ------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token               | None                         | Returns the NFT contract where the new tokens will be minted at.                                                                                                         |
| price               | None                         | Returns the price to mint one NFT in WEI.                                                                                                                                |
| startTime           | None                         | Returns the start time of the sale.                                                                                                                                      |
| endTime             | None                         | Returns the end time of the sale.                                                                                                                                        |
| maxTokensPerAddress | None                         | Returns the max number of tokens that a address can mint.                                                                                                                |
| leftSupply          | None                         | The left amount of token that can be minted during this sale.                                                                                                            |
| tokensClaimed       | (address)                    | The amount of token claimed per address                                                                                                                                  |
| mint                | (address to)                 | Mint a new token to a specific address from the token collection. Notice the minter must send the required amount defined by price.                                      |
| mintBatch           | (address to, uint256 amount) | Mint nth new tokens to a specific address from the token collection. Notice the minter must send the required amount defined by price times the amount of tokens minted. |
| withdraw            | None                         | Withdraw the price paid for the mints                                                                                                                                    |
