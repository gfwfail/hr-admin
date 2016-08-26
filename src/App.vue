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
    
    .fade-enter,
    .fade-leave {
        opacity: 0;
        visibility: hidden;
    }
    
    .content {
        min-height: 700px;
    }
    
    .tabs-left > .nav-tabs {
        border-bottom: 0;
    }
    
    .tab-content > .tab-pane,
    .pill-content > .pill-pane {
        display: none;
    }
    
    .tab-content > .active,
    .pill-content > .active {
        display: block;
    }
    
    .tabs-left > .nav-tabs > li {
        float: none;
    }
    
    .tabs-left > .nav-tabs > li > a {
        min-width: 74px;
        margin-right: 0;
        margin-bottom: 3px;
    }
    
    .tabs-left > .nav-tabs {
        float: left;
        margin-right: 19px;
        border-right: 1px solid #ddd;
    }
    
    .tabs-left > .nav-tabs > li {
        margin-right: -1px;
        border-radius: 0;
        border-left: solid 4px #3c8dbc;
    }
    
    .btn-app i {
        transition: all 1s;
    }
    
    .btn-app i:hover {
        transform: rotate(720deg);
    }
    
    .tabs-left > .nav-tabs > li >a {
        border-radius: 0;
        border-left: 0;
    }
    
    .tabs-left > .nav-tabs > li > a:hover,
    .tabs-left > .nav-tabs > li > a:focus {
        border-color: #eeeeee #dddddd #eeeeee #eeeeee;
    }
    
    .tabs-left > .nav-tabs .active > a,
    .tabs-left > .nav-tabs .active > a:hover,
    .tabs-left > .nav-tabs .active > a:focus {
        border-color: #ddd transparent #ddd #ddd;
        *border-right-color: #ffffff;
    }
</style>