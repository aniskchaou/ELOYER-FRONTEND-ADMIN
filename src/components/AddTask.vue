<template>
<div class="box-body">
                        <div class="form-group">
                        	<div class="row">
                                <div class="col-md-6">
                                    <label for="name" style="clear:both;">Name</label>
									<input type="text" name="name" value="" class="form-control">
                                </div>
                            </div>
                        </div>
						<div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="email" style="clear:both;">Priority</label>
									<select name="priority" class="form-control chzn" style="display: none;">
										<option value="">--Select Priority---</option>
										<option value="1">Low</option>
										<option value="2">Medium</option>
										<option value="2">High</option>
									</select><div class="chosen-container chosen-container-single" style="width: 689px;" title=""><a class="chosen-single" tabindex="-1"><span>--Select Priority---</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off"></div><ul class="chosen-results"></ul></div></div>
                                </div>
                            </div>
                        </div>
						
			   			 <div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="dob" style="clear:both;">Due Date</label>
									<input type="text" name="due_date" value="" class="form-control datepicker">
									
                                </div>
                            </div>
                        </div>
						
						 <div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="case_id" style="clear:both;">Case</label>
									<select name="case_id" class="form-control chzn" style="display: none;">
										<option value="">--Select Case---</option>
										<option value="5">#10030-Corporate</option><option value="9">#0010-mike vs kra</option>									</select><div class="chosen-container chosen-container-single" style="width: 689px;" title=""><a class="chosen-single" tabindex="-1"><span>--Select Case---</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off"></div><ul class="chosen-results"></ul></div></div>
                                </div>
                            </div>
                        </div>
						
						 <div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="employee_id" style="clear:both;">Assigned_to</label>
									<select name="employee_id[]" class="form-control chzn" multiple="multiple" data-placeholder="Select Employees" style="display: none;">
										<option value="1">Administrator</option><option value="11">asa</option>									</select><div class="chosen-container chosen-container-multi" style="width: 689px;" title=""><ul class="chosen-choices"><li class="search-field"><input type="text" value="Select Employees" class="default" autocomplete="off" style="width: 121px;"></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div></div>
                                </div>
                            </div>
                        </div>
					
						 <div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="progress" style="clear:both;">Progress</label>
						
					                          <span class="irs js-irs-0"><span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min" style="visibility: hidden;">10</span><span class="irs-max" style="visibility: visible;">100</span><span class="irs-from" style="visibility: hidden;">0</span><span class="irs-to" style="visibility: hidden;">0</span><span class="irs-single" style="left: 0.217707%;">10</span></span><span class="irs-grid"></span><span class="irs-bar" style="left: 1.66909%; width: 0%;"></span><span class="irs-bar-edge"></span><span class="irs-shadow shadow-single" style="display: none;"></span><span class="irs-slider single" style="left: 0%;"></span></span><input type="text" value="" name="progress" class="slider form-control irs-hidden-input" data-slider-min="0" data-slider-max="100" data-slider-step="1" data-slider-value="0" data-slider-orientation="horizontal" data-slider-selection="before" data-slider-tooltip="show" data-slider-id="red" readonly="">
                                        </div>
                                      
                                    </div>
                     </div>
                        
						<div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="email" style="clear:both;">Description</label>
									<div class="redactor_box"><ul class="redactor_toolbar" id="redactor_toolbar_0"><li><a href="javascript:;" title="HTML" tabindex="-1" class="redactor_btn redactor_btn_html"></a></li><li class="redactor_separator"></li><div class="redactor_dropdown redactor_dropdown_box_formatting" style="display: none;"><a href="#" class=" redactor_dropdown_p" tabindex="-1">Normal text</a><a href="#" class="redactor_format_blockquote redactor_dropdown_blockquote" tabindex="-1">Quote</a><a href="#" class="redactor_format_pre redactor_dropdown_pre" tabindex="-1">Code</a><a href="#" class="redactor_format_h1 redactor_dropdown_h1" tabindex="-1">Header 1</a><a href="#" class="redactor_format_h2 redactor_dropdown_h2" tabindex="-1">Header 2</a><a href="#" class="redactor_format_h3 redactor_dropdown_h3" tabindex="-1">Header 3</a><a href="#" class="redactor_format_h4 redactor_dropdown_h4" tabindex="-1">Header 4</a><a href="#" class="redactor_format_h5 redactor_dropdown_h5" tabindex="-1">Header 5</a></div><li><a href="javascript:;" title="Formatting" tabindex="-1" class="redactor_btn redactor_btn_formatting"></a></li><li class="redactor_separator"></li><li><a href="javascript:;" title="Bold" tabindex="-1" class="redactor_btn redactor_btn_bold"></a></li><li><a href="javascript:;" title="Italic" tabindex="-1" class="redactor_btn redactor_btn_italic"></a></li><li><a href="javascript:;" title="Deleted" tabindex="-1" class="redactor_btn redactor_btn_deleted"></a></li><li class="redactor_separator"></li><li><a href="javascript:;" title="• Unordered List" tabindex="-1" class="redactor_btn redactor_btn_unorderedlist"></a></li><li><a href="javascript:;" title="1. Ordered List" tabindex="-1" class="redactor_btn redactor_btn_orderedlist"></a></li><li><a href="javascript:;" title="< Outdent" tabindex="-1" class="redactor_btn redactor_btn_outdent"></a></li><li><a href="javascript:;" title="> Indent" tabindex="-1" class="redactor_btn redactor_btn_indent"></a></li><li class="redactor_separator"></li><li><a href="javascript:;" title="Insert Image" tabindex="-1" class="redactor_btn redactor_btn_image"></a></li><li><a href="javascript:;" title="Insert Video" tabindex="-1" class="redactor_btn redactor_btn_video"></a></li><li><a href="javascript:;" title="Insert File" tabindex="-1" class="redactor_btn redactor_btn_file"></a></li><div class="redactor_dropdown redactor_dropdown_box_table" style="display: none;"><a href="#" class=" redactor_dropdown_insert_table" tabindex="-1">Insert Table</a><a class="redactor_separator_drop" tabindex="-1"></a><a href="#" class=" redactor_dropdown_insert_row_above" tabindex="-1">Add Row Above</a><a href="#" class=" redactor_dropdown_insert_row_below" tabindex="-1">Add Row Below</a><a href="#" class=" redactor_dropdown_insert_column_left" tabindex="-1">Add Column Left</a><a href="#" class=" redactor_dropdown_insert_column_right" tabindex="-1">Add Column Right</a><a class="redactor_separator_drop" tabindex="-1"></a><a href="#" class=" redactor_dropdown_add_head" tabindex="-1">Add Head</a><a href="#" class=" redactor_dropdown_delete_head" tabindex="-1">Delete Head</a><a class="redactor_separator_drop" tabindex="-1"></a><a href="#" class=" redactor_dropdown_delete_column" tabindex="-1">Delete Column</a><a href="#" class=" redactor_dropdown_delete_row" tabindex="-1">Delete Row</a><a href="#" class=" redactor_dropdown_delete_table" tabindex="-1">Delete Table</a></div><li><a href="javascript:;" title="Table" tabindex="-1" class="redactor_btn redactor_btn_table"></a></li><div class="redactor_dropdown redactor_dropdown_box_link" style="display: none;"><a href="#" class=" redactor_dropdown_link" tabindex="-1">Insert link</a><a href="#" class=" redactor_dropdown_unlink" tabindex="-1">Unlink</a></div><li><a href="javascript:;" title="Link" tabindex="-1" class="redactor_btn redactor_btn_link"></a></li><li class="redactor_separator"></li><div class="redactor_dropdown redactor_dropdown_box_alignment" style="display: none;"><a href="#" class=" redactor_dropdown_alignleft" tabindex="-1">Align text to the left</a><a href="#" class=" redactor_dropdown_aligncenter" tabindex="-1">Center text</a><a href="#" class=" redactor_dropdown_alignright" tabindex="-1">Align text to the right</a><a href="#" class=" redactor_dropdown_justify" tabindex="-1">Justify text</a></div><li><a href="javascript:;" title="Alignment" tabindex="-1" class="redactor_btn redactor_btn_alignment"></a></li><li class="redactor_separator"></li><li><a href="javascript:;" title="Insert Horizontal Rule" tabindex="-1" class="redactor_btn redactor_btn_horizontalrule"></a></li></ul><div class="redactor_form-control redactor_redactor redactor_editor" contenteditable="true" dir="ltr" style="min-height: 200px;"><p>​</p></div><textarea name="description" class="form-control redactor" dir="ltr" style="display: none;"></textarea></div>
									</div>
                            </div>
                        </div>
						
						
							<div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="contact" style="clear:both;">Status</label>
							<select name="reply[179]" class="form-control">
							<option value="In progress">In progress</option><option value=" overdue"> overdue</option><option value=" Done"> Done</option>			
							</select>	
								</div>
                            </div>
                        </div>
							<div class="form-group">
                              <div class="row">
                                <div class="col-md-6">
                                    <label for="contact" style="clear:both;">inbox</label>
							<select name="reply[220]" class="form-control">
							<option value=""></option>			
							</select>	
								</div>
                            </div>
                        </div>
							
						

                    </div>
</template>

<script>
export default {
  name: "AddAffair",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
