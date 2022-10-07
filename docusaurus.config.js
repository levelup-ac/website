// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LevelUP',
  tagline: 'LevelUP happy coding',
  url: 'https://levelup.ac',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'levelup-ac', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
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
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      typesense: {
        typesenseCollectionName: process.env.TS_COLLECTION_NAME,        
        typesenseServerConfig: {
          nodes: [
            {
              host: process.env.TS_INSTANCE_URL_01,
              port: 443,
              protocol: 'https',
            },
          ],
          apiKey: process.env.TS_SEARCH_API_KEY,
        },
        typesenseSearchParameters: {},
        contextualSearch: true,
      },
      navbar: {
        title: 'LevelUP',
        logo: {
          alt: 'LevelUp happy coding',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        //  {
        //    title: 'Docs',
        //    items: [
        //      {
        //        label: 'Tutorial',
        //        to: '/docs/intro',
        //      },
        //    ],
        //  },
        //  {
        //    title: 'Community',
        //    items: [
        //      {
        //        label: 'Stack Overflow',
        //        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //      },
        //      {
        //        label: 'Discord',
        //        href: 'https://discordapp.com/invite/docusaurus',
        //      },
        //      {
        //        label: 'Twitter',
        //        href: 'https://twitter.com/docusaurus',
        //      },
        //    ],
        //  },
        //  {
        //    title: 'More',
        //    items: [
        //      {
        //        label: 'Blog',
        //        to: '/blog',
        //      },
        //      {
        //        label: 'GitHub',
        //        href: 'https://github.com/facebook/docusaurus',
        //      },
        //    ],
        //  },
        ],
        copyright: ` (•~) ${new Date().getFullYear()} `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
