<style>

.item-move {
    /* applied to the element when moving */
    transition: transform .5s cubic-bezier(.55, 0, .1, 1);
}

.sweet-alert .form-control input {
   display: initial;
   width: auto;
   height: auto;
   margin: auto;
}

</style>

<template>
<div class="row">
    <div class="col-md-12">

      <div class="box">
                  <div class="box-header">
                    <h3 class="box-title">Survey List</h3>

                    <div class="box-tools">
                      <div class="input-group" style="width: 300px;">
                        <div class="input-group-btn">

                        <button v-link="'/app/create-survey'" class="btn btn-default">Create</button>
                      </div>

                        <input v-model="keyword" type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                        <div class="input-group-btn">
                          <button disabled type="button" class="btn btn-default"><i class="fa fa-search"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.box-header -->
                  <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                      <tbody><tr>
                        <th>ID</th>
                        <th>URL</th>
                        <th width="20%">Sections</th>
                        <th>Created time</th>
                      </tr>

                      <tr v-for="survey in surveys|orderBy 'id'|filterBy keyword" >
                        <td>{{survey.id}}</td>
                        <td><a target="_blank" href="http://man.land:8000/{{survey.slug}}">http://man.land:8000/{{survey.slug}}</a></td>
                        <td>
                          <li class="label label-danger" style="display:block;margin-top:2px;" v-for="section in survey.questions.sections">{{section.name}}</li>
                        </td>
                        <td>{{survey.created_at}}</td>
                      </tr>

                    </tbody></table>
                  </div>
                  <!-- /.box-body -->
                </div>

    </div>
</div>

</template>

<script>

import {
    SurveyResource
}
from '../../api'

export default {
    replace: true,
    data: function() {
        return {
          surveys:[]
        }
    },
  ready() {
    var self = this
    SurveyResource.get().then(
      (xhr)=>{
        self.surveys = xhr.data
      },
      (err) => {
        swal('','Error','error')
      }
    )
  }
}

</script>
