import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Wallet',
    Svg: require('@site/static/img/wallet.svg').default,
    description: (
      <>
        Automate transaction using a key management system.
      </>
    ),
  },
  {
    title: 'Smart Contracts',
    Svg: require('@site/static/img/Smartcontract.svg').default,
    description: (
      <>
        Deploy your smart contracts and interact from the dashboard and API.
      </>
    ),
  },
  {
    title: 'Monitor',
    Svg: require('@site/static/img/Watcher.svg').default,
    description: (
      <>
        Monitor and get notified for any blockchain event.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
