<template>
  <div class="box-body">
    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both"> Title</label>
          <input type="text" name="title" value="" class="form-control" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both">Contact</label>
          <select
            name="contact_id"
            class="form-control chzn"
            style="display: none"
          >
            <option value="">--Select Contact--</option>
            <option value="23">Vinmart</option>
            <option value="4">dev@gmail.com</option>
            <option value="5">marion</option>
            <option value="8">Bwana Sanga</option>
            <option value="20">Arun</option>
            <option value="25">SHANAZ AKTER</option>
            <option value="27">dSDa</option>
          </select>
          <div
            class="chosen-container chosen-container-single"
            style="width: 449px"
            title=""
          >
            <a class="chosen-single" tabindex="-1"
              ><span>--Select Contact--</span>
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
        <a href="#myModal" data-toggle="modal" class="btn btn-default margin"
          ><i class="fa fa-plus"></i> Add New Contact</a
        >
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both">Motive</label>
          <textarea name="motive" class="form-control"></textarea>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both">Date</label>
          <input
            type="text"
            name="date_time"
            value=""
            class="form-control datetimepicker"
          />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both">Notes</label>
          <textarea name="notes" class="form-control"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddRendezvous",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
