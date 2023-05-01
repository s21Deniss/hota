// import Layout from './Layout.vue'

// export default {
//   Layout,

//   // this is a Vue 3 functional component
//   NotFound: () => 'custom 404',

//   enhanceApp({ app, router, siteData }) {
//     // app is the Vue 3 app instance from `createApp()`.
//     // router is VitePress' custom router. `siteData` is
//     // a `ref` of current site-level metadata.
//   }
// }

import './tailwind.postcss'
import DefaultTheme from 'vitepress/theme'
// import Fn from './components/fn.vue'
// import dmgCalc from './components/dmgCalc.vue'
// import LOACalendar from './components/LOACalendar.vue'
import guardCalc from './components/guardCalc.vue'
import VPSocialLink from 'vitepress/client/theme-default/components/VPSocialLink.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('VPSocialLink', VPSocialLink),
    app.component('guardCalc', guardCalc),
    // app.component('Fn', Fn),
    // app.component('LOACalendar', LOACalendar),
    // app.component('dmgCalc', dmgCalc)
  }
}