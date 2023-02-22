---
title: Release Notes
displayed-sidebar: connectSidebar
---

# Release Notes

## 2023

### February

-   **Multi user collaboration on a project**
    
    You can now invite users to work on a project. Users are notified by email. You can see pending invitations, users joining the project, and remove users from a project. [Read more](/Settings/create-new-project.md#inviting-users-to-your-project)

-   **Brand-new toolbox to integrate WEB3 to your project**

    You can now use our new ready-to-use tools developed for you to plug Starton to social media platforms and integration plugins. [Read more](/tools/integrating-tools.mdx)

-   **Enhanced Smart contract templates interface**

    The deployment of smart contracts from interface has been enhanced. You now access all the templates at a glance. You can click on each template to see what you need to deploy the contract, the functions you can call to interact with your smart contract or even the events you can monitor. [Read more](/Smart-contract/deploying-a-smart-contract.mdx)

### January

-   **Search smart contract functions**

    When interacting with smart contracts on Dashboard, you can now use the search feature to browse the functions of your smart contracts. For a clearer understanding, functions are now sorted between read, write and payable functions. [Read more](/Wallet/withdraw.mdx)

-   **Withdraw funds from wallets**

    You can now withdraw funds deposited on your wallet in Starton from Dashboard. This operation is a transaction you can perform directly from your wallet list. [Read more](/Smart-contract/interacting-with-a-smart-contract.mdx)

-   **Nonce and Status columns have been added to the transactions list**

    To enable you to access the most relevant information at a glance, a column has been added for nonces and status on your all activity transactions list. [Read more](/Transactions/state-and-status.md)

## Starton V3

-   **Starton got a brand-new look**

    New version, new look. As we started to scale our product, it was important for us to have a look that reflects our spirit. But look is not all, as you will see, all our user workflows were rethought for you to get the most out of Starton with as little friction as possible. [Read more](https://app.starton.io/)

-   **You can now connect your third-party wallets (Metamask)**

    When deploying or interacting with a smart contract you can now use a third-party wallet. Metamask is the first to join the list of third-party wallet providers you can connect with on Starton. [Read more](https://docs.starton.io/docs/Wallet/connecting-an-external-wallet)

-   **Starton provides you with a new user-centric documentation center**

    As developers, we know that documentation is as important as the product itself. On the new documentation center, you can find out how to use every feature, call the API or follow tutorials to discover the app. [Read more](https://docs.starton.io/)

-   **You can now use new smart contracts templates**

    Are you ready to take your smart contract game to the next level? We have new templates available, so get busy and try them out! Deploy a smart contract to sell NFTs, run auctions, or manage metatransactions. [Read more](https://docs.starton.io/docs/Smart-contract/parameters-and-functions)

-   **Starton now provides extended logs of your transaction**

    With the new extended logs, you can get more detailed information about your transaction. These extended logs will provide you with a more detailed look at the transactions that are being processed in your projects. [Read more](https://docs.starton.io/docs/Transactions/understanding-the-relayer)

-   **You can now use Starton from the integrated dev mode**

    This new feature will make it easier for you to integrate Starton into your project using code. This feature is available in all services of Starton. [Read more](https://docs.starton.io/docs/Developer/Discovering-coding-interface)

-   **Deploy your own smart contracts using your own code**

    Deploy with our Relayer your contracts using your ABI and Bytecode on all supported blockchains and use all the features from Starton on it. [Read more](https://docs.starton.io/docs/Smart-contract/deploying-from-bytecode)

-   **You can now implement a Gas strategy according to your needs**

    Gas management is complex. Starton can either handle gas management according to your desired speed or follow a custom strategy you implement through gas settings. [Read more](https://docs.starton.io/docs/Transactions/understanding-gas)

-   **You can now find all your transactions in one list**

    We've made it easier for you to keep track of your transactions. With the introduction of the new transaction list, you will be able to see all transactions made using Starton on your deployed or imported smart contract. [Read more](https://docs.starton.io/docs/Transactions/state-and-status)

## Starton V 2.2

### What’s new?

**Relayer:**

-   🚀 **Each wallet can now send up to 10k transactions per minute.**

    Transactions are now handled simultaneously freeing your transactions powers. You can now spread 150 times more transactions at a time. [Read more](https://docs.starton.io/connect/api-doc/relayer/transactions).

-   ⛽ **You can now select a gas fee speed for your transaction.**

    According to the transaction's priority, you can choose between low, average, fast, and fastest. Don’t worry, custom gas fees remain available, and you can enter your own value. [Read more](https://docs.starton.io/connect/api-doc/relayer/gas-price).

-   🔍 **More statuses are now available to better understand the state of your transaction.**

    Whether a transaction is in state success, pending, blocked or in error, the status and logs provide you with information on what happened and if needed, which actions are required. [Read more](https://docs.starton.io/connect/services/interact/transaction-state-and-status).

-   ⚖️ **You can now set up how Starton monitors your transactions.**

    Select if you want Starton to help with stuck transactions. You can choose the delay before increasing the gas price and the maximum gas price for the transaction. You can also decide how long you want us to wait before reallocating a nonce.

    To help you with gas prices, a new API is now available. [Read more](https://docs.starton.io/connect/api-doc/relayer/project).

-   📃  **You can now query all the functions available within your smart contract.**

    Thanks to Starton API’s new “available-functions” endpoint, you can query all the view, call, and event functions available for your smart contract. [Read more](https://docs.starton.io/connect/api-doc/relayer/smart-contracts).

Want to get to know our Relayer? At the core of Starton, the Relayer is key to the pre-chain management of all your transactions. Learn more in our [brand-new white paper](https://blog.starton.io/web3-transaction-lifecycle-dab0c9321259).

**Interact:**

-   **You can now interact with your Smart Contracts using the polymorphic functions.**

    Starton Interact now handles polymorphic functions. For the function `approve()` you can use it on your own or with two parameters as such `approve(address,uint256)`:

    -   `address` as the address of the sender to approve
    -   `uint256` as the token allowance approved by the owner

-   **You can now see the ABI parameters from the Interact interface.**

## Resolved issues

-   Fixed an issue with RabbitMQ losing transactions when the workload was too important.
