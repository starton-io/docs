---
title: Token standard (Child ERC20 fixed)
description: The functions for Child ERC20 Smart contract template
---
# Token standard (Child ERC20 fixed)

The smart contract template for bridging fixed fungible tokens between Ethereum and Polygon. The fixed supply version of this standard guarantees no token will ever be created after the initial emission. Therefore some flexibility is sacrificed for the sake of more trust towards the token. It enables bridging your tokens from Ethereum to Polygon.

## Functions

| Function | Input Parameters  | Description |
| --- | --- | --- |
| DEFAULT_ADMIN_ROLE | None | Returns the address of the admin role. |
| PAUSER_ROLE | None | Returns the value of the pauser role.
| DEPOSITOR_ROLE | None  | Returns the value of the depositor role. |
| allowance  | (address owner, address spender) | Returns the amount that a spender can transfer on behalf of the owner. |
| approve | (address to, uint256 amount) | Returns true when the allowance of a spender by the specified amount has successfully been increased. |
| balanceOf | (address owner) | Returns the number of tokens assigned to an owner. |
| burn | (address, uint256 amount) | Erases a specified amount of token.   |
| burnFrom  | (address account, uint256 amount) | Erases a specified amount of token from a wallet address. Allowance of the spender must be higher than the amount of tokens being burnt. |
| decimals  | None | Returns the number of decimals you can divide your token into. (ex. 1 ETH = 10^18 Wei)  |
| decreaseAllowance | (address spender, uint256 subtractedValue) | Returns true when the allowance of the spender has successfully been decreased.  |
| deposit | (address user, bytes depositData) | Deposit tokens that were initially coming from Ethereum. |
| getRoleAdmin | (bytes32 role) | Returns the role that can control the specified role. |
| grantRole | (bytes32 role, address account) | Grants a role to the address specified. |
| hasRole | (bytes32 role, address account) | Returns true if the address specified has been granted the role.  |
| increaseAllowance | (address spender, uint256 addedValue) | Returns true when the allowance of the spender has successfully been increased.  |
| name | None | Returns the descriptive name of the smart contract. |
| pause | None | Called to pause by address with a pauser role, disables every variable state changes of the contract. |
| paused | None | Returns true when the contract is paused. Returns false otherwise.  |
| renounceRole | (bytes32 role, address account) | Removes a role from an address. The address must be the caller address. |
| revokeRole | (bytes32 role, address account) | Removes a role from an address. |
| supportsInterface | (bytes4 interfaceID) | Returns true if the contract implements the specified interface. |
| symbol | None | Returns the symbol set for this contract. |
| totalSupply | None  | Returns the total amount of tokens. |
| transfer | (address to, uint256 amount) | Returns true when the transfer of tokens has been successful to the specified address. |
| transferFrom | (address from, address to, uint256 amount) | Returns true when the transfer of tokens has been successful to the specified address. Notice that the allowance of the spender must be higher than the amount of tokens being transferred. |
| unpause | None  | Called to unpause by address with a pauser role. |
| withdraw | (uint256 amount) | Transfer the tokens from Polygon to Ethereum. |
