<template>
  <div class="card">
    <!-- Card header -->

    <div class="card-header border-0">
      <h3 class="mb-0">Affairs Archivés</h3>
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
            <td>8786-9799</td>
            <td>menace de mort - Varieur</td>
            <td>Yvon Varieur</td>
            <td>
              <a
                href="#"
                data-toggle="modal"
                data-target="#viewAffair"
                class="btn btn-sm btn-primary"
                ><span class="glyphicon glyphicon-trash"></span> voir</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#fee"
                class="btn btn-sm btn-info"
                ><span class="glyphicon glyphicon-trash"></span> honoraires</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#archiveAffair"
                class="btn btn-sm btn-default"
                ><span class="glyphicon glyphicon-trash"></span> archiver</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#addNote"
                class="btn btn-sm btn-success"
                ><span class="glyphicon glyphicon-trash"></span> remarques</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#hearingDate"
                class="btn btn-sm btn-warning"
                ><span class="glyphicon glyphicon-trash"></span> date
                d'audiance</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#editAffair"
                class="btn btn-sm btn-danger"
                ><span class="glyphicon glyphicon-trash"></span> editer</a
              >
            </td>
          </tr>

           <tr>
            <td>4343-4433</td>
            <td>Méfait et fraude - Grimard</td>
            <td>Evrard Grimard</td>
            <td>
              <a
                href="#"
                data-toggle="modal"
                data-target="#viewAffair"
                class="btn btn-sm btn-primary"
                ><span class="glyphicon glyphicon-trash"></span> voir</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#fee"
                class="btn btn-sm btn-info"
                ><span class="glyphicon glyphicon-trash"></span> honoraires</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#archiveAffair"
                class="btn btn-sm btn-default"
                ><span class="glyphicon glyphicon-trash"></span> archiver</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#addNote"
                class="btn btn-sm btn-success"
                ><span class="glyphicon glyphicon-trash"></span> remarques</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#hearingDate"
                class="btn btn-sm btn-warning"
                ><span class="glyphicon glyphicon-trash"></span> date
                d'audiance</a
              >
              <a
                href="#"
                data-toggle="modal"
                data-target="#editAffair"
                class="btn btn-sm btn-danger"
                ><span class="glyphicon glyphicon-trash"></span> editer</a
              >
            </td>
          </tr>
        </tbody>
         <tfoot class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">No</th>
            <th scope="col" class="sort" data-sort="budget">Titre</th>
            <th scope="col" class="sort" data-sort="status">Client</th>
            <th scope="col">Actions</th>
          </tr>
         </tfoot>
      </table>

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
              <AddAffair />
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
        id="viewAffair"
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
              <ViewAffair />
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
        id="fee"
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
              <Fee />
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
        id="archiveAffair"
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
              <ArchiveAffair />
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
        id="editAffair"
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
              <EditAffair />
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
        id="hearingDate"
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
              <HearingDate />
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
        id="addNote"
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
              <AddNote />
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
import AddAffair from "@/components/AddAffair.vue";
import AddNote from "@/components/AddNote.vue";
import ArchiveAffair from "@/components/ArchiveAffair.vue";
import EditAffair from "@/components/EditAffair.vue";
import Fee from "@/components/Fee.vue";
import HearingDate from "@/components/HearingDate.vue";

import ViewAffair from "@/components/ViewAffair.vue";
export default {
  name: "ArchivedAffair",
  components: {
    AddAffair: AddAffair,
    ViewAffair: ViewAffair,
    Fee: Fee,
    ArchiveAffair: ArchiveAffair,
    EditAffair: EditAffair,
    HearingDate: HearingDate,
    AddNote: AddNote,
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