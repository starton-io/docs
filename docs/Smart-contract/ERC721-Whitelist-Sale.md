---
title: NFT standard (ERC721)
description: The smart contract standard to manage unique tokens.
---
# NFT standard (ERC721)

The ERC721 is a smart contract standard which is specialised in single-copy Non Fungible Tokens (NFT) and out-of-the-box compatible with Opensea. In an ERC721, every NFT is unique which means you have to reference the content for each NFT.

## Functions

| Function | Input Parameters  | Description |
| --- | --- | --- |
| DEFAULT_ADMIN_ROLE | None | Returns the address of the admin role. |
| LOCKER_ROLE | None | Returns the value of the depositor role.|
| PAUSER_ROLE | None | Returns the value of the pauser role. |
| MINTER_ROLE | None | Returns the value of the minter role.|
| approve | (address to, uint256 amount) | Returns true when the allowance of a spender by the specified amount has successfully been increased. |
| balanceOf | (address owner) | Returns the number of tokens assigned to an owner. |
| burn | (address, uint256 amount) | Erases a specified amount of token.   |
| contractURI | None | Returns a public URL that contains the metadata of the collection |
| getRoleAdmin | (bytes32 role) | Returns the role that can control the specified role. |
| grantRole | (bytes32 role, address account) | Grants a role to the address specified. |
| hasRole | (bytes32 role, address account) | Returns true if the address specified has been granted the role.  |
| isApprovedForAll | (address owner, address operator) | Returns true if an operator address is authorized to spend all the tokens of the owner, returns false otherwise.  |
| lockMint | None | Revokes the ability to mint. Sender must have the LOCKER_ROLE.  |
| mint | (address to, uint256 amount) | Mint a new number of tokens to a specified address  |
| name | None | Returns the descriptive name of the smart contract. |
| ownerOf | (uint256 tokenId) | Returns the address that own the token. |
| pause | None | Called to pause by address with a pauser role, disables every variable state changes of the contract. |
| paused | None | Returns true when the contract is paused. Returns false otherwise.  |
| renounceRole | (bytes32 role, address account) | Removes a role from an address. The address must be the caller address. |
| revokeRole | (bytes32 role, address account) | Removes a role from an address. |
| safeMint | (address to, string metadataURI) | Mint a new token with a specified metadata URI and ensure that the to address can receive this token |
| safeTransferFrom | (address from, address to, uint256 tokenId, bytes data) | Transfer the ownership of a token. |
| safeTransferFrom | (address from, address to, uint256 tokenId) | Transfer the ownership of a token from one address to another. |
| setApprovalForAll | (address operator, bool approved) | Provides operators with approval to manage all the tokens held by a specific address  |
| setBaseContractURI | (string newBaseContractUri) | Set baseURI for all NFTs metadata in the contract.  |
| supportsInterface | (bytes4 interfaceID) | Returns true if the contract implements the specified interface. |
| symbol | None | Returns the symbol set for this contract. |
| tokenByIndex | (uint256 index) | Returns the token id of the nth token minted. |
| tokenOfOwnerByIndex | (address owner, uint256 tokenId) | Returns the nth tokens minted by a specified address. |
| tokenURI | (uint256 tokenId) | Returns the URI for a token. |
| totalSupply | None  | Returns the number of tokens minted. |
| transfer | (address to, uint256 amount) | Returns true when the transfer of tokens has been successful to the specified address. |
| transferFrom | (address from, address to, uint256 amount) | Returns true when the transfer of tokens has been successful to the specified address. Notice that the allowance of the spender must be higher than the amount of tokens being transferred. |
| unpause | None  | Called to unpause by address with a pauser role. |
