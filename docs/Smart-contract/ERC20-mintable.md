---
title: Fungible Token with mintable supply (ERC20)
description: The functions for ERC20 Smart contract template
---

# Fungible Token with mintable supply (ERC20)

The mintable version enables the creator to mint new tokens at any time.

The smart contract template for fungible tokens. New tokens can be minted after the initial emission. In a video game, mintable fungible tokens can represent the currency gamers can spend in-game.

## Parameters

-   **Name**: Name of the Smart contract on the blockchain.
-   **Symbol**: The symbol of your token.
-   **Initial Supply**: The initial amount of tokens you want to create.
-   **Owner Or Multi Sig Contract**: The address of the owner of the contract.

## Functions

| Function           | Input Parameters                           | Description                                                                                                                                                                                 |
| ------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DEFAULT_ADMIN_ROLE | None                                       | Returns the value of the admin role.                                                                                                                                                        |
| PAUSER_ROLE        | None                                       | Returns the value of the pauser role.                                                                                                                                                       |
| MINTER_ROLE        | None                                       | Returns the value of the minter role.                                                                                                                                                       |
| allowance          | (address owner, address spender)           | Returns the amount that a spender can transfer on behalf of the owner.                                                                                                                      |
| approve            | (address to, uint256 amount)               | Returns true when the allowance of a spender by the specified amount has successfully been increased.                                                                                       |
| balanceOf          | (address owner)                            | Returns the number of tokens assigned to an owner.                                                                                                                                          |
| burn               | (address, uint256 amount)                  | Erases a specified amount of token.                                                                                                                                                         |
| burnFrom           | (address account, uint256 amount)          | Erases a specified amount of token from a wallet address. Allowance of the spender must be higher than the amount of tokens being burnt.                                                    |
| decimals           | None                                       | Returns the number of decimals you can divide your token into. (ex. 1 ETH = 10^18 Wei)                                                                                                      |
| decreaseAllowance  | (address spender, uint256 subtractedValue) | Returns true when the allowance of the spender has successfully been decreased.                                                                                                             |
| getRoleAdmin       | (bytes32 role)                             | Returns the role that can control the specified role.                                                                                                                                       |
| grantRole          | (bytes32 role, address account)            | Grants a role to the address specified.                                                                                                                                                     |
| hasRole            | (bytes32 role, address account)            | Returns true if the address specified has been granted the role.                                                                                                                            |
| increaseAllowance  | (address spender, uint256 addedValue)      | Returns true when the allowance of the spender has successfully been increased.                                                                                                             |
| mint               | (address to, uint256 amount)               | Mint a new number of tokens to a specified address                                                                                                                                          |
| name               | None                                       | Returns the descriptive name of the smart contract.                                                                                                                                         |
| pause              | None                                       | Called to pause by address with a pauser role, disables every variable state changes of the contract.                                                                                       |
| paused             | None                                       | Returns true when the contract is paused. Returns false otherwise.                                                                                                                          |
| renounceRole       | (bytes32 role, address account)            | Removes a role from an address. The address must be the caller address.                                                                                                                     |
| revokeRole         | (bytes32 role, address account)            | Removes a role from an address.                                                                                                                                                             |
| supportsInterface  | (bytes4 interfaceID)                       | Returns true if the contract implements the specified interface.                                                                                                                            |
| symbol             | None                                       | Returns the symbol set for this contract.                                                                                                                                                   |
| totalSupply        | None                                       | Returns the total amount of tokens.                                                                                                                                                         |
| transfer           | (address to, uint256 amount)               | Returns true when the transfer of tokens has been successful to the specified address.                                                                                                      |
| transferFrom       | (address from, address to, uint256 amount) | Returns true when the transfer of tokens has been successful to the specified address. Notice that the allowance of the spender must be higher than the amount of tokens being transferred. |
| unpause            | None                                       | Called to unpause by address with a pauser role.                                                                                                                                            |
