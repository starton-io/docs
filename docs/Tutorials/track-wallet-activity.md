---
title: Track a wallet activity on a Googlesheets using Starton and Zapier
---

# Track a wallet activity on a Googlesheets using Starton and Zapier

In this tutorial, we will create a tracker for wallet with Starton and Zapier. We will start by creating a webhook on Zapier, adding the URL in a watcher on Starton, to populate a Googlesheets on Google Drive.

You will need:

-   a [Starton Account](https://starton.io)
-   a [Zapier Account](https://zapier.com)
-   a [Google drive Account](https://sheets.google.com)

## Create a webhook

1. From **Starton**, go to **Plugins**.

1. Click on the **Zapier** card.

1. Log in with your Zapier credentials.

1. Click `Accept Invite & Build a Zap`.

1. Click `Create Zap`.

1. In Trigger, select `Webhook`.

1. In `Event`, select `Catch Raw Hook` and click to `Continue`.

Zapier provides you with a `Webhook URL`. We will need this URL in our Watcher on Starton.

## Creating a watcher in Starton

1. In [Starton](https://app.starton.io/monitor), go to `Monitor`.

1. Click `+ Watcher`.

1. Select a `Type of notification` and click `Next`. You can use `Address Activity` to track when an address receives base currency or creates a transaction. For more information, check out [Available event types](https://docs.beta.starton.io//docs/Watcher/available-event-types).

1. Enter the watcher's `Name` and `Description`. Click `Next`.

1. Select the blockchain on which you want to track the wallet (for example, we use Binance Smart Chain testnet ).

1. Enter the `Wallet Address` that you need to track.

1. Copy the URL and paste in `Webhook URL`.

1. Enter the number of `Confirmations Blocks` to wait before receiving the notification. More information [on confirmation blocks](https://docs.beta.starton.io/docs/Watcher/confirmation-blocks).

For this example we use BSC Testnet, so we use 48 confirmation blocks.

1. Click `Create`.

## Testing the trigger

To test, the webhook and the watcher, we need to send currency to the wallet to trigger for an activity event.

1. Transfer tokens to the wallet you need to watch. This will trigger an event in your watcher.

1. Wait for the number of `Confirmations Block` configured.

1. Come back to Zapier and click `Test trigger`.

If it's successful, you will read `We found a request!`.

1.  Click `Continue`.

## Configure the googlesheets

1. In Zapier, select an `Action`.

    1. For this integration, select `Google Sheets`.

    1. In `Event`, select `Create Spreadsheet Row` and click `Continue`.

    1. Link your Google Sheets account.

    1. Select your Google Sheets account.

    1. Click to `Continue`.

1. In `Google Drive`, go to your Google Sheets.

1. Create a new Google sheets.

1. In Zapier, enter your `spreadsheet`.

    1. Select a `Worksheet`, for this example we use `Sheet1`.

    1. On your Google sheets, create a header in cell A1, and type `Your event name`, for this example `ADDRESS_ACTIVITY`.

    1. On Zapier, you can view the `Event name` typed in `Your event name` in the Google Sheets.

    1. Select the data you want to save in your google sheets.

    1. Click `Continue`.

1. Click to `Test action`. If successful, you can see your data in your google sheets.

1. Now you can save your zap.

Congratulations! The activity of your wallet is now tracked on a Googlesheets.
