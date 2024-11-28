import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Webapp Documentation",
  description: "A Vitepress Site",
  base: "/FTC-Webapp-Docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/docs/intro' }
    ],

    sidebar: [
      {
        text: 'Getting STarted',
        items: [
          { text: 'Prerequisite', link: '/docs/intro' },
          { text: 'Setting up', link: '/docs/setup' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XBOT-FTC/FTC-Webapp-Docs' }
    ]
  }
})
