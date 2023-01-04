---
title: Understanding message signings
description: Learn what is a message signing
keywords: [Wallet, Starton, Smart contracts, Metamask, Transaction]
---
# Understanding message signings

Cryptographic signatures are a key part of the blockchain. They are used to prove ownership of an address without exposing its private key.

This is primarily used for signing transactions but can also be used to sign arbitrary messages.


A message signature mathematically guarantees that certain message was signed by certain (secret) private key, which corresponds to certain (non-secret) public key.

After a message is signed, the message and the signature cannot be modified and thus message authentication and integrity is guaranteed.

Anyone, who knows the public key of the message signer, can verify the signature.
