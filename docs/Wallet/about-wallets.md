---
title: About Wallets
---
import { CardTitle } from '@site/src/components/commons/CardTitle'
import { Starton } from '@starton/react-ui-iconography'

# Wallets

To interact with blockchains, you need to sign transactions with a wallet to prove ownership over the associated address.
You can also use an external wallet to sign transactions manually. **Starton** supports **Metamask**.

:::caution

Transactions signed with a third-party wallet will not be managed by our Relayer. 

:::

You can also use a wallet stored in a **Key Management System** (KMS) to sign transactions automatically. To discover all the features, **Starton** provides you with a wallet stored on their Vault.

For production projects, to maintain control over your wallets, you can either grant **Starton** access to a wallet on your KMS. For more advanced projects involving several wallets, grant **Starton** full access to your KMS.

<CardTitle icon={<Starton fill='primary' />} href="/docs/Wallet/connecting-aws-kms">
Creating a wallet on AWS KMS
</CardTitle>
<br/>
<CardTitle icon={<Starton fill='primary' />} href="/docs/Wallet/creating-a-wallet">
Creating a wallet on Starton Vault
</CardTitle>
<br/>

**Related topics**

-   More on [Third-party wallets](connecting-an-external-wallet.md)
-   More on [Key Management Systems](understanding-key-management-systems.md)
-   More on [Granting Starton access on your KMS](connecting-aws-kms.md)
