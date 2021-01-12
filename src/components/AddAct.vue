<template>
  <div class="box-body">
    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit"> Nom</font></font
            ></label
          >
          <input type="text" name="name" value="" class="form-control" />
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-md-4">
          <label for="name" style="clear: both"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">La description</font></font
            ></label
          >
          <textarea name="description" class="form-control"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddAct",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
