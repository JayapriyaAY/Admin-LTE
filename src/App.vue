<template>
  <div id="app">
    <div class="wrapper">

  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60">
  </div>
  <header-comp></header-comp>
  <side-bar></side-bar>
  <content-comp></content-comp>
  <!-- <router-view></router-view> -->
  <footer-comp></footer-comp>


  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'


export default {
  name: 'App',
  components: {
    'header-comp' : Header,
    'side-bar' : Sidebar,
    'content-comp' : Content,
    'footer-comp' : Footer,
 
  }
}
</script>

