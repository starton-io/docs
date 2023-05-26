/*
| Developed by Dirupt
| Filename : sidebars.config.js
*/

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	connectSidebar: [
		'overview',
		{
			type: 'category',
			label: 'Getting Started',
			link: {
				type: 'doc',
				id: 'getting-started',
			},
			collapsed: false,
			items: [
				'Tutorials/deploy-first-smart-contract',
				'Tutorials/storing-files-on-IPFS',
				'Tutorials/monitoring-blockchain-activity',
			],
		},
		{
			type: 'html',
			value: "<br style='margin: 0 0 0 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>DASHBOARD</header>",
			defaultStyle: true,
		},

		'Dashboard/dashboard',
		'Dashboard/compute-units',
		{
			type: 'html',
			value: "<br style='margin: 0 0 0 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>RELAYER</header>",
			defaultStyle: true,
		},
		{
			type: 'category',
			label: 'Wallets',
			link: {
				type: 'doc',
				id: 'Wallet/about-wallets',
			},
			collapsed: true,
			items: [
				'Wallet/connecting-an-external-wallet',
				{
					type: 'category',
					label: 'Using a wallet',
					link: {
						type: 'doc',
						id: 'Wallet/creating-a-wallet',
					},
					collapsed: true,
					items: ['Wallet/editing-a-wallet', 'Wallet/withdraw', 'Wallet/message-signing'],
				},
				{
					type: 'category',
					label: 'Understanding key management systems',
					link: {
						type: 'doc',
						id: 'Wallet/understanding-key-management-systems',
					},
					collapsed: true,
					items: ['Wallet/connecting-aws-kms', 'Wallet/grantfull-access'],
				},
			],
		},
		{
			type: 'category',
			label: 'Transactions',
			link: {
				type: 'doc',
				id: 'Transactions/understanding-the-relayer',
			},
			collapsed: true,
			items: [
				'Transactions/creating-a-transaction',
				{
					type: 'category',
					label: 'Understanding state and status',
					link: {
						type: 'doc',
						id: 'Transactions/state-and-status',
					},
					collapsed: true,
					items: ['Transactions/manual-action-required'],
				},

				'Transactions/understanding-gas',
				,
				{
					type: 'category',
					label: 'Understanding nonce',
					link: {
						type: 'doc',
						id: 'Transactions/understanding-nonce',
					},
					collapsed: true,
					items: ['Transactions/desynchronized-nonce-management'],
				},
				'Transactions/stuck-transaction-replacement',
			],
		},
		{
			type: 'category',
			label: 'Smart Contracts',
			link: {
				type: 'doc',
				id: 'Smart-contract/understanding-smart-contracts',
			},
			collapsed: true,
			items: [
				'Smart-contract/deploying-a-smart-contract',
				'Smart-contract/deploying-from-bytecode',
				'Smart-contract/importing-smart-contract',
				'Smart-contract/interacting-with-a-smart-contract',
				{
					type: 'category',
					label: 'Smart Contract references',
					link: {
						type: 'doc',
						id: 'Smart-contract/parameters-and-functions',
					},
					collapsed: true,
					items: [
						{
							'Creating fungible tokens': [
								/*'Smart-contract/ERC20-fixed',
             'Smart-contract/ERC20-mintable',*/
								'Smart-contract/ERC20-fixed-Meta',
								'Smart-contract/ERC20-mintable-Meta',
							],
						},
						{
							'Deploying NFTs': [
								'Smart-contract/ERC721-Meta',
								'Smart-contract/ERC721-Capped',
								'Smart-contract/ERC1155-Meta',
							],
						},
						{
							'Selling NFTs': [
								'Smart-contract/ERC721-Sale',
								'Smart-contract/ERC721-Auction-Sale',
								'Smart-contract/ERC721-Whitelist-Sale',
								'Smart-contract/ERC1155-Sale',
								'Smart-contract/ERC1155-Auction',
								'Smart-contract/ERC1155-Whitelist-Sale',
							],
						},
						{
							'Other templates': [
								'Smart-contract/payment-splitter',
								/*'Smart-contract/ChildERC20-fixed',
             'Smart-contract/ChildERC20-mintable',
             'Smart-contract/ChildERC721',
             'Smart-contract/ChildERC1155',*/
							],
						},
					],
				},
			],
		},
		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>MONITOR</header>",
			defaultStyle: true,
		},
		{
			type: 'category',
			label: 'Watchers',
			link: {
				type: 'doc',
				id: 'Watcher/understanding-watchers',
			},
			collapsed: true,
			items: [
				'Watcher/creating-a-watcher','Watcher/watcher-state-and-status'

			],
		},{
          					type: 'category',
          					label: 'events',
          					link: {
          						type: 'doc',
          						id: 'Watcher/available-event-types',
          					},
          					collapsed: true,
          					items: [{
                                  type: 'category',
                                  label: 'Monitoring blockchain addresses',
                                  collapsed: true,
                                  items: [
          						'Watcher/address_activity',
          						'Watcher/address_receive_native_currency',
          						'Watcher/address_sent_native_currency',	],
                                                                         				},
                                   {
                                  type: 'category',
                                  label: 'Monitoring smart contracts',
                                  collapsed: true,
                                  items: [
          						'Watcher/event_approval',
          						'Watcher/event_mint',
          						'Watcher/event_transfer',
          						'Watcher/erc721_event_transfer',
          						'Watcher/erc1155_event_single',
          						'Watcher/erc1155_event_transfer_batch',
          						'Watcher/custom-event'],
                                                                         				},
          					],
          				},
		{
			type: 'category',
			label: 'Webhooks',
			link: {
				type: 'doc',
				id: 'Watcher/webhooks',
			},
			collapsed: true,
			items: ['Tutorials/testing-webhooks-locally-ngrok'],
		},
		'Watcher/confirmation-blocks',

		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>STORAGE</header>",
			defaultStyle: true,
		},
		'IPFS/understanding-IPFS',
		{
			type: 'category',
			label: 'Uploading',
			collapsed: true,
			items: [
				'IPFS/uploading-on-ipfs',
				'IPFS/uploading-folder',
				'IPFS/uploading-json',
				'IPFS/pinning-file',
				'Tutorials/uploading-metadata-NFT',
			],
		},
		'IPFS/pinning-file',
		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem 0;'/>",
			defaultStyle: true,
		},

		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>TOOLS</header>",
			defaultStyle: true,
		},
		'tools/integrating-tools',
		'tools/Using-zapier-integration',
		'tools/role-bot-discord',
		{
			type: 'html',
			value: "<br style='margin: 1rem 0 1rem 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>SETTINGS</header>",
			defaultStyle: true,
		},
		'Settings/create-new-project',
		'Settings/managing-plans',
		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem 0;'/>",
			defaultStyle: true,
		},
	],
	tutorialSidebar: [
		{
			type: 'category',
			label: 'From Code',
			link: {
				type: 'doc',
				id: 'Tutorials/deploy-a-contract-from-code',
			},
			collapsed: false,
			items: [
				'Tutorials/deploy-from-bytecode',
				'Tutorials/deploy-Nfts-with-Starton',
				'Tutorials/interact-from-code',
				'Tutorials/how-to-ensure-notifys-webhooks-are-from-starton',
				'Tutorials/creating-NFT-collection',
				'Tutorials/creating-token-ERC20-fixed',
				'Tutorials/creating-token-ERC20-mintable',
				'Tutorials/whitelist-tutorial',
				'Tutorials/create-an-NFT-collection-sale',
				'Tutorials/metatransaction',
				'Tutorials/starton-web3auth',
				'Tutorials/ai-nft-collection',
			],
		},
		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'category',
			label: 'From the interface',
			link: {
				type: 'doc',
				id: 'Tutorials/deploy-a-contract-from-code',
			},
			collapsed: false,
			items: [
				'Tutorials/deploy-Nfts-with-Binance',
				'Tutorials/how-to-change-the-smart-contracts-ownership',
				/*"Tutorials/create-sale-ERC721",*/
				'Tutorials/create-an-NFT-auction',
				'Tutorials/track-wallet-activity',
			],
		},
	],
	// apiSidebar: ['intro'],
	apiSidebar: [
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>RELEASE NOTES</header>",
			defaultStyle: true,
		},
		'release-notes',
		'release-notes/starton-v3',
		'release-notes/starton-relayer-v2',
		{
			type: 'html',
			value: "<br style='margin: 0.5rem 0 0.5rem 0;'/>",
			defaultStyle: true,
		},
		{
			type: 'html',
			value: "<header style='font-weight: 600; color:#A3B4C1; font-size: 14px'>CHANGELOG</header>",
			defaultStyle: true,
		},
		'change-log',
	],
}
