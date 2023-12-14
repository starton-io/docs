/*
| Developed by Starton
| Filename : sidebars.config.js
*/

import { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
	connectSidebar: [
		{
			type: 'category',
			label: 'GETTING STARTED',
			collapsible: false,
			collapsed: false,
			items: [
				'overview',
				'getting-started/supported-networks',
				'onboarding',
				'developer/api',
				'dashboard/compute-units',
			],
		},
		{
			type: 'category',
			label: 'SERVICES',
			collapsible: false,
			collapsed: false,
			items: [
				{
					type: 'category',
					label: 'Smart Contracts Management',
					link: {
						type: 'doc',
						id: 'smart-contract/smart-contract-management',
					},
					collapsed: true,
					items: [

								'smart-contract/deploying-a-smart-contract',


						'smart-contract/interacting-with-a-smart-contract',
					],
				},
				{
					type: 'category',
					label: 'Smart Contract Library',
					link: {
						type: 'doc',
						id: 'smart-contract/parameters-and-functions',
					},
					collapsed: true,
					items: [
						{
                          					type: 'category',
                          					label: 'Creating fungible tokens',
                          					link: {
                          						type: 'doc',
                          						id: 'smart-contract/fungible-tokens',
                          					},
                          					collapsed: true,
                          					items: ['smart-contract/erc20-fixed-meta',
                                                    'smart-contract/erc20-mintable-meta',


							],
						},
						{
							type: 'category',
                            label: 'Deploying NFTs',
                            link: {
                                type: 'doc',
                                id: 'smart-contract/nft-and-collections',
                            },
                            collapsed: true,
                            items: [
								'smart-contract/erc721-meta',
								'smart-contract/erc721-capped',
								'smart-contract/erc1155-meta',
								'smart-contract/erc721_royalties_meta_transaction',
								'smart-contract/erc721_royalties_capped_meta_transaction',
								'smart-contract/erc1155_royalties_meta_transaction',
							],
						},
						{
							type: 'category',
                            label: 'Selling NFTs',
                            link: {
                                type: 'doc',
                                id: 'smart-contract/selling-nfts',
                            },
                            collapsed: true,
                            items: [
								'smart-contract/erc721-sale',
								'smart-contract/erc721-auction-sale',
								'smart-contract/erc721-whitelist-sale',
								'smart-contract/erc1155-sale',
								'smart-contract/erc1155-auction',
								'smart-contract/erc1155-whitelist-sale',
							],
						},
						{
							type: 'category',
                            label: 'Other templates',
                            link: {
                                type: 'doc',
                                id: 'smart-contract/other-templates',
                            },
                            collapsed: true,
                            items: [
								'smart-contract/payment-splitter',
								/*'smart-contract/childerc20-fixed',
                             'smart-contract/childerc20-mintable',
                             'smart-contract/childerc721',
                             'smart-contract/childerc1155',*/
							],
						},
					],
				},
				{
					type: 'category',
					label: 'Transaction Management',
					link: {
						type: 'doc',
						id: 'transactions/transaction-management',
					},
					collapsed: true,
					items: [
						'transactions/creating-a-transaction',
						'transactions/state-and-status',
                        'transactions/manual-action-required',
						'transactions/understanding-gas',
						'transactions/stuck-transaction-replacement',
						'transactions/desynchronized-nonce-management',

					],
				},
				{
					type: 'category',
					label: 'Network monitoring',
					link: {
						type: 'doc',
						id: 'watcher/understanding-watchers',
					},
					collapsed: true,
					items: [
						'watcher/creating-a-watcher','watcher/available-event-types',
						'watcher/webhooks',
						'watcher/how-to-ensure-notifys-webhooks-are-from-starton',
						'watcher/confirmation-blocks',
						'watcher/watcher-state-and-status',
					],
				},
				{
					type: 'category',
					label: 'Wallets',
					link: {
						type: 'doc',
						id: 'wallet/about-wallets',
					},
					collapsed: true,
					items: [ 'wallet/understanding-key-management-systems',
					'wallet/creating-a-wallet','wallet/withdraw', 'wallet/message-signing'],
				},
				{
					type: 'category',
					label: 'File Storage',
					link: {
						type: 'doc',
						id: 'ipfs/file-storage',
					},
					collapsed: true,
					items: [
						'ipfs/understanding-ipfs',
                        'ipfs/uploading-on-ipfs',
                        'ipfs/uploading-folder',
                        'ipfs/uploading-json',
						'ipfs/pinning-file',

					],
				},
			],
		},
		{
			type: 'category',
			label: 'PLUGINS AND TOOLS',
			collapsible: false,
			collapsed: false,
			items: ['tools/integrating-tools', 'tools/using-zapier-integration', 'tools/role-bot-discord'],
		},
		{
			type: 'category',
			label: 'SETTINGS',
			collapsible: false,
			collapsed: false,
			items: ['settings/create-new-project', 'settings/managing-plans'],
		},
	],
	// tutorialSidebar: [
	// 	{
	// 		type: 'category',
	// 		label: 'From Code',
	// 		link: {
	// 			type: 'doc',
	// 			id: 'tutorials/deploy-a-contract-from-code',
	// 		},
	// 		collapsed: false,
	// 		items: [
	// 			'tutorials/deploy-from-bytecode',
	// 			'tutorials/deploy-nfts-with-starton',
	// 			'tutorials/interact-from-code',
	// 			'tutorials/how-to-ensure-notifys-webhooks-are-from-starton',
	// 			'tutorials/creating-nft-collection',
	// 			'tutorials/creating-token-erc20-fixed',
	// 			'tutorials/creating-token-erc20-mintable',
	// 			'tutorials/whitelist-tutorial',
	// 			'tutorials/create-an-nft-collection-sale',
	// 			'tutorials/metatransaction',
	// 			'tutorials/starton-web3auth',
	// 			'tutorials/ai-nft-collection',
	// 			'tutorials/jwt-authentication-nest',
	// 			'tutorials/monitor-nft-activity',
	// 		],
	// 	},
	// 	{
	// 		type: 'category',
	// 		label: 'From the interface',
	// 		link: {
	// 			type: 'doc',
	// 			id: 'tutorials/deploy-a-contract-from-code',
	// 		},
	// 		collapsed: false,
	// 		items: [
	// 			'tutorials/deploy-nfts-with-binance',
	// 			'tutorials/how-to-change-the-smart-contracts-ownership',
	// 			/*"tutorials/create-sale-erc721",*/
	// 			'tutorials/create-an-nft-auction',
	// 			'tutorials/track-wallet-activity',
	// 		],
	// 	},
	// ],
	apiSidebar: [
		{
			type: 'category',
			label: 'RELEASE NOTES',
			collapsible: false,
			collapsed: false,
			items: ['release-notes', 'release-notes/starton-v3', 'release-notes/starton-relayer-v2'],
		},
		{
			type: 'category',
			label: 'CHANGELOG',
			collapsible: false,
			collapsed: false,
			items: ['change-log'],
		},
	],
}

export default sidebars
