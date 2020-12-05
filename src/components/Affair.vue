<template>
  <div class="card">
    <!-- Card header -->
    
            
    <div class="card-header border-0">
      <h3 class="mb-0">Affairs</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
       
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
              <a href="#" class="btn btn-sm btn-primary"><span class="glyphicon glyphicon-trash"></span> voir</a>
              <a href="#" class="btn btn-sm btn-info"><span class="glyphicon glyphicon-trash"></span> honoraires</a>
              <a href="#" class="btn btn-sm btn-default"><span class="glyphicon glyphicon-trash"></span> archiver</a>
              <a href="#" class="btn btn-sm btn-success"><span class="glyphicon glyphicon-trash"></span> remarques</a>
               <a href="#" class="btn btn-sm btn-warning"><span class="glyphicon glyphicon-trash"></span> date d'audiance</a>
                <a href="#" class="btn btn-sm btn-danger"><span class="glyphicon glyphicon-trash"></span> editer</a>
            
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Card footer -->
    <div class="card-footer py-4">
      <nav aria-label="...">
        <ul class="pagination justify-content-end mb-0">
          <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">
              <i class="fas fa-angle-left"></i>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#"
              >2 <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">
              <i class="fas fa-angle-right"></i>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Affair",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
