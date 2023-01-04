---
Title: Build a play-to-earn space invader like with Starton
---
# Build a play-to-earn space invader like with Starton

## Introduction

In this guide, we will see how to build a space invader game like on blockchain using Starton API.

The game will work as follows:

- The user will put his wallet address before playing
- Once the game starts, the player have to finish the level to win a Beer Token, a token especially created & deployed for the occasion using Starton.
- If the player’s score reach at least 900, a mint action will be trigger and the user will receive one BeerToken to his address.

This tutorial will explain you how to create your own game based on the Space invader gameplay and using blockchain in 30 minutes chrono.

In this example, we will use testnet network for obvious cost reasons.

Are you ready ?

## Requirements

> ***Note that the game is a fork of this initial repository reinvented with blockchain :***
>

 ******[spaceInvader](https://github.com/leerob/space-invaders) ***(Thanks to the author).***

> *🚧  **This project was develop on a macOs environment so this tutorial might need some adjustments if you are developing on another platform.***
>

- You will find at the following address the repository you need to clone : [BeerInvader](https://github.com/DarkhanRhl/BeerInvader)
- After cloning the repository, you will the following packages. You can install it using the pip3/brew package manager by copy/paste the following lines in your terminal or by using your own package manager:

```json
brew install python3
pip3 install pygame
pip3 install python-dotenv
pip3 install requests
```

- Create an account on [**Starton**](https://app.starton.io).

Great, you are ready to begin!

## Launch the game

- To get started, go to the BeerInvader project you just cloned and launch the game using the following command :

```jsx
python3 beerinvaders.py
```

The game should appears on a new window.

> ***Note that you can modify the [beerinvaders.py](http://beerinvaders.py) name using the name of your project.***
>

![Capture d’écran 2022-05-30 à 14.41.03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e487c8c-fa7a-4e25-95f8-280789f5ca80/Capture_decran_2022-05-30_a_14.41.03.png)

- Verify if everything is installed by pressing any key and playing.
- Once everything is good, let’s begin the serious things!

## Create your token

Okay, right now, let’s connect your game to the blockchain!

- For the next step, go to your [starton](https://app.starton.io) account and create a kms (Key management system) by clicking on Wallet → Set up my wallet → From Starton KMS.

> ***If you want to learn more about KMS or using your own, I strongly recommend you to read this article : [https://docs.starton.io/connect/private-keys](https://docs.starton.io/connect/private-keys)***
>
- Once your wallet is created, the next step is to deploy your smart contract !

You can send a fungible token or a NFT to your users, but for this tutorial we will use a fungible token.

If you want to create a NFT, you can follow this tutorial instead of deploying an ERC-20 : [https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton](https://docs.starton.io/tutorials/deploy-your-nfts-on-blockchain-with-starton)

To deploy your own crypto token, follow the steps below :

- Go to deploy section and select the Token with flexible supply contract (picture 2). We want to use a flexible supply because we don’t know how much token we will need as your game might be the next successful play to earn. You can read more about templates [here](https://docs.starton.io/connect/services/deploy).
- Fill the information related to your token (picture 3). Note that you can choose the blockchain of your choice, but I recommend using Polygon for its low gas fees.
- Click on the “Deploy” button.

![Capture d’écran 2022-05-30 à 15.52.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6359b939-8abc-4ffb-922c-1b966918df57/Capture_decran_2022-05-30_a_15.52.42.png)

***Picture 2***

![Capture d’écran 2022-05-30 à 15.53.55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/820009d1-1e7e-480f-a389-22e732be5c6b/Capture_decran_2022-05-30_a_15.53.55.png)

***Picture 3***

Congratulations ! You just create your own crypto.

Right now, let’s go to the code ! It’s almost done !

## Connect your game to blockchain

In this part, we will see how to connect your game to blockchain.

- Open the [beerinvaders.py](http://beerinvaders.py) in your editor and select using the “select a function” dropdown the Transfer function (line 527). This function calls Starton API to execute a transfer to the user address asked before the game begin.

You have to change this function to call the Starton endpoint related to your smart contract deployed just before.

- No worry It's easy to do. Go back to your Starton account, go to “My smart contracts” and click on the contract you deployed.

You should find something like this :

![Capture d’écran 2022-05-30 à 16.03.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21c55ab8-5c4f-47e2-9560-ec1d1b78d967/Capture_decran_2022-05-30_a_16.03.20.png)

- In the “Select a function” field, select the function you want to trigger when the player will win. I used “mint” in my example.
- In the “Select a wallet” field choose your wallet. You should choose a wallet with tokens available regarding the blockchain you choose in order to pay gas fees of the transactions

You should have something similar to this :

![Capture d’écran 2022-05-30 à 16.04.43.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26c00370-83b8-4290-8f06-a3b98be599a8/Capture_decran_2022-05-30_a_16.04.43.png)

- Once its done, click on the “Developer Mode” button on the right top ! The request related to the mint action should appear :

![Capture d’écran 2022-05-30 à 16.05.53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d7815e2-58d4-4c92-88f1-4553f581ffe1/Capture_decran_2022-05-30_a_16.05.53.png)

Right now, it is time for you to code.

- Change the request in “startonTransfer” function by the one in your dashboard (line 10 : ”/smart-contract/polygon-mumbai/0x7d95d2c916439A44C926B36a79a387B14c0170d4/call”) in my example.

```jsx
'https://api.starton.io/v3/PUT_YOUR_ENDPOINT', //THIS LINE
  json = {
     "functionName": "mint",
     "signerWallet": "0x2A1f28147f3A47756983832a7f8B43243BC22Ab7",
     "speed": "low",
     "params": [
         walletAddress,
         "1000000000000000000"
     ],
 },
 headers= {"x-api-key": os.getenv("STARTON_API_KEY")}
```

- It is almost done ! The last things is to add your API KEY to your game to be authenticated to the Starton api.

Easy right?

- Go to Starton, click on the “Developer” section and copy your API_KEY.

![Capture d’écran 2022-05-30 à 16.14.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f27b711b-5b27-470e-8874-9e39187e3194/Capture_decran_2022-05-30_a_16.14.36.png)

- After that, create a “.env” file in the root of your repository (the same place as beerinvaders.py) and paste this line with your api key:

```jsx
STARTON_API_KEY="YOUR_STARTON_API_KEY"
```

And…it’s done! You can now launch the game, enter your wallet address and play.

Once you will loose, if your score is greater or equal to 900, the game will call the function of your smart contract and mint a token to the player address!

Now, it is your time. Feel free to modify anything you want!

## Customize your game by changing the assets

If you want to go further, you can replace images by your own.

Go to the “images” folder and change anything you want.

## Conclusion

Congrats ! You just created an awesome blockchain game using Starton! If you want to go further, go to our others tutorials by clicking [here](https://docs.starton.io/tutorials).

If you have any questions, feel free to contact us using our [Discord](https://discord.starton.io).
