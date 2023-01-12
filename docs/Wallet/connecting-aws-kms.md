---
title: Connecting AWS Key Management Systems
description: Learn how to connect AWS Key Management Systems
keywords: [Wallet, Starton, Smart contracts, AWS, Key Management System, Transaction]
---
# Connecting AWS Key Management Systems

In this tutorial, you will learn how to connect an **AWS Key Management System (KMS)** to **Starton**.

>**Starton** provides test wallets hosted on our **Key Management System**, but when going in production, to maintain control over your wallets,  you should use your own KMS.

To connect **Starton** to your **AWS KMS**, you can:
- grant full access to **Starton** on your **KMS**
- grant access to **Starton** only to one wallet of your **KMS**

>By granting access to **Starton** only to one wallet, you’ll have to create new wallets and import them every time on your own.
>Granting full access to **Starton** enables you to dynamically create new wallets with the Starton API.

## Granting access to a specific wallet to Starton Identity and Access Management

### Creating a wallet on AWS

1. On your AWS dashboard, search **Key Management Service**.
    ![Create wallet on AWS](assets/creating-wallet-aws.png)
    You access a listing of your existing keys.

    >A key is an equivalent to a wallet in this use case.

1. Click **Create a key**.
1. Set up your key:
    ![Configure key](assets/configure-key.png)
    1. In **Key type**, select **Asymmetric**.
    1. In **Key usage**, select **Sign and verify**.
    1. In **Key spec**, select **ECC_SECG-P256K1**.
    1. In **Advanced options**, select **Multi-region key**.
1. Click **Next**.
1. In **Alias**, enter a name for your key.
1. Skip step 3 **Define key administrative permissions**.
1. In step 4 **Define key usage permissions**, in **Other AWS account**, enter Starton information:
    1. In arn:aws:iam::, enter `052805596453`.
    ![Configure key](assets/aws-step-4.png)

### Connecting your wallet on Starton

1. From the **Dashboard**, go to **Wallets**.
1. Click **+ Wallet**.
1. Select **Connect a single Wallet from a Key Management System**.
1. Enter a **Wallet name**.
1. Enter a **Description**.
1. Enter the **Key ARN**. You will find it on AWS in the **General Configuration** panel following a `arn:aws:kms:eu-west-3:XXXXXXXXXXXX:key/mrk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`format.

## Granting Full Access on your KMS to Starton

### Creating a new policy before the IAM creation

Before granting access to your KMS, you need to create a Policy to define permissions associated to the IAM we will create.

1. On AWS, go to the **Identity and Access Management (IAM)** dashboard.
1. In **Access Management**, go to **Policies**. (img)
1. Click **Create Policy**.
1. Go to **JSON**.
1. Copy the following .json and paste it in the tab.

  ```jsx
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "iam:CreateServiceLinkedRole",
                "Resource": "arn:aws:iam::*:role/aws-service-role/*"
            },
            {
                "Effect": "Allow",
                "Action": "kms:*",
                "Resource": "*"
            }
        ]
    }

  ```
1. Click on **Next:Tags**.
1. Click **Review**.
1. Enter a **Name** for the policy.
1. Click **Create policy**.


### Create a new IAM user for Starton

1. Access [AWS Users](https://console.aws.amazon.com/iamv2/home?#/users).
1. Click **Add users**.
1. Set username to `kms`.

  >WARNING
  >
  >
  >Setting username to kms is mandatory. Do not enter another username.
  >

1. In **Select AWS access type**, check **Access key - Programmatic access**.

  ![Configure key](assets/add-user.png)

1. Select **Attach existing policies directly**.
1. Select the kms policy name.
1. Click **Next:Tags**.

  >Adding tags is optional.

1. Click **Next:Review**.
1. Review the kms user:

  > AWS access type must be set to Programmatic access - with an access key.

1. Click **Create user** to get the **Access Key Id** and **Secret Access Key** for your KMS.

### Importing the wallet on Starton

1. From the Dashboard, click **Wallets**.
1. Click **+ Wallet**.
1. Select **Connect your KMS to manage existing and new wallets**.
1. In **KMS**, click **+ KMS**.
1. Click **Next**.
1. Enter your KMS information:



|Parameter|Description|
|---|---|
| **KMS name**|The name of your Key Management System on the **Dashboard**.|
| **Account id**|The 12 digit number you can find it in the top-right corner of your AWS Dashboard. |
| **Access key id**|The **Access Key ID** of the new IAM user available after completing [this step](#create-a-new-iam-user-for-starton).|
| **Secret access key**|The **Secret access key** of the new IAM user available after completing [this step](#create-a-new-iam-user-for-starton).|
| **Region**|The **Region** on which you want to create the wallet. For example `eu-west-3`.|


You can now dynamically create new wallets from your code.

**Related topics**

- More on [Transactions](/Transactions/creating-a-transaction.mdx)
- More on [Smart Contracts](/Smart-contract/understanding-smart-contracts.md)
- More on [Developer mode](/Developer/Discovering-coding-interface.md)
