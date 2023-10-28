---
title: Discovering Starton compute units
displayed-sidebar: tutorialSidebar
description: Learn about Starton compute units
keywords: [dashboard, sidebar, starton]
---

# Discovering Starton compute units

Compute units are a measure of the computing resources used by an operation and are typically used to determine the cost of using computing services. They are based on factors such as CPU time, memory usage, and network traffic.

Similarly, Starton compute units are a measure of the computing power used by Starton to track a project's resource consumption. This standard unit allows users to easily understand and manage their resource usage.

:::caution BETA FEATURE

The Dashboard is currently a beta feature.

:::


:::info

Depending on your subscription plan, there may be different monthly usage quotas.

:::

With every Starton plan, you get a specific amount of monthly calls available. The number of compute units varies based on the plan you select. Please visit the **[pricing page](https://www.starton.com/)** for more information on compute units.


## Estimating compute unit needs

Compute units are counted based on your usage of the following:

| Usage                          | Compute unit cost |
|--------------------------------|-------------------|
| CU per smart contract deployed | 750               |
| CU per transaction             | 750               |
| CU per read queries            | 20                |
| CU per watcher events          | 20                |
| CU per Go/days                 | 5000              |
| CU per upload                  | 50                |
| CU per watcher created         | 1000              |

:::info Be aware of simulations.

When deploying a smart contract from the API, you can set the simulation parameter to true. For more information, see the [API reference](https://docs.starton.com/api-reference). In this case you are going to need two API calls to deploy your smart contract. From the web application, the simulation is part of the deployment which is why it counts as two deployments.

:::

### Compute units cost per API call

The price of an API call is the exact amount of compute units that will be counted toward your API usage billing. Rest assured that you will be accurately charged for only what you consume.

| Route  | Operation | Cost in compute units |
| --- | --- | --- |
| /v3/ipfs/pin | PinCreate | 50 |
| /v3/ipfs/file | IpfsFileCreate | 50 |
| /v3/ipfs/folder | IpfsFolderCreate | 50 |
| /v3/ipfs/json | IpfsJsonCreate | 50 |
| /v3/data/{network}/erc20/{contractAddress}/balance | DataBalanceERC20 | 20 |
| /v3/transaction | TransactionCreate | 750 |
| /v3/smart-contract/from-bytecode | SmartContractCreateFromBytecode | 750 |
| /v3/smart-contract/from-template | SmartContractCreateFromTemplate | 750 |
| /v3/smart-contract/{network}/{address}/call | SmartContractCall | 750 |
| /v3/smart-contract/{network}/{address}/read | SmartContractRead | 20 |
| /v3/watcher | WatcherCreateOne | 1000 |

### WEB3 Usage examples 

If you already have an idea of your WEB3 needs, go to the **[pricing page](https://www.starton.com/)** and use our simulator to understand how many compute units you would need.

We have prepared two examples for you to understand what you can do with compute units.

Here is a breakdown of the cost of the deployment of a collection of 1000 NFTs in compute units:

| Components  |  | Cost in compute units |
| --- | --- |-------------------|
| 1 smart contract | 1 | 750               |
| 1000 image (10 Mo par image) | 10 Go | 1500000           |
| 1 fichier de metadata | 1 | 50                |
| 1000 transactions - mint | 1000 | 750000            |
|  | Total | 2250800           |

Here is the breakdown of the cost of WEB3 Gaming use case with 10 000 of daily users in average:

| Daily drop | p.day | 10000 | 7500000 |
| --- | --- | --- | --- |
| Daily trade | p.day | 500 | 375000 |
| Event p.drop | # | 10000 | 200000 |
| Event p.trade | # | 500 | 10000 |
|  |  | Daily Total | 8085000 |
|  |  | Monthly total | 242550000 |


## Understanding Starton Rate limits

A rate limit is a restriction that an API places on the number of times a user or client can access the server within a certain time period. Depending on your plan, you will benefit from a specific rate limit.

| Plan      | Rate limit               |
|-----------|--------------------------|
| Free      | 50 requests/min          |
| Developer | 100 requests/min         |
| Business  | up to 10000 requests/min |

