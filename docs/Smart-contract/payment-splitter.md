---
title: Payment splitter
---

# Payment Splitter

The smart contract template to split all payments between a list of users with a defined share for each of them.
The sender is not aware that the payment is split. The contract handles the split in a transparent manner.

You can split the payment equally or in any proportion. You assign a number of shares to each account. For every amount the contract address receives, a proportion can be released to the specified accounts.

## Parameters

-   **payees**: The list of addresses that will receive a split of all the payments.
-   **shares**: The share that each addresses will get from the payment.

## Functions

| Function      | Input Parameters                | Description                                                                        |
| ------------- | ------------------------------- | ---------------------------------------------------------------------------------- |
| totalShares   | None                            | Returns the total number of shares hold by all the payees.                         |
| totalReleased | None                            | Returns the total amount of token that has already been released.                  |
| totalReleased | (IERC20 token)                  | Returns the total amount of token that has already been released.                  |
| shares        | (address account)               | Returns the amount of shared that an account have.                                 |
| released      | (address account)               | Returns the amount of tokens that has already been released to a specific account. |
| released      | (IERC20 token, address account) | Returns the amount of token that has already been released to a specific account.  |
| payee         | (uint256 index)                 | Returns the nth payee holding a share.                                             |
| releasable    | (address account)               | Returns the amount of tokens that can be released to a specific account.           |
| releasable    | (IERC20 token, address account) | Returns the amount of token that can be released to a specific account.            |
| release       | (address payable account)       | Release all available and due tokens to a specific account.                        |
| release       | (IERC20 token, address account) | Release all available and due token to a specific account.                         |
