/*
| Developed by Starton
| Filename : tutorials.config.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { CardPostProps } from '@site/src/components/commons/CardPost'
import { StartonUtils } from '@site/src/utils/starton.utils'

// TODO: Remove after adding all tutorials
export const TUTORIALS_LIST: Array<CardPostProps> = [
	{
		title: 'Generating your NFT collection with AI',
		date: StartonUtils.getDateFromYearAndMonth(2023, 4),
		labels: [{ label: 'NFT' }, { label: 'AI' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/tutorials/ai-nft-collection',
	},
	{
		title: 'Creating metatransactions with Web3Auth and Starton',
		date: StartonUtils.getDateFromYearAndMonth(2023, 3),
		labels: [{ label: 'AUTH' }, { label: 'WALLET' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/tutorials/starton-web3auth',
	},
	{
		title: 'Creating a JWT-based authentication with NestJS',
		date: StartonUtils.getDateFromYearAndMonth(2023, 6),
		labels: [{ label: 'NestJS' }, { label: 'AUTH' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/tutorials/jwt-authentication-nest',
	},
	{
		title: 'Notifying users when they receive an NFT',
		date: StartonUtils.getDateFromYearAndMonth(2023, 6),
		labels: [{ label: 'MONITOR' }, { label: 'NFT' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/tutorials/monitor-nft-activity',
	},
	{
		title: 'Interact with a contract from code',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'INTERACT' }],
		href: '/tutorials/interact-from-code',
	},
	{
		title: 'How to sell an NFT collection in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'AUCTION' }, { label: 'SALE' }],
		href: '/tutorials/create-an-nft-collection-sale',
	},
	{
		title: 'How to create a meta transaction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'METATRANSACTION' }, { label: 'ADVANCED' }],
		href: '/tutorials/metatransaction',
	},
	{
		title: 'How to sell NFTs to a list of approved addresses',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'WHITELIST' }, { label: 'SALE' }],
		href: '/tutorials/whitelist-tutorial',
	},
	{
		title: 'Track a wallet activity on a GoogleSheets using Starton and Zapier',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'ZAPIER' }, { label: 'MONITOR' }, { label: 'NO-CODE' }, { label: 'BEGINNER' }],
		href: '/tutorials/track-wallet-activity',
	},
	{
		title: 'How to create your own limited supply token (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'FIXED SUPPLY' }],
		href: '/tutorials/creating-token-erc20-fixed',
	},
	{
		title: 'How to create your own cryptocurrency (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'MINTABLE' }],
		href: '/tutorials/creating-token-erc20-mintable',
	},
	{
		title: 'How to create a one-to-many NFT collection',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/tutorials/creating-nft-collection',
	},
	{
		title: 'How to sell an NFT in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'SALE' }, { label: 'AUCTION' }],
		href: '/tutorials/create-an-nft-auction',
	},
	{
		title: 'Deploy your own contract from bytecode',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'DEPLOY' }],
		href: '/tutorials/deploy-from-bytecode',
	},
	{
		title: 'Deploy your NFTs on blockchain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/tutorials/deploy-nfts-with-starton',
	},
	{
		title: "How to ensure monitor's webhooks are from Starton",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'MONITOR' }, { label: 'VERIFY' }],
		href: '/tutorials/how-to-ensure-notifys-webhooks-are-from-starton',
	},
	{
		title: 'Deploy your NFTs on BNB smart chain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/tutorials/deploy-nfts-with-binance',
	},
	{
		title: "How to change the smart contracts' ownership",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'ROLES' }, { label: 'SMART CONTRACT' }],
		href: '/tutorials/how-to-change-the-smart-contracts-ownership',
	},
]
