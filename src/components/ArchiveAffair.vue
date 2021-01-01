<template>
 <div class="box-body">
                        <div class="box-body">
                        
						 <div class="form-group">
                        	<div class="row">
                                <div class="col-md-1">
                                	<b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Titre du cas</font></font></b>
								</div>
								<div class="col-md-2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    
									Entreprise                                </font></font></div>
								
								 <div class="col-md-1">
                                	<b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cas No</font></font></b>
								</div>
								<div class="col-md-2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    
									10030                                </font></font></div>
								
								 <div class="col-md-1">
                                	<b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Client</font></font></b>
								</div>
								<div class="col-md-2">
										                                </div>
                            </div>
                        </div>
						
						
						
						
						<div class="form-group">
                        	<div class="row">
                                <div class="col-md-3">
                                	<b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Remarques</font></font></b>
								</div>
								<div class="col-md-4">
                                   <textarea name="notes" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
						
						
						<div class="form-group">
                        	<div class="row">
                                <div class="col-md-3">
                                	<b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de clôture</font></font></b>
								</div>
								<div class="col-md-4">
                                   <input type="text" name="close_date" value="" class="form-control datepicker">
                                </div>
                            </div>
                        </div>
						
                    </div><!-- /.box-body -->
    
                    <div class="box-footer">
                        <button type="submit" class="btn btn-primary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fermer</font></font></button>
                    </div>
                         </div>
</template>

<script>

export default {
  name: "ArchiveAffair",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
