/*
| Developed by Starton
| Filename : home-services.config.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

import { HomeServiceItem } from '@site/src/components/pages/home/common/HomeServices'
import { HomeTutorialServices } from '@site/plugins/starton-tutorial-plugin/types'

export const HOME_SERVICE_LIST: Record<HomeTutorialServices, HomeServiceItem> = {
	'smart-contract-management': {
		content: 'Smart Contracts Management',
		href: '/docs/smart-contract/smart-contract-management',
	},
	'smart-contract-library': {
		content: 'Smart Contract Library',
		href: '/docs/smart-contract/parameters-and-functions',
	},
	'transaction-management': {
		content: 'Transaction Management',
		href: '/docs/transactions/transaction-management',
	},
	'network-monitoring': {
		content: 'Network Monitoring',
		href: '/docs/watcher/understanding-watchers',
	},
	wallets: {
		content: 'Wallets',
		href: '/docs/wallet/about-wallets',
	},
	'file-storage': {
		content: 'File Storage',
		href: '/docs/ipfs/file-storage',
	},
}
