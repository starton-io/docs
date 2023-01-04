---
title: Available event types
description: You can configure watcher on blockchain events. Learn about available event types.
keywords: [Available event types, Starton, Watchers, Monitor, Transaction]
---
# Available event types

The currently available event types are

|Event type|Description|
|---|---|
|`ADDRESS_ACTIVITY`|Triggers when an address receives base currency or creates a transaction (equivalent to ADDRESS_RECEIVED_NATIVE_CURRENCY and ADDRESS_SENT_NATIVE_CURRENCY combined).|
|`ADDRESS_RECEIVED_NATIVE_CURRENCY`|Triggers when an address receives some of the blockchain's native tokens (ex: ETH for Ethereum)|
|`ADDRESS_SENT_NATIVE_CURRENCY`|Triggers when an address sends some of the blockchain's native tokens (ex: ETH for Ethereum)|
|`EVENT_TRANSFER`|Triggers when an ERC20 transfers tokens.|
|`EVENT_MINT`|Triggers when an ERC20 mints new tokens.|
|`EVENT_APPROVAL`|Triggers when a new approval is made on contract.|
|`ERC721_EVENT_TRANSFER`|Triggers when an ERC721 transfers an NFT token.|
|`ERC1155_EVENT_TRANSFER_SINGLE`|Triggers when an ERC1155 transfers a single NFT token.|
|`ERC1155_EVENT_TRANSFER_BATCH`|Triggers when an ERC1155 transfers a batch of NFT tokens.|


**Related topics**

- More on [Transactions](/Transactions/creating-a-transaction.mdx)
- More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
- More on [Developer mode](/Developer/Discovering-coding-interface.md)
