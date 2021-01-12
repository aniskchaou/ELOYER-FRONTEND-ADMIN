<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Contacts</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Nom</th>
            <th scope="col" class="sort" data-sort="name">Téléphone</th>
            <th scope="col" class="sort" data-sort="name">Email</th>
            <th scope="col" class="sort" data-sort="name">Adreess</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr>
            <td>Anis</td>
            <td>7657658</td>
            <td>anis@gmail.com</td>
            <td>lhlllh</td>
            <td><a href="#" data-toggle="modal" data-target="#editContact" class="btn btn-sm btn-warning">editer</a>
            <a href="#" class="btn btn-sm btn-danger">supprimer</a>
            </td>
          </tr>
        </tbody>
      </table>


       <button type="button" style="float: left;" class="btn btn-success btn-sm" data-toggle="modal" data-target="#addContact">Ajouter</button>
         <div class="modal fade" id="addContact" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <AddContact/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


       <button type="button" style="float: left;" class="btn btn-success btn-sm" data-toggle="modal" data-target="#editContact">Ajouter</button>
         <div class="modal fade" id="editContact" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <EditContact/>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


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
import AddContact from '@/components/AddContact.vue';
import EditContact from './EditContact.vue';

export default {
  name: "Contact",
  components:{
   'AddContact':AddContact,
   'EditContact':EditContact
  },
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
