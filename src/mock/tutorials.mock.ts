/*
| Developed by Dirupt
| Filename : tutorials.mock.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { CardPostProps } from '@site/src/components/commons/CardPost'
import { StartonUtils } from '@site/src/utils/starton.utils'

export const TUTORIALS_LIST: Array<CardPostProps> = [
	{
		title: 'Generating your NFT collection with AI',
		date: StartonUtils.getDateFromYearAndMonth(2023, 4),
		labels: [{ label: 'NFT' }, { label: 'AI' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/Tutorials/ai-nft-collection',
	},
	{
		title: 'Creating metatransactions with Web3Auth and Starton',
		date: StartonUtils.getDateFromYearAndMonth(2023, 3),
		labels: [{ label: 'AUTH' }, { label: 'WALLET' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/Tutorials/starton-web3auth',
	},
	{
		title: 'Interact with a contract from code',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'INTERACT' }],
		href: '/docs/Tutorials/interact-from-code',
	},
	{
		title: 'How to sell an NFT collection in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'AUCTION' }, { label: 'SALE' }],
		href: '/docs/Tutorials/create-an-NFT-collection-sale',
	},
	{
		title: 'How to create a meta transaction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'METATRANSACTION' }, { label: 'ADVANCED' }],
		href: '/docs/Tutorials/metatransaction',
	},
	{
		title: 'How to sell NFTs to a list of approved addresses',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'WHITELIST' }, { label: 'SALE' }],
		href: '/docs/Tutorials/whitelist-tutorial',
	},
	{
		title: 'Track a wallet activity on a GoogleSheets using Starton and Zapier',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'ZAPIER' }, { label: 'MONITOR' }, { label: 'NO-CODE' }, { label: 'BEGINNER' }],
		href: '/docs/Tutorials/track-wallet-activity',
	},
	{
		title: 'How to create your own limited supply token (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'FIXED SUPPLY' }],
		href: '/docs/Tutorials/creating-token-ERC20-fixed',
	},
	{
		title: 'How to create your own cryptocurrency (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'MINTABLE' }],
		href: '/docs/Tutorials/creating-token-ERC20-mintable',
	},
	{
		title: 'How to create a one-to-many NFT collection',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/Tutorials/creating-NFT-collection',
	},
	{
		title: 'How to sell an NFT in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'SALE' }, { label: 'AUCTION' }],
		href: '/docs/Tutorials/create-an-NFT-auction',
	},
	{
		title: 'Deploy your own contract from bytecode',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'DEPLOY' }],
		href: '/docs/Tutorials/deploy-from-bytecode',
	},
	{
		title: 'Deploy your NFTs on blockchain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/Tutorials/deploy-Nfts-with-Starton',
	},
	{
		title: "How to ensure monitor's webhooks are from Starton",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'MONITOR' }, { label: 'VERIFY' }],
		href: '/docs/Tutorials/how-to-ensure-notifys-webhooks-are-from-starton',
	},
	{
		title: 'Deploy your NFTs on BNB smart chain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/Tutorials/deploy-Nfts-with-Binance',
	},
	{
		title: "How to change the smart contracts' ownership",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'ROLES' }, { label: 'SMART CONTRACT' }],
		href: '/docs/Tutorials/how-to-change-the-smart-contracts-ownership',
	},
]
