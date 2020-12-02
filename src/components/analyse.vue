<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Analyse</h4>
    </div>
    <div class="card-body">
     
      <div class="table-responsive">
         
        <table class="table">
          <thead class="text-primary">
            <th>Nom</th>
            <th>Contact</th>
            <th>Age</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <tr>
              <td>iuhiu</td>
              <td>jhj@gmail.com</td>
              <th>11</th>
              <th>22/11/2020</th>
              <td><p class="bg-success text-white">Terminé</p></td>
              <td><a href="#" onclick="demo.showNotification('top','right')" class="btn btn-primary"><span class="glyphicon glyphicon-eye-open"></span>Voir  </a>
                <a href="#" onclick="demo.showNotification('top','right')" class="btn btn-warning"><span class="glyphicon glyphicon-edit"></span> Modifier </a>
                <a href="#" onclick="demo.showNotification('top','right')" class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span> Supprimer  </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "^patient",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
