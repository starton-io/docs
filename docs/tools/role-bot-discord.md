---
title: Verify roles using Starton Discord bot
---

# Verify roles using Starton Discord bot

You can verify roles on your Discord server using tokens. The Starton Role bot allows you to use Starton directly from your Discord server!
You can give roles to server members according to the tokens they own, fungible (ERC20) or NFTs (ERC721 / ERC1155).

:::info Prerequisites

To use the bot you need to:

- Create an account on [Starton](https://app.starton.io) to get an API key
- Create an account on [Discord](https://www.discord.com)

:::

## Connecting your discord server

1. Go to [Starton Discord Studio](https://discord.starton.studio). 
1. Click **Connect your server**. 

## Installing the bot 

1. Initialize your bot.

    ```bash
    /init {{starton-api-key}} {{administrator-role}} {{logging-channel}}
    ```
    - `starton-api-key`: Starton API key that you can generate on the [Starton Dashboard](https://app.starton.com)

    - `administrator-role`: the Discord role that can manage the bot (make sure your account has the specified role)

    - `logging-channel`: the channel where you want to get the logs

2. Import a contract.

    ```bash
    /smart-contract import {{network}} {{smart-contract-type}} {{smart-contract-name}} {{smart-contract-address}}
    ```
    - `network`: the network on which your contract is deployed (`ethereum-mainnet`, `ethereum-goerli`, `avalance-mainnet`, `avalance-fuji`, `polygon-mainnet`, `polygon-mumbai`, `binance-mainnet`, `binance-testnet`)

    - `smart-contract-type`: the type of your contract (`ERC20`, `ERC721`, `ERC1155`)

    - `smart-contract-name`: the name you want to give to your contract

    - `smart-contract-address`: the address of your contract (`0x...`)

:::caution 

You must have deployed your contract before importing it (except if you want to use the contract of another person).

:::
   
This command returns a `contract-id` that you need for the next step.

3. Put a trigger on your contract

    ```bash
    /trigger create {{contract-id}} {{role}}
    ```

    - `contract-id` is the UUID of the contract you just imported

    - `role` is the role that you want to give to your user when they

   From now, all verified users that have tokens (or NFTs) from the registered contract will have the role you attributed in the command.

## Using the bot

Now that your bot is set up, every user on your Discord server can connect his wallet to your bot and get the roles related to their crypto-assets.

```bash
/connect-wallet
 ```

In the Discord chat, this command will return a link to verify your profile using your [Metamask wallet](https://metamask.io/).

## List of available commands 

You can use the following commands to manage your bot.

### CONFIGURATION

#### Initialize the Starton bot your server

```bash
  /init
```

**Permission required: Server Administrator**


| Parameter            | Type      | Description                                         |
|:---------------------|:----------|:----------------------------------------------------|
| `starton-api-key`    | `String`  | **[Required]** Starton API key (`sk_live_...`)      |
| `administrator-role` | `Role`    | **[Required]** Role that can manage the Starton bot |
| `logging-channel`    | `Channel` | **[Required]** Channel used for the logs            |

#### Update your Starton API key

```bash
  /update-api-key
```

**Permission required: Bot Administrator**


| Parameter             | Type     | Description                                        |
|:----------------------|:---------|:---------------------------------------------------|
| `new-starton-api-key` | `String` | **[Required]** New Starton API key (`sk_live_...`) |

#### Regenerate your signing key

```bash
  /regenerate-signing-key
```
**Permission required : Bot Administrator**

| Parameter | Type | Description |
|:----------|:-----|:------------|
| /         | /    | /           |

#### Connect your wallet to the Starton Bot

```bash
  /connect-wallet
```


| Parameter | Type | Description |
|:----------|:-----|:------------|
| /         | /    | /           |





### SMART-CONTRACT

#### Import your smart contract

```bash
  /smart-contract import
```

**Permission required : Bot Administrator**

| Parameter          | Type     | Description                                                                                                                                                                                                            |
|:-------------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `network`          | `String` | **[Required]** Network on which the smart contract is deployed (`ethereum-mainnet`, `ethereum-goerli`, `avalance-mainnet`, `avalance-fuji`, `polygon-mainnet`, `polygon-mumbai`, `binance-mainnet`, `binance-testnet`) |
| `contract-type`    | `String` | **[Required]** Type of the smart contract (`ERC20`, `ERC721`, `ERC1155`)                                                                                                                                               |
| `contract-name`    | `String` | **[Required]** Name of the smart contract                                                                                                                                                                              |
| `contract-address` | `String` | **[Required]** Address of the smart contract (`0x...`)                                                                                                                                                                 |

#### Delete an imported smart contract

```bash
  /smart-contract delete
```

**Permission required : Bot Administrator**

| Parameter             | Type     | Description                                                |
|:----------------------|:---------|:-----------------------------------------------------------|
| `smart-contract-id  ` | `String` | **[Required]** ID of the smart contract you want to delete |

#### List your imported smart contracts

```bash
  /smart-contract list
```

**Permission required : Bot Administrator**

| Parameter | Type | Description |
|:----------|:-----|:------------|
| /         | /    | /           |





### TRIGGER

#### Create trigger on a registered smart contract

```bash
  /trigger create
```

**Permission required : Bot Administrator**

| Parameter           | Type     | Description                                                             |
|:--------------------|:---------|:------------------------------------------------------------------------|
| `smart-contract-id` | `String` | **[Required]** ID of the smart contract you want to link the trigger to |
| `role`              | `Role`   | **[Required]** Role you want to be given                                |
| `min-amount`        | `Number` | **[Optional]** Minimum amount of token required. (Default 1)            |
| `max-amount`        | `Number` | **[Optional]** Maximum amount of token required. (Default none)         |
| `token-id`          | `String` | **[Optional]** Token ID (for ERC-1155)                                  |

#### Delete a registered trigger

```bash
  /trigger delete
```

**Permission required : Bot Administrator**

| Parameter    | Type     | Description                                         |
|:-------------|:---------|:----------------------------------------------------|
| `trigger-id` | `String` | **[Required]** ID of the trigger you want to delete |

#### List your registered triggers

```bash
  /trigger list
```

**Permission required : Bot Administrator**

| Parameter             | Type     | Description                                                          |
|:----------------------|:---------|:---------------------------------------------------------------------|
| `smart-contract-id  ` | `String` | **[Required]** ID of the smart contract you want to see the triggers |


