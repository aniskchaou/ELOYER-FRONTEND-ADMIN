<template>
  <form method="post" action="#" enctype="multipart/form-data">
    <div class="box-body">
      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b>Next Date</b>
          </div>
          <div class="col-md-4">
            <input
              type="text"
              name="date"
              value=""
              class="form-control datepicker"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b>Last Date</b>
          </div>
          <div class="col-md-4">
            <input
              type="text"
              name="date2"
              value=""
              class="form-control datepicker"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b>Notes</b>
          </div>
          <div class="col-md-4">
            <textarea name="notes" class="form-control"></textarea>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b>Attachement Document</b>
          </div>
          <div class="col-md-4">
            <input type="file" name="img" value="" class="form-control" />
          </div>
        </div>
      </div>
    </div>
    <!-- /.box-body -->

    <div class="box-footer">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>

    <div class="box-body table-responsive">
      <div
        id="example1_wrapper"
        class="dataTables_wrapper form-inline dt-bootstrap no-footer"
      >
        <div class="row">
          <div class="col-sm-6">
            <div class="dataTables_length" id="example1_length">
              <label
                >Show
                <select
                  name="example1_length"
                  aria-controls="example1"
                  class="form-control input-sm"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries</label
              >
            </div>
          </div>
          <div class="col-sm-6">
            <div id="example1_filter" class="dataTables_filter">
              <label
                >Search:<input
                  type="search"
                  class="form-control input-sm"
                  placeholder=""
                  aria-controls="example1"
              /></label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <table
              id="example1"
              class="table table-bordered table-striped table-mailbox dataTable no-footer"
              role="grid"
              aria-describedby="example1_info"
            >
              <thead>
                <tr role="row">
                  <th
                    width="5%"
                    class="sorting_asc"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-sort="ascending"
                    aria-label="Sr No: activate to sort column descending"
                    style="width: 30.75px"
                  >
                    Sr No
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-label="Next Date: activate to sort column ascending"
                    style="width: 223.75px"
                  >
                    Next Date
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-label="Last Date: activate to sort column ascending"
                    style="width: 215.75px"
                  >
                    Last Date
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-label="Notes: activate to sort column ascending"
                    style="width: 156.75px"
                  >
                    Notes
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-label="Attachement: activate to sort column ascending"
                    style="width: 300.75px"
                  >
                    Attachement
                  </th>
                  <th
                    width="20%"
                    class="sorting"
                    tabindex="0"
                    aria-controls="example1"
                    rowspan="1"
                    colspan="1"
                    aria-label="Action: activate to sort column ascending"
                    style="width: 242px"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr class="gc_row odd" role="row">
                  <td class="sorting_1">1</td>
                  <td>03/17/20</td>
                  <td>03/09/20</td>
                  <td>jhgkghjk</td>
                  <td>
                    <a class="btn btn-default" href="#" target="_blank"
                      ><i class="fa fa-download"></i> Attachment</a
                    >
                  </td>

                  <td width="20%">
                    <a class="btn btn-primary" href="#"
                      ><i class="fa fa-eye"></i> View</a
                    >

                    <a
                      class="btn btn-danger"
                      style="margin-left: 20px"
                      href="#"
                      onclick="return areyousure()"
                      ><i class="fa fa-trash"></i> Delete</a
                    >
                  </td>
                </tr>
                <tr class="gc_row even" role="row">
                  <td class="sorting_1">2</td>
                  <td>03/05/20</td>
                  <td>03/12/20</td>
                  <td>test</td>
                  <td>
                    <a class="btn btn-default" href="#" target="_blank"
                      ><i class="fa fa-download"></i> Attachment</a
                    >
                  </td>

                  <td width="20%">
                    <a class="btn btn-primary" href="#"
                      ><i class="fa fa-eye"></i> View</a
                    >

                    <a
                      class="btn btn-danger"
                      style="margin-left: 20px"
                      href="#"
                      onclick="return areyousure()"
                      ><i class="fa fa-trash"></i> Delete</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-5">
            <div
              class="dataTables_info"
              id="example1_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 2 of 2 entries
            </div>
          </div>
          <div class="col-sm-7">
            <div
              class="dataTables_paginate paging_simple_numbers"
              id="example1_paginate"
            >
              <ul class="pagination">
                <li
                  class="paginate_button previous disabled"
                  id="example1_previous"
                >
                  <a
                    href="#"
                    aria-controls="example1"
                    data-dt-idx="0"
                    tabindex="0"
                    >Previous</a
                  >
                </li>
                <li class="paginate_button active">
                  <a
                    href="#"
                    aria-controls="example1"
                    data-dt-idx="1"
                    tabindex="0"
                    >1</a
                  >
                </li>
                <li class="paginate_button next disabled" id="example1_next">
                  <a
                    href="#"
                    aria-controls="example1"
                    data-dt-idx="2"
                    tabindex="0"
                    >Next</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /.box-body -->
  </form>
</template>

<script>
export default {
  name: "HearingDate",
  mounted() {},
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
