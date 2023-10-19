const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'pwa_soh_vue',
    themeColor: '#4DBA87',
    manifestOptions: {
      icons: [
        {
          src: './img/icons/icons8-google-48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: './img/icons/icons8-google-96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: './img/icons/icons8-google-144.png',
          sizes: '144x144',
          type: 'image/png',
        },
      ],
    },
  },
})
