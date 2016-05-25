<style>

.item-move {
    /* applied to the element when moving */
    transition: transform .5s cubic-bezier(.55, 0, .1, 1);
}

</style>

<template>
<div>
    <div class="row">

        <div class="col-md-3">
            <div class="form-group box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Sections</h3>
                </div>
                <div class="box-body">
                    <tag :placeholder="'Add Section here'" :value.sync="sections"></tag>
                </div>
            </div>

            <div class="form-group box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Add Question</h3>
                </div>
                <div class="box-body">
                    <label>Question </label>
                    <input type="text" class="form-control" v-model="text" required>
                    <br>
                    <label>Type</label>

                    <select class="form-control" v-model="type">
                        <option selected>truefalse</option>
                        <option>select</option>
                        <option>rating</option>
                        <option>textarea</option>
                    </select>
                    <br>
                    <label>Section</label>

                    <select class="form-control" v-model="sect">
                        <option :value="$index" v-for="section in sections" track-by="$index">{{section}}</option>
                    </select>
                    <br>
                    <div class="form-group" transition="fade" v-show="type=='select'">

                        <label>Options</label>
                        <tag :placeholder="'Add options here'" :value.sync="o.options"></tag>
                        <br>
                        <label>multiple</label>
                        <input type="checkbox" v-model="o.multiple">
                    </div>
                    <br>
                    <button class="btn btn-primary" @click="addQuestion(type,text,sect,o)">
                        Add
                    </button>
                </div>
            </div>
        </div>


        <div class="col-md-9">
            <div class="form-group box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Question List</h3>
                </div>
                <div class="box-body">
                    <p v-show="!questions.length">No questions yet~</p>
                    <div v-for="q in questions|orderBy $index" id="{{$index}}" transition="item">
                        <span class="label label-primary"> {{sections[q.section]}} </span>

                        <div class="row" style="background:rgba(0,0,0,0.02);min-height:30px;border:solid 4px #f8f8f8;margin:10px;padding:5px;border-radius:4px;">
                            <div class="col-md-6">
                                <question name="aaa" :options='q.options' :multiple="q.multiple" :type="q.type" :text="q.text"></question>
                            </div>
                            <div class="col-md-6">
                                <i class="glyphicon glyphicon-remove" @click="removeQuestion(q)"></i>
                                <i :class="{'text-muted':$index==0}" class="glyphicon glyphicon-arrow-up" @click="moveQuestion($index,$index-1)"></i>
                                <i :class="{'text-muted':$index==(questions.length-1)}" class="glyphicon glyphicon-arrow-down" @click="moveQuestion($index,$index+1)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-button :submit-action="createSurvery" submit-text="Create" cancel-text="Cancel"></footer-button>
</div>

</template>

<script>

Array.prototype.move = function(old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
}


import StarRating from '../Rating.vue'
import Question from '../Question.vue'
import Tag from '../Tag.vue'
import FooterButton from '../FooterButton.vue'

import {
    SurveyResource
}
from '../../api'

export default {
    replace: true,
    data: function() {
        return {
            questions: [],
            type: '',
            sections: [
                'Strategy',
                'Risk Management',
                'Capital raising',
                'Compliance',
                'Planning',
                'Remuneration',
            ],
            o: {
                multiple: false,
                options: []
            },
            sect: 0,
            text: '',
            alldone: false,
            jsonanswer: '',
            answers: [],
            change: 1
        }
    },
    methods: {
        createSurvery() {
                let self = this
                if (self.questions.length == 0) {
                    swal("Oops", "You have to add at least one questions", "error")
                    return
                }
                swal({
                    title: "Are you sure?",
                    text: "Once survey created, it can not be change!",
                    type: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, Create it!",
                    cancelButtonText: "No, I wanna change!",
                    closeOnConfirm: false,
                    closeOnCancel: true
                }, function(isConfirm) {
                    if (isConfirm) {
                        console.log(self.questions)
                        var payload = {
                          sections:[]
                        }
                        let questions = self.questions
                        for (var i = 0; i < questions.length; i++) {
                          let n = questions[i].section
                        if (payload.sections[n] === undefined){
                          payload.sections[n] = {name:self.sections[n],questions:[]}
                        }
                          payload.sections[n].questions.push(questions[i])
                        }
                        SurveyResource.save({payload}).then(
                          (xhr)=>{
                            swal(
                              {
                                title:"Created!",
                                text: 'Tell http://hr.dev:8000/'+xhr.data.slug,
                                type:'success',
                                html:true
                              })

                              ;

                          },(err)=>{
                            swal("Error!", err.data, "error");

                          }
                        )

                    }
                });
                console.log(this.questions)
            },
            addQuestion(type, text, section, o) {

                this.questions.push({
                    'type': type,
                    'text': text,
                    'section': section,
                    'multiple': o.multiple,
                    'options': o.options
                })
                this.type = "truefalse"
                this.text = ""
                this.sect = 1
                this.o = {
                    multiple: false,
                    options: []
                }
                this.moveQuestion(this.questions.length - 1, this.findInsertionPosition(section))
            },
            findInsertionPosition(n) {
                console.log(n)
                for (var i = 0; i < this.questions.length; i++) {
                    if (n >= this.questions[i].section) {
                        break;
                    }
                }
                console.log(i)

                return i
            },
            moveQuestion(old_index, new_index) {
                if (this.questions[new_index].section != this.questions[old_index].section) {
                    return
                }
                if (this.questions[new_index] != undefined) {
                    this.questions.move(old_index, new_index)
                }
            },
            removeQuestion(q) {
                var index = this.questions.indexOf(q)
                if (index > -1) {
                    this.questions.splice(index, 1);
                }
            }
    },
    components: {
        StarRating, Question, Tag, FooterButton
    }
}

</script>
