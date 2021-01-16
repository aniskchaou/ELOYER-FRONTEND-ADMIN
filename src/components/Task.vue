<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Taches</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Nom</th>
            <th scope="col" class="sort" data-sort="name">Priorité</th>
            <th scope="col" class="sort" data-sort="name">Date</th>
            <th scope="col" class="sort" data-sort="name">Crée par</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr>
            <td>apppeler le client</td>
            <td>urgent</td>
            <td>12/08/2020</td>
            <td>Yvon Varieur</td>
            <td>
              <button  data-toggle="modal" data-target="#editTask" class="btn btn-sm btn-success">Editer</button>
              <button class="btn btn-sm btn-warning">Supprimer</button>
             
            </td>
          </tr>
        </tbody>
         <tfoot class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Nom</th>
            <th scope="col" class="sort" data-sort="name">Priorité</th>
            <th scope="col" class="sort" data-sort="name">Date</th>
            <th scope="col" class="sort" data-sort="name">Crée par</th>
            <th scope="col">Actions</th>
          </tr>
         </tfoot>
      </table>

        <button
        type="button"
        style="float: left"
        class="btn btn-success btn-sm"
        data-toggle="modal"
        data-target="#addAffair"
      >
        Ajouter
      </button>
      <div
        class="modal fade"
        id="addAffair"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <AddTask />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        class="modal fade"
        id="editTask"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <EditTask />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>


    </div>
    <!-- Card footer -->

  </div>
</template>

<script>

import AddTask from './AddTask.vue';
import EditTask from './EditTask.vue';
export default {
  name: "Task",
  components:{
    "AddTask":AddTask,
    "EditTask":EditTask
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
