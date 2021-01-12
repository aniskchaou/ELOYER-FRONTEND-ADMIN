<template>
  <div class="box-body">
    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both"> Name</label>
          <input type="text" name="name" value="" class="form-control" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="location_id" style="clear: both">Location</label>
          <select
            name="location_id"
            class="form-control chzn"
            style="display: none"
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
            <a class="chosen-single" tabindex="-1"
              ><span>--Select Location--</span>
              <div><b></b></div
            ></a>
            <div class="chosen-drop">
              <div class="chosen-search">
                <input type="text" autocomplete="off" />
              </div>
              <ul class="chosen-results"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="court_category" style="clear: both">Court Category</label>
          <select
            name="court_category_id"
            class="form-control chzn"
            style="display: none"
          >
            <option value="">--Select Court Category --</option>
            <option value="16">High Court</option>
            <option value="18">Suprem court</option>
            <option value="15">محكمة النكاح والطلاق</option>
            <option value="20">كتابة عدل</option>
            <option value="21">محكمة جنائية</option>
            <option value="25">محكمة عقارية</option>
            <option value="26">محكمة أستئناف</option>
            <option value="27">محكمة عليا</option>
            <option value="28">highcourt</option>
            <option value="29">Gh</option>
          </select>
          <div
            class="chosen-container chosen-container-single"
            style="width: 456px"
            title=""
          >
            <a class="chosen-single" tabindex="-1"
              ><span>--Select Court Category --</span>
              <div><b></b></div
            ></a>
            <div class="chosen-drop">
              <div class="chosen-search">
                <input type="text" autocomplete="off" />
              </div>
              <ul class="chosen-results"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
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
