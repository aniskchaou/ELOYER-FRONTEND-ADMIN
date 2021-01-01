<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Paramètres</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
       
       <div class="col-md-12">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Nom entreprise</label>
                        <input id="input-address" class="form-control" placeholder="Home Address" value="" type="text">
                      </div>
                    </div>


                       <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Adresse entreprise</label>
                        <input id="input-address" class="form-control" placeholder="Home Address" value="" type="text">
                      </div>
                    </div>


                       <div class="col-md-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-address">Email entreprise</label>
                        <input id="input-address" class="form-control" placeholder="Home Address" value="" type="text">
                      </div>
                    </div>

                    
        </div>
        <a href="#" style="float: left;" class="btn btn-sm btn-primary">Enregistrer</a>
        <br><br>










      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Configuration",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
