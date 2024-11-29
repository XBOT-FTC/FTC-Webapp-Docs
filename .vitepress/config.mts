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
        text: 'Getting Started',
        items: [
          { text: 'Prerequisite', link: '/docs/intro' },
          { text: 'Setting up', link: '/docs/setup' },
          { text: 'Stack', link: '/docs/stack' },
          { text: 'Workspace', link: '/docs/workspace'}
        ]
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Warning', link: '/docs/warning' },
          { text: 'NextJS', link: '/docs/nextjs' },
          { text: 'React', link: '/docs/react' },
          { text: 'MongoDB', link: '/docs/mongodb'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XBOT-FTC/FTC-Webapp-Docs' }
    ]
  }
})
