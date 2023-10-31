---
title: Available event types
description: You can configure watcher on blockchain events. Learn about available event types.
keywords: [Available event types, Starton, Watchers, Monitor, Transaction]
---

# Available event types

The currently available event types are:

## Monitoring Blockchain addresses
| Event type                         | Description                                                                                                                                                         |
|------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ADDRESS ACTIVITY`                 | Triggers when a transfer from or to an address is created, to track when native tokens transactions are created.|
| `ADDRESS RECEIVED NATIVE CURRENCY` | Triggers when a transfer to an address is created, to track when native tokens are received.                                                                    |
| `ADDRESS SENT NATIVE CURRENCY`     | Triggers when a transfer event is created from an address, to track when native tokens are sent.                                                                        |

## Monitoring Smart Contracts
| Event type                         | Description                                                                                                                                                         |
|------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `EVENT TRANSFER`                   | Triggers when an ERC20 contract emits a transfer event, to track when tokens are moved.                                                                                                                         |
| `EVENT MINT`                       | Triggers when an ERC20 contract emits a transfer event where sending address is 0x0, to track when new tokens are created.                                                                                                                           |
| `EVENT APPROVAL`                   | Triggers when an ERC20 contract emits an approval event, to track when a new allowance has been granted or revoked.                                                                                                                |
| `ERC721 EVENT TRANSFER`            | Triggers when an ERC721 contract emits a transfer event, to track when an NFT is moved.                                                                                                                       |
| `ERC1155 EVENT TRANSFER SINGLE`    | Triggers when an ERC1155 contract emits a transfer event, to track when one NFT is moved.                                                                                                             |
| `ERC1155 EVENT TRANSFER BATCH`     | Triggers when an ERC1155 contract emits a batch transfer event, to track when several NFTs are moved.                                                                                                      |
| `Custom Event(s)`                  | Triggers when a smart contract emits one or multiple events you select from your ABI.                                                                                                     |

**Related topics**

-   More on [Transactions](/Transactions/creating-a-transaction.mdx)
-   More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
-   More on [Developer mode](/Developer/Discovering-coding-interface.md)
