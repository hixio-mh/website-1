export default {
  mode: 'spa',

  head: {
    title: 'Pop!_OS by System76',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },

      { name: 'theme-color', content: '#6ACAD8' },
      { name: 'msapplication-TileColor', content: '#46bac8' },

      { name: 'application-name', content: 'Pop!_OS by System76' },
      { name: 'apple-mobile-web-app-title', content: 'Pop!_OS' },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Pop!_OS by System76' },
      { name: 'og:description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },
      { name: 'og:image', content: 'https://pop.system76.com/icon.png' },
      { name: 'og:url', content: 'https://pop.system76.com' },

      { name: 'twitter:site', content: '@system76' },
      { name: 'twitter:title', content: 'Pop!_OS by System76' },
      { name: 'twitter:description', content: 'Imagine an OS for the software developer, maker and computer science professional who uses their computer as a tool to discover and create. Welcome to Pop!_OS.' },
      { name: 'twitter:image', content: 'https://pop.system76.com/icon.png' }
    ],

    link: [
      { rel: 'manifest', href: '/manifest.json' },

      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icon-16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32.png' },
      { rel: 'application-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#46bac8' }
    ]
  },

  css: [
    '@system76/design/dist/index.common.css',
    '@system76/components/dist/index.common.css',
    '@system76/forms/dist/index.common.css',
    '~/assets/styles/main.css'
  ],

  loading: {
    color: '#6ACAD8'
  },

  buildModules: [
    '@nuxtjs/color-mode',
    '@aceforth/nuxt-optimized-images'
  ],

  plugins: [
    '~/plugins/asset-components',
    '~/plugins/components',
    '~/plugins/design',
    '~/plugins/forms'
  ],

  optimizedImages: {
    optimizeImages: true
  }
}
