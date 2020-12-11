<template>
  <div id="app">
    <div v-if="this.$route.path !== '/'">
    <!-- Sidenav -->
    <nav
      class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div class="scrollbar-inner">
        <!-- Brand -->
        <div class="sidenav-header align-items-center">
          <a class="navbar-brand" href="javascript:void(0)">
            <img
              src="@/assets/img/brand/logo.png"
              class="navbar-brand-img"
              alt="..."
            />
          </a>
        </div>
        <div class="navbar-inner">
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Nav items -->
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/dashboard">
                  <i class="ni ni-tv-2 text-primary"></i>
                  <span class="nav-link-text">Tableau de bord</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/affair">
                  <i class="ni ni-planet text-orange"></i>
                  <span class="nav-link-text">Affairs</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/document">
                  <i class="ni ni-pin-3 text-primary"></i>
                  <span class="nav-link-text">Documents</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/study">
                  <i class="ni ni-single-02 text-yellow"></i>
                  <span class="nav-link-text">Etude de cas</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/task" class="nav-link">
                  <i class="ni ni-bullet-list-67 text-default"></i>
                  <span class="nav-link-text">Taches</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  <i class="ni ni-key-25 text-info"></i>
                  <span class="nav-link-text">Contacts</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/rendezvous" class="nav-link">
                  <i class="ni ni-circle-08 text-pink"></i>
                  <span class="nav-link-text">Rendez-vous</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/configuration" class="nav-link">
                  <i class="ni ni-send text-dark"></i>
                  <span class="nav-link-text">Parametres</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- Main content -->
    <div class="main-content" id="panel">
      <!-- Topnav -->
      <Headerbar/>
      <!-- Header -->
      <!-- Header -->
     
      <div class="header bg-primary pb-6">
        <div class="container-fluid">
          <div class="header-body">
         
          </div>
        </div>
      </div>
       
      <!-- Page content -->
      <div class="container-fluid mt--6">
        <div class="row">
          <div class="col">
           <router-view />
          </div>
        </div>
        <!-- Dark table -->

        <!-- Footer -->
        <footer class="footer pt-0">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6">
              <div class="copyright text-center text-lg-left text-muted">
                &copy; 2020
                <a
                  href="https://www.creative-tim.com"
                  class="font-weight-bold ml-1"
                  target="_blank"
                  >Creative Tim</a
                >
              </div>
            </div>
            <div class="col-lg-6">
              <ul
                class="nav nav-footer justify-content-center justify-content-lg-end"
              >
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    class="nav-link"
                    target="_blank"
                    >Creative Tim</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    class="nav-link"
                    target="_blank"
                    >About Us</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="http://blog.creative-tim.com"
                    class="nav-link"
                    target="_blank"
                    >Blog</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                    class="nav-link"
                    target="_blank"
                    >MIT License</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

    </div>
    </div>
    





    <div v-if="this.$route.path === '/'" >
     <Login/>
     </div>
  
      
  </div>
  
</template>

<script>

import Headerbar from './components/Headerbar.vue';
import Login from './components/Login.vue';
export default {
  name: "App",
  components: {
     'Headerbar': Headerbar,
    'Login': Login
    
  },
};
</script>

<style>

@import "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700";
@import "assets/nucleo/css/nucleo.css";
@import "assets/fontawesome-free/css/all.min.css";
@import "assets/css/argon.css?v=1.2.0";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
