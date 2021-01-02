<template>
  <div class="box-body">
    <div class="box-body no-padding">
      <table class="table table-striped" border="1">
        <tbody>
          <tr>
            <th width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Cas No</font></font
              >
            </th>
            <td width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">10030</font></font
              >
            </td>
            <th width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Titre du cas</font></font
              >
            </th>
            <td width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Entreprise</font></font
              >
            </td>
          </tr>
          <tr>
            <th width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit"
                  >Frais convenus
                </font></font
              >
            </th>
            <td width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">3456,00</font></font
              >
            </td>
            <th width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">Payé</font></font
              >
            </th>
            <td width="25%">
              <font style="vertical-align: inherit"
                ><font style="vertical-align: inherit">7034,00</font></font
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="tabbable" style="padding-top: 12px">
      <ul class="nav nav-tabs">
        <li class="active">
          <a href="#1" data-toggle="tab"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit"
                >Facture d'achat</font
              ></font
            ></a
          >
        </li>
        <li>
          <a href="#2" data-toggle="tab"
            ><font style="vertical-align: inherit"
              ><font style="vertical-align: inherit">Le reçu</font></font
            ></a
          >
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" id="1">
          <!-- form start -->
          <form
            method="post"
            action="http://advocate.webappsdemo.in/admin/cases/fees/5"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="inr" id="inr" value="3456.00" />
            <input type="hidden" name="bal" id="bal" value="579949.00" />
            <div class="form-group" style="margin-top: 20px">
              <legend>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >Ajouter les détails du paiement</font
                  ></font
                >
              </legend>
            </div>
            <div class="form-group" style="margin-top: 20px">
              <div class="row">
                <div class="col-md-3">
                  <b
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Numéro de facture</font
                      ></font
                    ></b
                  >
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    name="invoice_no"
                    value="131"
                    class="form-control"
                    readonly="readonly"
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
                        >Mode de paiement</font
                      ></font
                    ></b
                  >
                </div>
                <div class="col-md-4">
                  <select name="payment_mode_id" class="form-control">
                    <option value="">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >--Sélectionnez le mode de paiement -</font
                        ></font
                      >
                    </option>
                    <option value="22">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">abc</font></font
                      >
                    </option>
                    <option value="26">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >دفعه على الحساب</font
                        ></font
                      >
                    </option>
                    <option value="24">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >مخالصة نهائية</font
                        ></font
                      >
                    </option>
                    <option value="23">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">نقدا</font></font
                      >
                    </option>
                    <option value="8">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >تحويل بنكي</font
                        ></font
                      >
                    </option>
                    <option value="9">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >25% دفعة</font
                        ></font
                      >
                    </option>
                    <option value="10">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Bande</font
                        ></font
                      >
                    </option>
                    <option value="21">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >bKash</font
                        ></font
                      >
                    </option>
                    <option value="20">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Mercadopago</font
                        ></font
                      >
                    </option>
                    <option value="27">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Tester</font
                        ></font
                      >
                    </option>
                    <option value="28">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >en espèces</font
                        ></font
                      >
                    </option>
                    <option value="29">
                      <font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Paytm</font
                        ></font
                      >
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-3">
                  <b
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit">Date</font></font
                    ></b
                  >
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

            <div class="form-group" style="margin-top: 20px">
              <div class="row">
                <div class="col-md-3">
                  <b
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Montant</font
                      ></font
                    ></b
                  >
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    name="amount"
                    value=""
                    id="amount"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <div class="form-group input_fields_wrap">
              <div class="row">
                <div class="col-md-3">
                  <b
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit">Impôt</font></font
                    ></b
                  >
                </div>
                <div class="col-md-4">
                  <div>
                    <select
                      name="tax_id[]"
                      class="form-control tax"
                      required=""
                      id="tax1"
                    >
                      <option value="">
                        <font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >- Sélectionnez Taxe -</font
                          ></font
                        >
                      </option>
                      <option value="7">
                        <font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >TVA - 15
                          </font></font
                        >
                      </option>
                      <option value="11">
                        <font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >taxe d'essai - 150
                          </font></font
                        >
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <div class="row">
                    <div class="col-md-offset-2" style="padding-left: 12px">
                      <button class="add_field_button btn btn-success">
                        <font style="vertical-align: inherit"
                          ><font style="vertical-align: inherit"
                            >Ajouter plus
                          </font></font
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-md-3">
                  <b
                    ><font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit">Total</font></font
                    ></b
                  >
                </div>
                <div class="col-md-4">
                  <input
                    type="text"
                    name="total"
                    value=""
                    class="form-control"
                    id="total"
                    readonly="readonly"
                  />
                </div>
              </div>
            </div>
            <div class="box-footer">
              <button type="submit" class="btn btn-primary">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">sauver</font></font
                >
              </button>
            </div>
          </form>

          <div class="box-body table-responsive" style="margin-top: 10px">
            <div
              id="example2_wrapper"
              class="dataTables_wrapper form-inline dt-bootstrap no-footer"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="dataTables_length" id="example2_length">
                    <label
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Spectacle
                        </font></font
                      ><select
                        name="example2_length"
                        aria-controls="example2"
                        class="form-control input-sm"
                      >
                        <option value="10">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >dix</font
                            ></font
                          >
                        </option>
                        <option value="25">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >25</font
                            ></font
                          >
                        </option>
                        <option value="50">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50</font
                            ></font
                          >
                        </option>
                        <option value="100">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >100</font
                            ></font
                          >
                        </option></select
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">
                          entrées</font
                        ></font
                      ></label
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="example2_filter" class="dataTables_filter">
                    <label
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Chercher:</font
                        ></font
                      ><input
                        type="search"
                        class="form-control input-sm"
                        placeholder=""
                        aria-controls="example2"
                    /></label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    id="example2"
                    class="table table-bordered table-striped table-mailbox dataTable no-footer"
                    role="grid"
                    aria-describedby="example2_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          width="5%"
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Sr No: activer pour trier les colonnes par ordre décroissant"
                          style="width: 29.75px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Sr Non</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Facture: activez pour trier la colonne par ordre croissant"
                          style="width: 185.75px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Facture d'achat</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activer pour trier les colonnes par ordre croissant"
                          style="width: 181.75px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Date</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Montant: activez pour trier la colonne par ordre croissant"
                          style="width: 199.75px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Montant</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label="Mode de paiement: activez pour trier la colonne par ordre croissant"
                          style="width: 314.75px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Mode de paiement</font
                            ></font
                          >
                        </th>
                        <th
                          width="10%"
                          class="sorting"
                          tabindex="0"
                          aria-controls="example2"
                          rowspan="1"
                          colspan="1"
                          aria-label=": activer pour trier les colonnes par ordre croissant"
                          style="width: 238px"
                        ></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >1</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >23</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >23/10/2018</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >1000,00</font
                            ></font
                          >
                        </td>
                        <td></td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/23"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/23"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2019-05-29</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2000,00</font
                            ></font
                          >
                        </td>
                        <td></td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/50"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/50"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >3</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >84</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2020-02-22</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >3000,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >25% دفعة</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/84"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/84"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >4</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >85</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2020-02-27</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >456,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >تحويل بنكي</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/85"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/85"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >5</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >86</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >5000,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >25% دفعة</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/86"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/86"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >6</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >87</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50020,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Bande</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/87"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/87"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >sept</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >87</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50020,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Bande</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/88"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/88"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >8</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >87</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50020,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Bande</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/89"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/89"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >9</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >87</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50020,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Bande</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/90"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/90"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >dix</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >87</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >12/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50020,00</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Bande</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/invoice/index/91"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Facture d'achat</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_fees/91"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
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
                    id="example2_info"
                    role="status"
                    aria-live="polite"
                  >
                    <font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Affiche 1 à 10 de 23 entrées</font
                      ></font
                    >
                  </div>
                </div>
                <div class="col-sm-7">
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="example2_paginate"
                  >
                    <ul class="pagination">
                      <li
                        class="paginate_button previous disabled"
                        id="example2_previous"
                      >
                        <a
                          href="#"
                          aria-controls="example2"
                          data-dt-idx="0"
                          tabindex="0"
                          ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >précédent</font
                            ></font
                          ></a
                        >
                      </li>
                      <li class="paginate_button active">
                        <a
                          href="#"
                          aria-controls="example2"
                          data-dt-idx="1"
                          tabindex="0"
                          ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >1</font
                            ></font
                          ></a
                        >
                      </li>
                      <li class="paginate_button">
                        <a
                          href="#"
                          aria-controls="example2"
                          data-dt-idx="2"
                          tabindex="0"
                          ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2</font
                            ></font
                          ></a
                        >
                      </li>
                      <li class="paginate_button">
                        <a
                          href="#"
                          aria-controls="example2"
                          data-dt-idx="3"
                          tabindex="0"
                          ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >3</font
                            ></font
                          ></a
                        >
                      </li>
                      <li class="paginate_button next" id="example2_next">
                        <a
                          href="#"
                          aria-controls="example2"
                          data-dt-idx="4"
                          tabindex="0"
                          ><font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Prochain</font
                            ></font
                          ></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane" id="2">
          <!-- form start -->

          <div class="box-body table-responsive" style="margin-top: 10px">
            <div
              id="example1_wrapper"
              class="dataTables_wrapper form-inline dt-bootstrap no-footer"
            >
              <div class="row">
                <div class="col-sm-6">
                  <div class="dataTables_length" id="example1_length">
                    <label
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Spectacle
                        </font></font
                      ><select
                        name="example1_length"
                        aria-controls="example1"
                        class="form-control input-sm"
                      >
                        <option value="10">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >dix</font
                            ></font
                          >
                        </option>
                        <option value="25">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >25</font
                            ></font
                          >
                        </option>
                        <option value="50">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >50</font
                            ></font
                          >
                        </option>
                        <option value="100">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >100</font
                            ></font
                          >
                        </option></select
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit">
                          entrées</font
                        ></font
                      ></label
                    >
                  </div>
                </div>
                <div class="col-sm-6">
                  <div id="example1_filter" class="dataTables_filter">
                    <label
                      ><font style="vertical-align: inherit"
                        ><font style="vertical-align: inherit"
                          >Chercher:</font
                        ></font
                      ><input
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
                          style="width: 5px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Sr Non</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Date: activate to sort column ascending"
                          style="width: 0px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Date</font
                            ></font
                          >
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label="Amount: activate to sort column ascending"
                          style="width: 0px"
                        >
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >Montant</font
                            ></font
                          >
                        </th>
                        <th
                          width="10%"
                          class="sorting"
                          tabindex="0"
                          aria-controls="example1"
                          rowspan="1"
                          colspan="1"
                          aria-label=": activate to sort column ascending"
                          style="width: 10px"
                        ></th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >1</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >27/11/2018</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >0,00</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/view_receipt/11"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Le reçu</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_deceipt/11/5"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2019-05-29</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >2000,00</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/view_receipt/18"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Le reçu</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_deceipt/18/5"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row odd" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >3</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >30/01/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >34,00</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/view_receipt/28"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Le reçu</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_deceipt/28/5"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
                          >
                        </td>
                      </tr>
                      <tr class="gc_row even" role="row">
                        <td class="sorting_1">
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >4</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >05/03/2020</font
                            ></font
                          >
                        </td>
                        <td>
                          <font style="vertical-align: inherit"
                            ><font style="vertical-align: inherit"
                              >5000,00</font
                            ></font
                          >
                        </td>

                        <td width="20%">
                          <a
                            class="btn btn-default"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/view_receipt/29"
                            ><i class="fa fa-list"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Le reçu</font
                              ></font
                            ></a
                          >

                          <a
                            class="btn btn-danger"
                            style="margin-left: 20px"
                            href="http://advocate.webappsdemo.in/admin/cases/delete_deceipt/29/5"
                            onclick="return areyousure()"
                            ><i class="fa fa-trash"></i
                            ><font style="vertical-align: inherit"
                              ><font style="vertical-align: inherit">
                                Effacer</font
                              ></font
                            ></a
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
                    <font style="vertical-align: inherit"
                      ><font style="vertical-align: inherit"
                        >Affiche 1 à 4 de 4 entrées</font
                      ></font
                    >
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
                      <li
                        class="paginate_button next disabled"
                        id="example1_next"
                      >
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
