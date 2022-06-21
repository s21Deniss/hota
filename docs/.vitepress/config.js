export default {
  title: 'Lost Ark notes',
  description: 'lost ark notes',
  themeConfig: {
    nav: nav(),
    // nav: [
    //   { text: 'Guide', link: '/guide' },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {
    //         // Title for the section.
    //         text: 'Section A Title',
    //         items: [
    //           { text: 'Section A Item A', link: '...' },
    //           { text: 'Section B Item B', link: '...' }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       {
    //         // You may also omit the title.
    //         items: [
    //           { text: 'Section A Item A', link: '...' },
    //           { text: 'Section B Item B', link: '...' }
    //         ]
    //       }
    //     ]
    //   }
    // ],

    // socials
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    //sidebar
    sidebar: [
      // {
      //   text: 'Argos',
      //   collapsible: true,
      //   items: [
      //     { text: 'Gate 1', link: '/vykas/' },
      //     { text: 'Gate 2', link: '/vykas/gate2' },
      //     { text: 'Gate 3', link: '/vykas/gate3' },
      //   ]
      // },
      // {
      //   text: 'Valtan',
      //   collapsible: true,
      //   items: [
      //     { text: 'Gate 1', link: '/vykas/' },
      //     { text: 'Gate 2', link: '/vykas/gate2' },
      //     { text: 'Gate 3', link: '/vykas/gate3' },
      //   ]
      // },
      {
        text: 'Vykas',
        collapsible: true,
        items: [
          { text: 'Gate 1', link: '/vykas/' },
          { text: 'Gate 2', link: '/vykas/gate2' },
          { text: 'Gate 3', link: '/vykas/gate3' },
        ]
      },
      {
        text: 'Tool & Resources',
        collapsible: true,
        items: [
          { text: 'Merchants tracker', link: 'https://lostmerchants.com/' },
          { text: 'Casino stone calculator', link: 'https://lostark.meta-game.gg/ability-stone-calculator' },
          { text: 'KR Ladder', link: 'https://loawa.com/rank' },
          { text: 'Daily activity tracker', link: 'https://ark.bynn.kr/home' },
        ]
      }
    ],


    editLink: {
      pattern: 'https://github.com/s21Deniss/lostarkNotes/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }

  }
}



function nav() {
  return [
    { text: 'Welcom Lost ark enjoyers', link: '#' },
  ]
}