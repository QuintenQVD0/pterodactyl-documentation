import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Slideshow from '@site/src/components/SlideShow/Slideshow';
import GetStartedSection from '@site/src/components/GetStartedSection/GetStartedSection';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/Documentation/Panel/getting_started">
            Let's Get Started!
          </Link>
        </div>
      </div>
    </header>
  );
}

const images = [
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-1.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-2.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-3.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-4.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-5.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-6.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-7.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-8.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-9.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-10.png',
  'https://cdn.pterodactyl.io/site-assets/carousel/screenshot-11.png',
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Slideshow images={images} />
        <GetStartedSection />
      </main>
    </Layout>
  );
}




