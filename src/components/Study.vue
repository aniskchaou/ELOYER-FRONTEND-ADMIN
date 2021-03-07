<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Etude de cas</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Titre</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr>
            <td>Possession de stupéfiants</td>
            <td>
              <button class="btn btn-sm btn-success">Attachement</button>
              <button
                data-toggle="modal"
                data-target="#viewCase"
                class="btn btn-sm btn-primary"
              >
                Vue
              </button>
              <button
                data-toggle="modal"
                data-target="#editerCase"
                class="btn btn-sm btn-warning"
              >
                Editer
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Titre</th>
            <th scope="col">Actions</th>
          </tr>
        </tfoot>
      </table>
      <button
        type="button"
        style="float: left"
        class="btn btn-success btn-sm"
        data-toggle="modal"
        data-target="#addCaseStudy"
      >
        Ajouter
      </button>
      <div
        class="modal fade"
        id="viewCase"
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
              <h5 class="modal-title" id="exampleModalLongTitle">Voir</h5>
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
              <ViewCaseStudy />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="editerCase"
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
              <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
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
              <AddCaseStudy />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="editerCase"
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
              <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
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
              <EditStudyCase />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card footer -->

    <div
      class="modal fade"
      id="addCaseStudy"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
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
            <AddCaseStudy />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ViewCaseStudy from "@/components/ViewCaseStudy.vue";
import AddCaseStudy from "@/components/AddCaseStudy.vue";
import EditStudyCase from "./EditStudyCase.vue";
export default {
  name: "Study",
  components: {
    ViewCaseStudy: ViewCaseStudy,
    AddCaseStudy: AddCaseStudy,
    EditStudyCase: EditStudyCase,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
