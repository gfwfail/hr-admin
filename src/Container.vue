<template>
  <router-view></router-view>

  <app-header></app-header>
  <app-sidebar></app-sidebar>
  <app-content></app-content>
  <app-footer></app-footer>
</template>

<script>

  import Header from './components/layout/Header.vue'
  import Sidebar from './components/layout/Sidebar.vue'
  import Content from './components/layout/Content.vue'
  import Footer from './components/layout/Footer.vue'

  module.exports = {
    name: 'Container',
    data: function () {
      return {
        menu: require('./../config/menu.js') || []
      }
    },
    replace: true,
    components: {
      'app-header': Header,
      'app-sidebar': Sidebar,
      'app-content': Content,
      'app-footer': Footer
    }
  }

</script>

<style>
.fade-transition {
  transition: all 0.4s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
}
.fade-transition {
  /* Delay for showing the content after the loader has been hidden */
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
.content {
  min-height:700px;
}
</style>
