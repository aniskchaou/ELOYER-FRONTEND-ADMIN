<template>
 <form
    
    method="post"
    accept-charset="utf-8"
    enctype="multipart/form-data"
  >
    <div class="box-body">
      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Titre du cas</font></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input type="text" name="title" class="form-control" value="" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Cas No</font></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input type="text" name="case_no" class="form-control" value="" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-12">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Nom du client</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <div class="input-group">
              <select
                name="client_id"
                class="form-control chzn"
                  
              >
                <option value="">--Select Client--</option>
              </select>
              <div
                class="chosen-container chosen-container-single"
                style="width: 278px"
                title=""
              >
           
              </div>
              <span
                >
                ></span
              >
            </div>
          </div>
          <div class="col-md-3"></div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Emplacement</font></font
              ></b
            >
          </div>
          <div class="col-md-12" id="location_result">
            <select
              name="location_id"
              id="location_id"
              class="chzn col-md-12"
                
            >
              <option value="">--Select Location--</option>
              <option value="34">fsd</option>
              <option value="33">kolkata</option>
            </select>
            <div
              class="chosen-container chosen-container-single"
              style="width: 449px"
              title=""
              id="location_id_chosen"
            >
             
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Catégorie de cour</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12" id="court_category_result">
            <select
              name="court_category_id"
              id="court_category_id"
              class="chzn col-md-12"
              disabled="disabled"
                
            >
              <option value="">--Select Court Category--</option>
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
              class="chosen-container chosen-container-single chosen-disabled"
              style="width: 449px"
              title=""
              id="court_category_id_chosen"
            >
             
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Tribunal</font></font
              ></b
            >
          </div>
          <div class="col-md-12" id="court_result">
            <select
              name="court_id"
              id="court_id"
              disabled="disabled"
              class="chzn col-md-12"
                
            >
              <option value="">--Select Court--</option>
              <option value="6">كتابة العدل الأولى</option>
              <option value="11">المحكمة العامة</option>
              <option value="9">Abdullah Alakwaa</option>
              <option value="10">Abdullah Alakwaa</option>
              <option value="12">Kolkata High Court</option>
            </select>
            <div
              class="chosen-container chosen-container-single chosen-disabled"
              style="width: 449px"
              title=""
              id="court_id_chosen"
            >
           
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Catégorie de cas</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <select
              name="case_category_id[]"
              class="chzn col-md-12"
              multiple="multiple"
                
            ></select>
            <div
              class="chosen-container chosen-container-multi"
              style="width: 449px"
              title=""
            >
              
              <div class="chosen-drop"><ul class="chosen-results"></ul></div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Étape de cas</font></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <select
              name="case_stage_id"
              class="chzn col-md-12"
                
            >
              <option value="">--Select Case Stage--</option>
              <option value="6">Rahul</option>
              <option value="8">طلب الأدعاء</option>
              <option value="5">الجلسة لأفتتاحية</option>
              <option value="7">الرد على الدعوى</option>
              <option value="9">الأستماع</option>
              <option value="10">Submissions 2</option>
              <option value="11">النطق بالحكم</option>
              <option value="13">للمستندات منا</option>
              <option value="14">للمستندات منهم</option>
              <option value="15">asdasdas</option>
              <option value="16">asdas</option>
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

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Acte</font></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <select
              name="act_id[]"
              class="chzn col-md-12"
              multiple="multiple"
                
            >
              <option value="1">444</option>
              <option value="3">33</option>
              <option value="4">127</option>
              <option value="5">130</option>
              <option value="7">212</option>
              <option value="8">303</option>
            </select>
            <div
              class="chosen-container chosen-container-multi"
              style="width: 449px"
              title=""
            >
              
              <div class="chosen-drop"><ul class="chosen-results"></ul></div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >La description</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <textarea name="description" class="form-control"></textarea>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Date de remplissage</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input
              type="text"
              name="start_date"
              class="form-control datepicker"
              value=""
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Date d'audience</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input
              type="text"
              name="hearing_date"
              value=""
              class="form-control datepicker"
            />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Avocat compétent</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input type="text" name="o_lawyer" value="" class="form-control" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="row">
          <div class="col-md-3">
            <b
              ><font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Total des frais</font
                ></font
              ></b
            >
          </div>
          <div class="col-md-12">
            <input type="text" name="fees" value="" class="form-control" />
          </div>
        </div>
      </div>

   
      
     
    </div>
    <!-- /.box-body -->

    <div class="box-footer">
      <button type="submit" class="btn btn-primary">
        <font style="vertical-align: inherit"
          ><font style="vertical-align: inherit">sauver</font></font
        >
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditAffair",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
