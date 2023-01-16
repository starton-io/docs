---
title: Understanding webhooks
---

# Understanding webhooks

To share information, watchers use webhooks.

Webhooks are a term used to describe an HTTP request that is triggered by an event in a source system, sent to a destination system, often with a payload of data. Webhooks are automated requests so they are automatically sent out when their event is fired in the source system.

In Starton, watchers use webhook as event notifications.

## Creating a webhook

You can create a webhook using several methods.

For example, you can use Zapier to create a webhook. See our use case tutorial, [Track a wallet activity on a Googlesheets using Starton and Zapier](https://docs.starton.io/docs/Tutorials/track-wallet-activity).

[Webhook.site](https://webhook.site/) provides you with addresses for testing and debbuging.

You can also use ngrok to test webhooks on localhost.

## Retrying a webhook

If your server does not respond with an HTTP code signifing the request has been successful, Webhooks are retried automatically, 5 minutes, 15 minutes, an hour, 6 hours and finally a day after your first request.

After the last retry, one day after the first request that remains unanswered, the watcher is paused.
