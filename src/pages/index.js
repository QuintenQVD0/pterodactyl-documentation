import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Slideshow from '@site/src/components/SlideShow/Slideshow';
import GetStartedSection from '@site/src/components/GetStartedSection/GetStartedSection';
import headerimage from './../../static/img/Pterodactyl_Header_Image.png';
import InfoPterodactyl from '@site/src/components/InfoPterodactyl'
import styles from './index.module.css';

const titleStyle = {
  fontSize: '5rem', // Adjust the font size as needed
};
const buttonStyle = {
  margin: '2rem 0', // Add margin at the top and bottom of the button
};


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.headerContent}>
          <img src={headerimage} alt="Image Description" className={styles.image} />
          <h1 className="hero__title" style={titleStyle}>
            {siteConfig.title}
          </h1>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/documentation/panel/getting_started" style={buttonStyle}>
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
        <InfoPterodactyl />
        <HomepageFeatures />
        <Slideshow images={images} />
        <GetStartedSection />
      </main>
    </Layout>
  );
}

