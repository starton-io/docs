---
title: ERC1155 NFT collection Sale in an Auction
description: The smart contract standard to manage unique tokens.
---
# ERC1155 NFT collection Sale in an Auction

<p>The smart contract template to help you sell ERC1155 tokens in the form of an auction. In a video game, you can sell a piece of equipment to the player placing the highest bid.</p>
	<p>Notice you can start a new auction by simply calling the startNewAuction function without having to deploy a new contract.</p>

## Parameters

<ul>
	<li><strong>definitiveTokenAddress:</strong> The token address of the ERC721 that you want sale</li>
	<li><strong>definitiveFeeReceiver: </strong> The address that will receive all the price paid to mint the NFTs</li>
	<li><strong>initialStartingPrice: </strong> The initial price that the NFT will be sold for</li>
	<li><strong> initialMinPriceDifference: </strong> The price increase that a user needs to at least put to bid on top of the current auction winner</li>
	<li><strong>initialStartTime: </strong> The time when the sale will begin and users can bid. Timestamp in seconds. </li>
	<li><strong>initialEndTime: </strong> The time when the sale will end and users couldn't bid anymore. Timestamp in seconds. </li>
	<li><strong>initialTokenId: </strong> The URI that will be append in the end of the base token URI for the token that will be minted</li>
	<li><strong>initialTokenAmount: </strong> The amount of tokens that will be minted to the winner of the auction</li>
	</ul>

## Functions

| Function | Input Parameters  | Description |
| --- | --- | --- |
| token | None | Returns the NFT contract where the new tokens will be minted at. |
| currentPrice | None | Returns the current price of the auction. |
| minPriceDifference | None | Returns the minimum difference between the currentPrice and the bided amount that there should be. |
| currentAuctionWinner | None | Returns the current winner of the auction. Notice that if it’s equal to 0 then there isn’t any winner yet. |
| startTime | None | Returns the start time of the sale. |
| endTime | None | Returns the end time of the sale. |
| tokenId | None | Returns the id that the token being auctioned will have. |
| tokenAmount | None | Returns the amount of tokens being auctioned. |
| bid | None | Bid for the auction and set the price of the bid by the amount you send to the contract. |
| claim | None | Mint a new token with the tokenURI to the winner of the auction. |
| startNewAuction | (uint256 newStartingPrice, uint256 newMinPriceDifference, uint256 newStartTime, uint256 newEndTime, uint256 newTokenId, uint256 newTokenAmount) | Start a whole new auction with new parameters you can define. Notice that no current auction can be ongoing and the caller must be the owner of the smart contract. |
| withdraw | None | Withdraw the price paid for the mints. |
| owner | None | Returns the owner of the smart contract. |
| renounceOwnership | None | Renounce the ownership of the smart contract. |
| transferOwnership | (address newOwner) | Transfer the ownership of the contract to a specified address. |
