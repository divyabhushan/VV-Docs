module.exports = {
  title: 'BI Hub',
  tagline: 'Your BI Search Engine',
  url: 'https://github.com/visualbis/VV-Docs',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'visualbis', // Usually your GitHub org/user name.
  projectName: 'VV-Docs', // Usually your repo name.
  themeConfig: {
    /*
    algolia: {
      apiKey: "api-key",
      indexName: "index-name",
      algoliaOptions: {}, // Optional, if provided by Algolia
  },
  */
    navbar: {
      hideOnScroll: true,
      title: 'BI Hub',
      logo: { 
        alt: 'BI Hub',
        src: 'img/logo.svg',
      },
      items: [
        /*
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',

        },
        */
/*        {to: 'blog', label: 'Blog', position: 'left'}, */
/*        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
*/
{
to: 'docs/installation-guide/welcome',
label: 'Installation Guide',
position: 'right',

},
{
  to: 'docs/admin-guide/getting-started/welcome',
  label: 'Admin Guide',
  position: 'right',
  },
  {
    to: 'docs/user-guide/onboard',
    label: 'User Guide',
    position: 'right',
    },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'BI Hub',
          items: [
            {
              label: 'BI Hub',
              to: 'docs/',
            },
            {
              label: 'Docs',
              to: 'docs',
            },
          ],
        },
        /*
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        */
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/visualbis/VV-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual BI Solutions.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'getting-started/intro',
          sidebarPath: require.resolve('./sidebars.js'),          
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
