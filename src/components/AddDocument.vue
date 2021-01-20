<template>
  <div class="box-body">
    <div class="form-group">
      <div class="row">
        <div class=" col-md-12">
          <label for="name" style="clear: both"> Type</label>
          <select class="form-control" name="is_case" id="is_case">
            <option value="1">Case</option>
            <option value="0">Other</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-group" id="case">
      <div class="row">
        <div class=" col-md-12">
          <label for="name" style="clear: both">Affaire</label>
          <select
            class="form-control chzn"
            name="case_id"
            
          >
            <option value="">Select Case</option>
            <option value="5">10030 Corporate</option>
            <option value="9">0010 mike vs kra</option>
          </select>
          <div
            class="chosen-container chosen-container-single"
            style="width: 449px"
            title=""
          >
           
          </div>
        </div>
      </div>
    </div>

    <div class="form-group" id="title">
      <div class="row">
        <div class=" col-md-12">
          <label for="name" style="clear: both">Title</label>
          <input type="text" name="title" value="" class="form-control" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddDocument",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
