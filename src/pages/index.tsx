import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function Home() {
    return (
        <Layout title="Starton Hub | Documentation, Guides, Tutorials">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Starton Documentation</h1>
                    <p>Turn any app into a blockchain app.</p>
                    <a href="https://docs.starton.io/docs/home"><button class="buttonHome" type="button">Get Started</button></a>
                </div>
            </header>
            <main>
                <section className="hero">
                       <div class="containerdocHome">
                       <div class="rowdocHome">

                       <div class="col" class="cardHome">
                       <a class="button-card button-card--vertical" href="/docs/Wallet/understanding-key-management-systems"><img src="img/wallet.svg" alt="wallets" width="268" height="268"></img><div class="barre1"></div><h2>Wallets</h2>
                       <div class="button-card__inner">
                       <p class="link">Understand Key Management Systems.</p>
                       </div>
                       </a>
                       </div>

                       <div class="col" class="cardHome">
                       <a class="button-card button-card--vertical" href="/docs/Smart-contract/understanding-smart-contracts"><img src="img/Smartcontract.svg" alt="wallets" width="268" height="268"></img><div class="barre2"></div><h2>Smart Contracts</h2>
                       <div class="button-card__inner">
                       <p class="link">Deploy & interact with smart contracts.</p>
                       </div>
                       </a>
                       </div>

                       <div class="col" class="cardHome">
                       <a class="button-card button-card--vertical" href="/docs/watcher/understanding-watchers"><img src="img/Watcher.svg" alt="wallets" width="268" height="268"></img><div class="barre3"></div><h2>Monitor</h2>
                       <div class="button-card__inner">
                       <p class="link">Monitor events on blockchain & get notified,</p>
                       </div>
                       </a>
                       </div>
                       </div>
                    </div>

                </section>
            </main>
        </Layout>
    );
}

export default Home;
