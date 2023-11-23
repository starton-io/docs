/*
| Developed by Starton
| Filename : home-services.config.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { HomeServiceItem } from '@site/src/components/pages/Home/HomeServices'

export const HOME_SERVICE_LIST: Array<HomeServiceItem> = [
	{
		content: 'Smart Contracts Management',
		href: '/docs/smart-contract/smart-contract-management',
	},
	{
		content: 'Smart Contract Library',
		href: '/docs/smart-contract/parameters-and-functions',
	},
	{
		content: 'Transaction Management',
		href: '/docs/transactions/transaction-management',
	},
	{
		content: 'Network Monitoring',
		href: '/docs/watcher/understanding-watchers',
	},
	{
		content: 'Wallets',
		href: '/docs/wallet/about-wallets',
	},
	{
		content: 'File Storage',
		href: '/docs/ipfs/file-storage',
	},
]
