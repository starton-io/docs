/*
| Developed by Dirupt
| Filename : home-features-tour.config.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

import { HomeFeaturesTourItem } from '@site/src/components/pages/home'
// @ts-ignore
import Wallet from '@site/static/img/features-tour/wallet.jpg'
// @ts-ignore
import FileStorage from '@site/static/img/features-tour/file-storage.jpg'
// @ts-ignore
import Monitor from '@site/static/img/features-tour/monitor.jpg'
// @ts-ignore
import ProductTour from '@site/static/img/features-tour/product-tour.jpg'
// @ts-ignore
import Relayer from '@site/static/img/features-tour/relayer.jpg'
// @ts-ignore
import SCManagement from '@site/static/img/features-tour/sc-management.jpg'

export const HOME_FEATURES_TOUR_LIST: Array<HomeFeaturesTourItem> = [
	{
		image: ProductTour,
		href: 'https://www.youtube.com/watch?v=NfML7e6XkkQ&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Starton - Product Tour',
	},
	{
		image: Relayer,
		href: 'https://www.youtube.com/watch?v=51zIBIPiTW8&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Manage blockchain transactions with Starton',
	},
	{
		image: Wallet,
		href: 'https://www.youtube.com/watch?v=S4yWJzc05LI&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Create wallets to interact with EVM blockchains from your backend',
	},
	{
		image: SCManagement,
		href: 'https://www.youtube.com/watch?v=UNF_QlgZPM0&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Starton Smart Contract Manager ',
	},
	{
		image: FileStorage,
		href: 'https://www.youtube.com/watch?v=9P1gjHuSEbM&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Store files on IPFS with Starton',
	},
	{
		image: Monitor,
		href: 'https://www.youtube.com/watch?v=-PEn8n9pqss&list=PL1-yA7AAgcVJzGRDdI8VYH0dmXotlPnRC',
		alt: 'Starton Blockchain Network Monitoring',
	},
]
