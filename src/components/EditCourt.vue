<template>
  <div class="box-body">
    <div class="form-group">
      <div class="row">
        <div class=" col-md-12">
          <label for="name" style="clear: both"> Name</label>
          <input type="text" name="name" value="" class="form-control" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class=" col-md-12">
          <label for="location_id" style="clear: both">Location</label>
          <select
            name="location_id"
            class="form-control chzn"
             
          >
            <option value="">--Select Location--</option>
            <option value="33">kolkata</option>
            <option value="34">fsd</option>
          </select>
          <div
            class="chosen-container chosen-container-single"
            style="width: 456px"
            title=""
          >
         
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class=" col-md-12">
          <label for="court_category" style="clear: both">Court Category</label>
          <select
            name="court_category_id"
            class="form-control chzn"
             
          >
            <option value="">--Select Court Category --</option>
            <option value="16">High Court</option>
            <option value="18">Suprem court</option>
           
          </select>
          <div
            class="chosen-container chosen-container-single"
            style="width: 456px"
            title=""
          >
            
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class=" col-md-12">
          <label for="name" style="clear: both">Description</label>
          <textarea name="description" class="form-control"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditCourt",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
