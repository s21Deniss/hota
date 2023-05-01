export default {
  title: 'hota.s21.dev',
  description: 'hota',
  lang: 'en-US',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/spriteIcon.webp' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
  ],
  themeConfig: {
    nav: nav(),
    lastUpdatedText: 'Updated Date',
    logo: '/pinkpheon.webp',
    // socials
    socialLinks: [
      { icon: 'github', link: 'https://github.com/s21Deniss/hota' },
    ],

    //sidebar
    sidebar: [
      {
        text: 'Tools',
        items: [
          { text: 'Guard Calculator', link: '/guard/' }
        ]
      },
      // {
      //   text: 'Argos',
      //   collapsible: true,
      //   items: [
      //     { text: 'Gate 1', link: '/vykas/' },
      //     { text: 'Gate 2', link: '/vykas/gate2' },
      //     { text: 'Gate 3', link: '/vykas/gate3' },
      //   ]
      // },

    ],


    editLink: {
      pattern: 'https://github.com/s21Deniss/hota/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}



function nav() {
  return [
    { text: 'Hota', link: '#', activeMatch: '/' },
    { text: 'Lost Ark', link: 'https://lostark.s21.dev/', activeMatch: 'https://lostark.s21.dev/' },
    { text: 'BDO', link: 'https://bdo.s21.dev' },
  ]
}