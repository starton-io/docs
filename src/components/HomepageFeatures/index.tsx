import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'
// eslint-disable-next-line import/no-unresolved
import Heading from '@theme/Heading'

type FeatureItem = {
	title: string
	/* Svg: React.ComponentType<React.ComponentProps<'svg'>>;*/
	description: React.ReactNode
}

const FeatureList: FeatureItem[] = [
	{
		title: 'Wallet',
		/*Svg: require('@site/static/tutorials/illustrations/wallet.svg').default,*/
		description: <React.Fragment>Automate transaction using a key management system.</React.Fragment>,
	},
	{
		title: 'Smart Contracts',
		/* Svg: require('@site/static/tutorials/illustrations/smart-contract.svg').default,*/
		description: (
			<React.Fragment>Deploy your smart contracts and interact from the dashboard and API.</React.Fragment>
		),
	},
	{
		title: 'Monitor',
		/* Svg: require('@site/static/tutorials/illustrations/watcher.svg').default,*/
		description: <React.Fragment>Monitor and get notified for any blockchain event.</React.Fragment>,
	},
]

function Feature({ title, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center padding-horiz--md">
				<Heading as={'h3'}>{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}
