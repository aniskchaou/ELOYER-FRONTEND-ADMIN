<template>
<div>
   <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Rendez-vous</h5>
                      <span class="h2 font-weight-bold mb-0">1</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                        <i class="ni ni-active-40"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                   
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Affairs</h5>
                      <span class="h2 font-weight-bold mb-0">2</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-orange text-white rounded-circle shadow">
                        <i class="ni ni-chart-pie-35"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                    
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Affairs archivés</h5>
                      <span class="h2 font-weight-bold mb-0">1</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-green text-white rounded-circle shadow">
                        <i class="ni ni-money-coins"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                   
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card card-stats">
                <!-- Card body -->
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <h5 class="card-title text-uppercase text-muted mb-0">Étude de cas</h5>
                      <span class="h2 font-weight-bold mb-0">1</span>
                    </div>
                    <div class="col-auto">
                      <div class="icon icon-shape bg-gradient-info text-white rounded-circle shadow">
                        <i class="ni ni-chart-bar-32"></i>
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 mb-0 text-sm">
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

      
      
   <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">Affairs</h3>
                </div>
                <div class="col text-right">
                  <router-link class="btn btn-sm btn-primary" to="/affair">See all</router-link>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
              <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">No</th>
            <th scope="col" class="sort" data-sort="budget">Titre</th>
            <th scope="col" class="sort" data-sort="status">Client</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr>
            <td>2323/2020</td>
            <td>vol</td>
            <td>Anis</td>
            <td>
              <a href="#" data-toggle="modal" data-target="#viewAffair" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-trash"></span> voir</a>
   
            
            </td>
          </tr>
        </tbody>
      </table>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card">
            <div class="card-header border-0">
              <div class="row align-items-center">
                <div class="col">
                  <h3 class="mb-0">Taches</h3>
                </div>
                <div class="col text-right">
                  <router-link class="btn btn-sm btn-primary" to="/task">See all</router-link>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <!-- Projects table -->
                  <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Nom</th>
                    <th scope="col" class="sort" data-sort="name">Priorité</th>
                   
                    
                   
                  </tr>
                </thead>
                <tbody class="list">
                  <tr>
                   <td>cas</td>
                   <td>urgent</td>
                   
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


</div>        
</template>

<script>
export default {
  name: "Dashboard",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
