import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'
import Button from '@mui/material/Button'

function Home() {
	return (
		<Layout title="Starton Hub | Documentation, Guides, Tutorials">
			<header className="hero">
				<div className="container container--fluid">
					<h1>Starton Documentation</h1>
					<p>Turn any app into a blockchain app.</p>
					<a href="https://docs.starton.com/docs/overview">
						<button className="button__home" type="button">
							Get Started
						</button>
					</a>
				</div>
			</header>
			<main>
				<section className="hero">
					<div className="containerdocHome">
						<div className="rowdocHome">
							<div className="col" className="cardHome">
								<a className="button-card button-card--vertical" href="/docs/IPFS/understanding-IPFS">
									<img src="img/IPFShome.png" alt="wallets" width="268" height="268"></img>
									<div className="barre1"></div>
									<h2>Storage</h2>
									<div className="button-card__inner">
										<p className="link">Host and pin files on IPFS.</p>
									</div>
								</a>
							</div>

							<div className="col" className="cardHome">
								<a
									className="button-card button-card--vertical"
									href="/docs/Smart-contract/understanding-smart-contracts"
								>
									<img src="img/Smartcontract.svg" alt="wallets" width="268" height="268"></img>
									<div className="barre2"></div>
									<h2>Smart Contracts</h2>
									<div className="button-card__inner">
										<p className="link">Deploy & interact with smart contracts.</p>
									</div>
								</a>
							</div>

							<div className="col" className="cardHome">
								<a
									className="button-card button-card--vertical"
									href="/docs/watcher/understanding-watchers"
								>
									<img src="img/Watcher.svg" alt="wallets" width="268" height="268"></img>
									<div className="barre3"></div>
									<h2>Monitor</h2>
									<div className="button-card__inner">
										<p className="link">Monitor events on blockchain & get notified.</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export default Home
