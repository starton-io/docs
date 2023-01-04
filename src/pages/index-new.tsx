import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function Home() {
    return (
        <Layout title="Starton Hub | Documentation, Guides, Tutorials" description="Starton is a Platform to Deploy On-demand Environments on AWS in Just a Few Seconds">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Starton Documentation Resources</h1>
                </div>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a href="docs" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-book"></i>
                                    </div>
                                    <div className="panel--title">Documentation</div>
                                    <div className="panel--description">Read our product documentation</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="guides" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-layers"></i>
                                    </div>
                                    <div className="panel--title">Guides</div>
                                    <div className="panel--description">Get started using Starton smoothly</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="guides/tutorial" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-bookmark"></i>
                                    </div>
                                    <div className="panel--title">Tutorials</div>
                                    <div className="panel--description">Check out our tutorials</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{marginTop: "10px"}}>
                        <div className="row">
                            <div className="col">
                                <a href="https://discord.Starton.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-message-circle"></i>
                                    </div>
                                    <div className="panel--title">Discord</div>
                                    <div className="panel--description">Join our community on Discord</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://roadmap.Starton.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-flag"></i>
                                    </div>
                                    <div className="panel--title">Blog</div>
                                    <div className="panel--description">Check out our Blog</div>
                                </a>
                            </div>

                            <div className="col">
                                <a href="https://discuss.Starton.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-message-circle"></i>
                                    </div>
                                    <div className="panel--title">API</div>
                                    <div className="panel--description">Check out our API reference</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://github.com/Starton" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-github"></i>
                                    </div>
                                    <div className="panel--title">Github</div>
                                    <div className="panel--description">Issues, code, and development</div>
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
