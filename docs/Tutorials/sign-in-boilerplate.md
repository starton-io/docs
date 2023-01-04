---
title: Sign in with the Starton sign in Boilerplate
displayedSidebar: tutorialSidebar
---

# Sign in with the Starton sign in Boilerplate

You want to certify an user wallet to your API?  You are at the right place.
The Starton sign-in boilerplate allows you to sign a message with a wallet provider to authenticate a user in your application. It is required if, for example, you want sign a transaction with the wallet of your user.
We will see in 4 steps how to implement it.

## Clone the repo
In the very first time, you have to clone the repo. You can get it following this link:

https://github.com/starton-io/boilerplate-sign-in-with-wallets-next-js
​​
After cloning, run "yarn install" to install the needed dependencies and "yarn dev" for run the project.

You can access the page on `localhost:3000`.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.
​
## Go to the code
Open the project in your editor and go to src/components/Core/StartonCardWeb3Provider/index.tsx file.
This file handle all the signature process by interacting with the wallet provider (here Metamask).

Install Wag.mi
​
## Send the return of the signature at your back end

library.getSigner().signMessage(message) will open a popup with a message to sign. This action will return a hash that you will need later.
​

The popup with the message to sign, here "Welcome to Starton"
​
Insert in the getSigner method (ligne 4 on our example) your api call and send to your back the return of the get signer method.


    ```

    library?.getSigner().signMessage(message).then(ret =>
    {
        //send "RET" to your back-end
    })
    ```

## Check the signature in your back end with etherjs
In your back-end, import etherjs with the follow command
```jsx

import { ethers } from 'ethers';
```


Once you have etherjs, verify the return of the signature (sent in part 3) with the code ligne 4 in the example below:
```jsx

checkSignature(signature): string
{  
    const address = null
    address = ethers.utils.verifyMessage('Welcome to Starton', signature);

    return 'Succesfully signed';
 }
 ```

Congratulation! You are now authenticated !
