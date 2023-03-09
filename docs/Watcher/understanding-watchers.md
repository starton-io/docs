---
title: Understanding Monitor
description: Monitor inspects every block on all supported blockchains to continuously check for activity..
keywords: [Starton, Watchers, Monitor, Transaction]
---

# Understanding Monitor

**Monitor** inspects every block on all supported blockchains to continuously check for activity.
**Watchers** represent conditions that are checked upon inspection of the block.
When the conditions of a watcher are met, the watcher triggers and create a webhook and send to the server url provided during the watcher's creation.

:::caution 

Webhooks can't be received on localhost. During development, you can use ngrok or webhook.site to provide you with a URL. Read more on [Webhooks](webhooks.md). 
:::

**Monitor** enables you to have automated processes that will listen to activity on the blockchain.

You can create watchers to monitor specific events on any supported, and get notified on your backend when they are triggered.

![Watcher](src/Watcher.png)

**Related topics**

-   More on [Transactions](/Transactions/creating-a-transaction.mdx)
-   More on [Watchers](creating-a-watcher.mdx)
-   More on [Developer mode](/Developer/Discovering-coding-interface.md)
