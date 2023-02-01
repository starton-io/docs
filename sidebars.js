/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
	connectSidebar: [
		"home","overview",
		{
			type: "category",
			label: "Getting Started",
			link: {
				type: "doc",
				id: "getting-started",
			},
			collapsed: true,
			items: [
				"Tutorials/using-starton-in-app",
				"Tutorials/deploy-first-smart-contract",
				"Tutorials/storing-files-on-IPFS",
				"Tutorials/monitoring-blockchain-activity",
			],
		},

		/*  {
      Dashboard: ['Dashboard/dashboard','Dashboard/create-new-project'],
    },*/

		{
			type: "category",
			label: "Wallets",
			link: {
				type: "doc",
				id: "Wallet/about-wallets",
			},
			collapsed: true,
			items: [
				"Wallet/connecting-an-external-wallet",{
                                                       					type: "category",
                                                                           label: "Using a wallet",
                                                                           link: {
                                                                               type: "doc",
                                                                               id: "Wallet/creating-a-wallet",
                                                                           },
                                                                           collapsed: true,
                                                                           items: [
                                                                            "Wallet/editing-a-wallet",
                                                                            "Wallet/deposit-on-wallet",
                                                       						"Wallet/withdraw",
                                                       						"Wallet/message-signing",
                                                       					],
                                                       				},
				{
					type: "category",
                    label: "Understanding key management systems",
                    link: {
                        type: "doc",
                        id: "Wallet/understanding-key-management-systems",
                    },
                    collapsed: true,
                    items: [
						"Wallet/connecting-aws-kms",
					],
				},
			],
		},
		{
			type: "category",
			label: "Transactions",
			link: {
				type: "doc",
				id: "Transactions/understanding-the-relayer",
			},
			collapsed: true,
			items: [
				"Transactions/creating-a-transaction",{
                                                        type: "category",
                                                        label: "Understanding state and status",
                                                        link: {
                                                            type: "doc",
                                                            id: "Transactions/state-and-status",
                                                        },
                                                        collapsed: true,
                                                        items: ["Transactions/manual-action-required",],
                                                        },

                "Transactions/understanding-gas",
                ,{
                                                                                                           type: "category",
                                                                                                           label: "Understanding nonce",
                                                                                                           link: {
                                                                                                               type: "doc",
                                                                                                               id: "Transactions/understanding-nonce",
                                                                                                           },
                                                                                                           collapsed: true,
                                                                                                           items: ["Transactions/desynchronized-nonce-management",],
                                                                                                           },"Transactions/stuck-transaction-replacement",
			],
		},
		{
			type: "category",
			label: "Smart Contracts",
			link: {
				type: "doc",
				id: "Smart-contract/understanding-smart-contracts",
			},
			collapsed: true,
			items: [
				"Smart-contract/deploying-a-smart-contract",
				"Smart-contract/deploying-from-bytecode",
				"Smart-contract/importing-smart-contract",
				"Smart-contract/interacting-with-a-smart-contract",
				{
					type: "category",
					label: "Smart Contract references",
					link: {
						type: "doc",
						id: "Smart-contract/parameters-and-functions",
					},
					collapsed: true,
					items: [
						{
							"Creating fungible tokens": [
								/*'Smart-contract/ERC20-fixed',
             'Smart-contract/ERC20-mintable',*/
								"Smart-contract/ERC20-fixed-Meta",
								"Smart-contract/ERC20-mintable-Meta",
							],
						},
						{
							"Deploying NFTs": [
								/*'Smart-contract/ERC721',
             'Smart-contract/ERC1155',*/
								"Smart-contract/ERC721-Meta",
								"Smart-contract/ERC721-Capped",
								"Smart-contract/ERC1155-Meta",
							],
						},
						{
							"Selling NFTs": [
								"Smart-contract/ERC721-Sale",
								"Smart-contract/ERC721-Auction-Sale",
								"Smart-contract/ERC721-Whitelist-Sale",
								"Smart-contract/ERC1155-Sale",
								"Smart-contract/ERC1155-Auction",
								"Smart-contract/ERC1155-Whitelist-Sale",

							],
						},
						{
							"Other templates": [
								"Smart-contract/payment-splitter",
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
			type: "category",
			label: "Storage",
			link: {
				type: "doc",
				id: "IPFS/understanding-IPFS",
			},
			collapsed: true,
			items: ["IPFS/uploading-on-ipfs",
			        "Tutorials/uploading-metadata-NFT",],
		},
		{
			type: "category",
			label: "Monitor",
			link: {
				type: "doc",
				id: "Watcher/understanding-watchers",
			},
			collapsed: true,
			items: [
				"Watcher/creating-a-watcher",
				{
					type: "category",
					label: "Available event types",
					link: {
						type: "doc",
						id: "Watcher/available-event-types",
					},
					collapsed: true,
					items: [
						"Watcher/address_activity",
						"Watcher/address_receive_native_currency",
						"Watcher/address_sent_native_currency",
						"Watcher/event_approval",
						"Watcher/event_mint",
						"Watcher/event_transfer",
						"Watcher/erc721_event_transfer",
						"Watcher/erc1155_event_single",
						"Watcher/erc1155_event_transfer_batch",
					],
				},
				{
					type: "category",
					label: "Understanding webhooks",
					link: {
						type: "doc",
						id: "Watcher/webhooks",
					},
					collapsed: true,
					items: ["Tutorials/testing-webhooks-locally-ngrok"],
				},
				"Watcher/confirmation-blocks",
				"Watcher/watcher-state-and-status",
			],
		},
		{
			type: "category",
			label: "Developer",
			link: {
				type: "doc",
				id: "Developer/Discovering-coding-interface",
			},
			collapsed: true,
			items: ["Developer/API"],
		},
		{
			type: "category",
			label: "Plugins",
			link: {
				type: "doc",
				id: "Plugins/integrating-plugins",
			},
			collapsed: true,
			items: ["Plugins/Using-zapier-integration"],
		},
		{
			type: "category",
			label: "Release Notes",
			link: {
				type: "doc",
				id: "release-notes",
			},
			collapsed: false,
			items: ["change-log"],
		},
		"freemium",
		/*  {
      Settings: ['Dashboard/dashboard','Dashboard/create-new-project'],

    },*/
	],
	apiSidebar: ["intro"],
	tutorialSidebar: [
		"Tutorials/Home",
		{
			type: "category",
			label: "From Code",
			link: {
				type: "doc",
				id: "Tutorials/deploy-a-contract-from-code",
			},
			collapsed: false,
			items: [
				"Tutorials/deploy-from-bytecode",
				"Tutorials/deploy-Nfts-with-Starton",
				"Tutorials/interact-from-code",
				"Tutorials/how-to-ensure-notifys-webhooks-are-from-starton",
				"Tutorials/creating-NFT-collection",
				"Tutorials/creating-token-ERC20-fixed",
			],
		},
		{
			type: "category",
			label: "From the interface",
			link: {
				type: "doc",
				id: "Tutorials/deploy-a-contract-from-code",
			},
			collapsed: false,
			items: [
				"Tutorials/deploy-Nfts-with-Binance",
				"Tutorials/how-to-change-the-smart-contracts-ownership",
				"Tutorials/create-an-NFT-auction",
				"Tutorials/track-wallet-activity",
			],
		},
	],
}
