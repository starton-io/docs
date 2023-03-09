---
title: Understanding key management systems
displayed-sidebar: tutorialSidebar
description: To interact with blockchains, you need to sign transactions with a wallet to prove ownership over the associated address. Learn about key management systems
keywords: [Key Management Systems, Starton, Wallets, Deploy, Interact, Transaction]
---

# Understanding Key Management Systems

To interact with blockchains, you need to sign transactions with a wallet to prove ownership over the associated address.

Anyone that has access to the private keys of the wallet would be able to use the wallet to sign transactions.
This is why private keys safety is crucial.

A **KMS** (Key Management System) is a piece of hardware that keeps private keys safe in the cloud.
For example, Amazon Web Services provides a **KMS** service.

Within a **KMS**, it's impossible to access the private keys. You can only ask the KMS to sign transactions or messages.
No one can ever see the private keys. Not even us, not even you.

The KMS can be seen as a Ledger in the cloud.

The purpose of a **KMS** is to protect private keys.
If you get hacked, the hacker might use the KMS to sign transactions but once removed from the system, the wallet becomes safe again.

If the hacker would have access to the private keys, the wallet would be corrupted forever.

**Starton** currently supports the AWS Key management system.

## Connecting AWS Key Management Systems

> **Starton** provides test wallets hosted on our **Key Management System**, but when going in production, to maintain control over your wallets, you should use your own KMS.

To connect **Starton** to your **AWS KMS**, you can:

-   grant access to **Starton** only to one wallet of your **KMS**
-   grant full access to **Starton** on your **KMS**

> By granting access to **Starton** only to one wallet, you’ll have to create new wallets and import them every time on your own.
> Granting full access to **Starton** enables you to dynamically create new wallets with the Starton API.



**Related topics**

-   More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
-   More on [Developer mode](/Developer/Discovering-coding-interface.md)
