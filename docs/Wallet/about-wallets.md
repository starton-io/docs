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

<div class="row is-multiline">
<div class="col col--5">
<h2>Guides</h2>
<div class="button-card__inner">

<a href="/docs/Wallet/connecting-an-external-wallet"><h5>External wallets</h5></a>
<a href="/docs/Wallet/understanding-key-management-systems"><h5>Key Management Systems</h5></a>
<a href="/docs/Wallet/message-signing"><h5>Understanding message signings</h5></a>

</div>

</div>

<div class="col col--5">
<h2>Main API Endpoints</h2>
<div class="button-card__inner">



<a href="/api-reference#tag/wallet/[get]/v3/kms/wallet"><h5>Retrieve the list of Wallets</h5></a>
<a href="/api-reference#tag/wallet/[post]/v3/kms/wallet"><h5>Create a new wallet</h5></a>
<a href="/api-reference#tag/wallet/[post]/v3/kms/wallet/{address}/sign-message"><h5>Sign a message</h5></a>
<a href="/api-reference#tag/wallet//[get]/v3/kms/wallet/{address}/{network}/nonce/available"><h5>Retrieve Available Nonces for a wallet</h5></a>
<a href="/api-reference#tag/wallet/[post]/v3/smart-contract/{network}/{address}/call"><h5>Execute Smart Contract Function</h5></a>

</div></div>
</div>
<br/>

## Tutorials 

<CardTitle icon={<Starton fill='primary' />} href="/docs/Wallet/connecting-aws-kms">
Creating a wallet on AWS KMS
</CardTitle>
<br/>
<CardTitle icon={<Starton fill='primary' />} href="/docs/Wallet/creating-a-wallet">
Creating a wallet on Starton Vault
</CardTitle>
<br/>

