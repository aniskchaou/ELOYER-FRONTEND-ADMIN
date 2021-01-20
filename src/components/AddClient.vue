<template>
  <form
    method="post"
    accept-charset="utf-8"
    enctype="multipart/form-data"
  >
    <div class="box-body">
      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="name" style="clear: both">Name</label>
            <input type="text" name="name" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="name" style="clear: both">Profile Picture</label>
            <input type="file" name="img" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="gender" style="clear: both">Gender</label>
            <input type="radio" name="gender" value="Male" /> Male
            <input type="radio" name="gender" value="Female" /> Female
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="dob" style="clear: both">Date Of Birth</label>
            <input
              type="text"
              name="dob"
              value=""
              class="form-control datepicker"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="email" style="clear: both">Email</label>
            <input type="text" name="email" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="username" style="clear: both">Username</label>
            <input type="text" name="username" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="password" style="clear: both">Password</label>
            <input
              type="password"
              name="password"
              value=""
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="password" style="clear: both">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value=""
              class="form-control"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="contact" style="clear: both">Phone</label>
            <input type="text" name="contact" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="contact" style="clear: both">Address</label>
            <textarea name="address" class="form-control"></textarea>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="contact" style="clear: both">Specialties</label>
            <input
              type="text"
              class="form-control"
              name="reply[190]"
              id="req_doc"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class=" col-md-12">
            <label for="contact" style="clear: both">Company</label>
            <input
              type="text"
              class="form-control"
              name="reply[180]"
              id="req_doc"
            />
          </div>
        </div>
      </div>
</div>
    
    <div class="box-footer">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddClient",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
