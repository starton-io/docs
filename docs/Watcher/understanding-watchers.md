---
title: Understanding Monitor
description: Monitor inspects every block on all supported blockchains to continuously check for activity..
keywords: [Starton, Watchers, Monitor, Transaction]
---

# Understanding Monitor

**Monitor** inspects every block on all supported blockchains to continuously check for activity.
**Watchers** represent conditions that are checked upon inspection of the block.
When the conditions of a watcher are met, the watcher triggers and send a notification to the webhook provided during the watcher's creation.

**Monitor** enables you to have automated processes that will listen to activity on the blockchain.

You can create watchers to monitor specific events on any supported, and get notified on your backend when they are triggered.

![Watcher](src/Watcher.png)

**Related topics**

-   More on [Transactions](/Transactions/creating-a-transaction.mdx)
-   More on [Smart Contracts](creating-a-watcher.mdx)
-   More on [Developer mode](/Developer/Discovering-coding-interface.md)
