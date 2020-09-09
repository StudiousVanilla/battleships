// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLongArrowAltRight) // for ship ship.vertical is false
library.add(faLongArrowAltDown) // for ship ship.vertical is true

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})



