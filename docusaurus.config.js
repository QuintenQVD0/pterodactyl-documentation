// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pterodactyl',
  tagline: 'Pterodactyl is an open-source game server management panel built with PHP, React, and Go. Designed with security in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful and intuitive UI to end users.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://quintenqvd0.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/pterodactyl-documentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'QuintenQVD0', // Usually your GitHub org/user name.
  projectName: 'pterodactyl-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QuintenQVD0/pterodactyl-documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pterodactyl',
        logo: {
          alt: 'Pterodactyl',
          src: 'img/pterry.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'DocsSidebar',
            position: 'right',
            label: 'Documentation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'CommunitySidebar',
            position: 'right',
            label: 'Community Guides',
          },
          {
            href: 'https://discord.gg/pterodactyl',
            label: 'Get Help',
            position: 'right',
          },
          {
            href: 'https://github.com/pterodactyl/panel',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://dashflo.net/docs/api/pterodactyl/v1/',
            label: 'API',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: ' ',
            items: [
              {
                html: `
                <a>
                  <img src="https://raw.githubusercontent.com/QuintenQVD0/pterodactyl-documentation/main/static/img/banner_logo.png" alt="" width="300" height="72" />
                </a>
                <p>
                Since 2015 Pterodactyl® has been delivering robust, performant, and secure software that allows individuals, networks, and hosting companies to run game servers at scale; easily. Best of all? No exorbitant monthly costs.<br /><br />
                Take the plunge today and discover why thousands of users trust Pterodactyl® to manage their game servers. 
                </p>
              `,
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pterodactyl/panel',
              },
              {
                label: 'Sponsor',
                href: 'https://github.com/sponsors/matthewpi',
              },
              {
                label: 'Donate',
                href: 'https://paypal.me/PterodactylSoftware',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: `
                <a href="https://discord.gg/pterodactyl" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://raw.githubusercontent.com/QuintenQVD0/pterodactyl-documentation/main/static/img/discord.png" alt="" width="280" height="85" />
                </a>
              `,
              },
            ],
          },
        ],
        copyright: `MIT Licensed | Pterodactyl © 2015-${new Date().getFullYear()} Dane Everitt & contributors. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;
