/*
| Developed by Starton
| Filename : tutorials.config.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { CardPostProps } from '@site/src/components/commons/CardPost'
import { StartonUtils } from '@site/src/utils/starton.utils'
import { HomeTutorialItem } from '@site/src/components/pages/tutorials/index/TutorialCard'

export const TUTORIAL_LIST: Array<HomeTutorialItem> = [
	{
		date: StartonUtils.getDateFromYearAndMonth(2023, 4),
		duration: '1h',
		difficulty: 'advanced',
		title: 'Creating a JWT-based authentication with NestJS',
		description:
			'This tutorial will guide you through the process of building an authentication system based on JSON Web Tokens (JWT) using NestJS...',
		href: '#',
		authorId: ['calixte-de-tourris'],
	},
	{
		date: StartonUtils.getDateFromYearAndMonth(2023, 8),
		duration: '1h',
		difficulty: 'beginner',
		title: 'Creating a JWT-based authentication with NestJS',
		description:
			'This tutorial will guide you through the process of building an authentication system based on JSON Web Tokens (JWT) using NestJS...',
		href: '#',
		authorId: ['calixte-de-tourris'],
	},
	{
		date: StartonUtils.getDateFromYearAndMonth(2023, 5),
		duration: '1h',
		difficulty: 'get-started',
		title: 'Creating a JWT-based authentication with NestJS',
		description:
			'This tutorial will guide you through the process of building an authentication system based on JSON Web Tokens (JWT) using NestJS...',
		href: '#',
		authorId: ['calixte-de-tourris'],
	},
]

// TODO: Remove after adding all tutorials
export const TUTORIALS_LIST: Array<CardPostProps> = [
	{
		title: 'Generating your NFT collection with AI',
		date: StartonUtils.getDateFromYearAndMonth(2023, 4),
		labels: [{ label: 'NFT' }, { label: 'AI' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/tutorials/ai-nft-collection',
	},
	{
		title: 'Creating metatransactions with Web3Auth and Starton',
		date: StartonUtils.getDateFromYearAndMonth(2023, 3),
		labels: [{ label: 'AUTH' }, { label: 'WALLET' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/tutorials/starton-web3auth',
	},
	{
		title: 'Creating a JWT-based authentication with NestJS',
		date: StartonUtils.getDateFromYearAndMonth(2023, 6),
		labels: [{ label: 'NestJS' }, { label: 'AUTH' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/tutorials/jwt-authentication-nest',
	},
	{
		title: 'Notifying users when they receive an NFT',
		date: StartonUtils.getDateFromYearAndMonth(2023, 6),
		labels: [{ label: 'MONITOR' }, { label: 'NFT' }, { label: 'CODE' }, { label: 'ADVANCED' }],
		href: '/docs/tutorials/monitor-nft-activity',
	},
	{
		title: 'Interact with a contract from code',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'INTERACT' }],
		href: '/docs/tutorials/interact-from-code',
	},
	{
		title: 'How to sell an NFT collection in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'AUCTION' }, { label: 'SALE' }],
		href: '/docs/tutorials/create-an-nft-collection-sale',
	},
	{
		title: 'How to create a meta transaction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'METATRANSACTION' }, { label: 'ADVANCED' }],
		href: '/docs/tutorials/metatransaction',
	},
	{
		title: 'How to sell NFTs to a list of approved addresses',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'WHITELIST' }, { label: 'SALE' }],
		href: '/docs/tutorials/whitelist-tutorial',
	},
	{
		title: 'Track a wallet activity on a GoogleSheets using Starton and Zapier',
		date: StartonUtils.getDateFromYearAndMonth(2023, 2),
		labels: [{ label: 'ZAPIER' }, { label: 'MONITOR' }, { label: 'NO-CODE' }, { label: 'BEGINNER' }],
		href: '/docs/tutorials/track-wallet-activity',
	},
	{
		title: 'How to create your own limited supply token (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'FIXED SUPPLY' }],
		href: '/docs/tutorials/creating-token-erc20-fixed',
	},
	{
		title: 'How to create your own cryptocurrency (ERC20)',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NO-CODE' }, { label: 'TOKEN' }, { label: 'MINTABLE' }],
		href: '/docs/tutorials/creating-token-erc20-mintable',
	},
	{
		title: 'How to create a one-to-many NFT collection',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/tutorials/creating-nft-collection',
	},
	{
		title: 'How to sell an NFT in an auction',
		date: StartonUtils.getDateFromYearAndMonth(2023, 1),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'SALE' }, { label: 'AUCTION' }],
		href: '/docs/tutorials/create-an-nft-auction',
	},
	{
		title: 'Deploy your own contract from bytecode',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'DEPLOY' }],
		href: '/docs/tutorials/deploy-from-bytecode',
	},
	{
		title: 'Deploy your NFTs on blockchain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/tutorials/deploy-nfts-with-starton',
	},
	{
		title: "How to ensure monitor's webhooks are from Starton",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'CODE' }, { label: 'MONITOR' }, { label: 'VERIFY' }],
		href: '/docs/tutorials/how-to-ensure-notifys-webhooks-are-from-starton',
	},
	{
		title: 'Deploy your NFTs on BNB smart chain with Starton',
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'NFT' }, { label: 'DEPLOY' }],
		href: '/docs/tutorials/deploy-nfts-with-binance',
	},
	{
		title: "How to change the smart contracts' ownership",
		date: StartonUtils.getDateFromYearAndMonth(2022, 11),
		labels: [{ label: 'NO-CODE' }, { label: 'ROLES' }, { label: 'SMART CONTRACT' }],
		href: '/docs/tutorials/how-to-change-the-smart-contracts-ownership',
	},
]
