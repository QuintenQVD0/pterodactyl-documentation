import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';



const FeatureList = [
  {
    title: 'Security First',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Security is a first-class citizen on this platform with bcrypt hashing, 
        AES-256-CBC encryption, and HTTPS support out of the box.
      </>
    ),
  },
  {
    title: 'Modern Tooling',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Built on a modern stack utilizing the best design
        practices that make it easy to jump in and make
        modifications.
      </>
    ),
  },
  {
    title: 'Docker to the Core',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        All servers run in isolated Docker containers that limit attack vectors, provide strict resource limits, and provide environments tailored to each specific game
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pterodactyl is 100% free and licensed under a MIT license. All of our code is completely open source as well.
      </>
    ),
  },
  {
    title: 'User Friendly',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Save the furious clicking and screaming for Overwatch. Pterodactyl's interface is designed so well even Hanzo can use it.
      </>
    ),
  },
  {
    title: 'Scalable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you're a hosting company, the next Hyplex, or just some dudes playing video games, we've got you covered.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
