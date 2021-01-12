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
                <router-link active-class="active" class="nav-link" to="/dashboard">
                  <i class="ni ni-tv-2 text-primary"></i>
                  <span class="nav-link-text">Tableau de bord</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/affair">
                  <i class="ni ni-planet text-orange"></i>
                  <span class="nav-link-text">Affairs</span>
                </router-link>
              </li>
               <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/favouriteaffair">
                  <i class="ni ni-support-16 text-blue"></i>
                  <span class="nav-link-text">Affairs favoris</span>
                </router-link>
              </li>
               <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/archivedaffair">
                  <i class="ni ni-tie-bow text-yellow"></i>
                  <span class="nav-link-text">Affairs Archivés</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/document">
                  <i class="ni ni-paper-diploma text-green"></i>
                  <span class="nav-link-text">Documents</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/court">
                  <i class="ni ni-pin-3 text-primary"></i>
                  <span class="nav-link-text">Tribunal</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" to="/study">
                  <i class="ni ni-single-02 text-yellow"></i>
                  <span class="nav-link-text">Etude de cas</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/task" class="nav-link">
                  <i class="ni ni-map-big text-default"></i>
                  <span class="nav-link-text">Taches</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/contact" class="nav-link">
                  <i class="ni ni-pin-3 text-info"></i>
                  <span class="nav-link-text">Contacts</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/rendezvous" class="nav-link">
                  <i class="ni ni-circle-08 text-blue"></i>
                  <span class="nav-link-text">Rendez-vous</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/act" class="nav-link">
                  <i class="ni ni-bold-up text-red"></i>
                  <span class="nav-link-text">Acte</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/categoryaffair" class="nav-link">
                  <i class="ni ni-check-bold text-pink"></i>
                  <span class="nav-link-text">Catégorie de d'affair</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/categorycourt" class="nav-link">
                  <i class="ni ni-bold text-purple"></i>
                  <span class="nav-link-text">Catégorie de cour</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/client" class="nav-link">
                  <i class="ni ni-atom text-yellow"></i>
                  <span class="nav-link-text">Client</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" to="/configuration" class="nav-link">
                  <i class="ni ni-air-baloon"></i>
                  <span class="nav-link-text">Paramètres</span>
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
                Developed by <a href="https://github.com/aniskchaou">Anis KCHAOU</a>
              </div>
            </div>
            <div class="col-lg-6">
              
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
@import "assets/css/argon.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
