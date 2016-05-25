import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Container from './Container'

import NotFound from './components/NotFound.vue'
import Dashboard from './components/Dashboard.vue'
import PageGeneral from './components/pages/General.vue'
import PageIcons from './components/pages/Icons.vue'
import PageButtons from './components/pages/Buttons.vue'
import PageSliders from './components/pages/Sliders.vue'
import PageTimeline from './components/pages/Timeline.vue'
import PageModals from './components/pages/Modals.vue'
import Login from './components/pages/Login.vue'

import VueAnimatedList from 'vue-animated-list'
import CreateSurvey from './components/pages/CreateSurvey.vue'
// install router
Vue.use(VueRouter)
Vue.use(VueAnimatedList)


require('script!../node_modules/sweetalert/dist/sweetalert.min.js')


// routing
export var router = new VueRouter({ linkActiveClass: 'active', history: true })

router.map({
  '*': {
    component: Login
  },
  '/app': {
    component: Container,
    // add a subRoutes map under /foo
    subRoutes: {
      '/create-survey': {
        // Bar will be rendered inside Foo's <router-view>
        // when /foo/bar is matched
        component: CreateSurvey,
      },
      '/dashboard':{
        component: Dashboard
      }

    },
  },
  '/login': {
    component: Login
  },
  '/ui/general': {
    component: PageGeneral
  },
  '/ui/icons': {
    component: PageIcons
  },
  '/ui/buttons': {
    component: PageButtons
  },
  '/ui/sliders': {
    component: PageSliders
  },
  '/ui/timeline': {
    component: PageTimeline
  },
  '/ui/modals': {
    component: PageModals
  }
})

router.start(App, 'body')
