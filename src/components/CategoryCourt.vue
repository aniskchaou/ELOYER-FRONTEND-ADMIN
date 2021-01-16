<template>
        <div class="card">
            <!-- Card header -->
            <div class="card-header border-0">
              <h3 class="mb-0">Catégorie de cour</h3>
            </div>
            <!-- Light table -->
            <div class="table-responsive">
              <table class="table align-items-center table-flush">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Nom</th>
                    <th scope="col">Actions</th>
                   
                  </tr>
                </thead>
                <tbody class="list">
                  
.
                  <tr>
                   <td>Les juridictions administratives</td>
                   <td><button  class="btn btn-sm btn-success">Editer</button>
                   <button class="btn btn-sm btn-warning">Supprimer</button>
                   <button class="btn btn-sm btn-danger">Commenter</button></td>
                  </tr>

                  <tr>
                   <td>Les juridictions civiles</td>
                   <td><button  class="btn btn-sm btn-success">Editer</button>
                   <button class="btn btn-sm btn-warning">Supprimer</button>
                   <button class="btn btn-sm btn-danger">Commenter</button></td>
                  </tr>
                 
                </tbody>
                <tfoot class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="name">Nom</th>
                    <th scope="col">Actions</th>
                   
                  </tr>
                </tfoot>
              </table>
            </div>
            <!-- Card footer -->
   
          </div>
</template>

<script>
export default {
  name: "CategoryCourt",
  mounted() {
   //An array of assets
    let scripts = [
        
      { src: "https://code.jquery.com/jquery-2.2.4.min.js" },
        { src: "https://cdn.datatables.net/v/dt/b-1.6.5/b-flash-1.6.5/b-html5-1.6.5/datatables.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js" },
        { src: "https://cdn.datatables.net/v/dt/dt-1.10.23/b-1.6.5/b-colvis-1.6.5/b-html5-1.6.5/datatables.min.js" },
        { src: "https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/b-1.6.5/b-html5-1.6.5/b-print-1.6.5/datatables.min.js" },
        { src: "js/init.js" }
    ]
    //Append the script element on each iteration
    
       
        for (let i = 0; i < scripts.length; i++) {
          const node = document.createElement('script');
          node.src = scripts[i].src;
          node.type = 'application/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.body.appendChild(node);
          console.log(i)
        }  
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
