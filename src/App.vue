<template>
  <router-view></router-view>
</template>

<script>
  module.exports = {
    name: 'App',
    replace: false,
  }

</script>

<style lang="scss">

@import '../node_modules/sweetalert/dist/sweetalert.css';

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
