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
    <modal title="Add question" :show.sync="isAdding" effect="zoom" width="400">
  <div slot="modal-body" class="modal-body">
                    <label>Question </label>
                    <input type="text" class="form-control" v-model="newQuestion.text" required>
                    <br>
                    <label>Type</label>

                    <select class="form-control" v-model="newQuestion.type">
                        <option selected>truefalse</option>
                        <option>select</option>
                        <option>rating</option>
                        <option>textarea</option>
                    </select>
                
                
                    <br>
                    <div class="form-group" transition="fade" v-show="newQuestion.type=='select'">

                        <label>Options</label>
                        <tag :placeholder="'Add options here'" :value.sync="newQuestion.options"></tag>
                        <br>
                        <label>multiple</label>
                        <input type="checkbox" v-model="newQuestion.multiple">
                    </div>


  </div>
   <div slot="modal-footer" class="modal-footer">
    <button type="button" class="btn btn-default" @click="isAdding = false">cancel</button>
    <button type="button" class="btn btn-success" @click="addQuestion()">Save</button>
  </div>
</modal>

    <box title="New Survey" small-title="untitled survey" type="primary">

    <div slot="body">
        <div class="row">
            <div class="col-md-12">

                <a class="btn btn-app" @click="addSection()">
                    <i class="fa fa-plus"></i> Add Section
                </a>

                <a class="btn btn-app" @click="createSurvey()">
                    <i class="fa fa-floppy-o"></i> Create
                </a>

  <a class="btn btn-app" @click="preview()">
                    <i class="fa fa-eye"></i> Preview
                </a>
            </div>
        </div>
        
        <div class="row" slot="body">
            <div class="col-md-12"> 
                <div class="tabs-left">

                    <ul class="nav nav-tabs">
                        <li v-for="section in sections" :class="{'active':section.name==curSection.name}" track-by="$index"><a @click="setSection(section)">{{$index+1}}.{{excerpt(section.name)}}</a></li>

                    </ul>
                    <div class="tab-content">
                        <div v-show="curSection">


                            <div class="row">
                                <div class="col-md-8">
                                    <h3 style="border-bottom:solid 1px #ddd">{{curSection.name}}

                                          <div class="pull-right">
                                        <button type="button" @click="addingQuestion(curSection)" class="btn btn-default btn-sm"><i class="fa fa-plus"></i></button>
                                        <button @click="deleteSection(curSection)" type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>

                                    </div>
                                    </h3>

                                  
                                    <div class="well" v-for="q in curSection.questions" track-by="$index">
                                     <p> Q{{$index+1}}: {{q.text}} ({{q.type}})
                                         <br>
                                         {{listOptions(q)}}
                                         </p> 

                                                                             <button @click="deleteQuestion(curSection,$index)" type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>

                                     </div>
                                    
                                 
                                </div>
                            </div>
                            
                           
                        </div>
                        <!-- /.tab-pane -->
                    </div>


                </div>

            </div>


        </div>
    </div>
</box>
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
    import Box from '../Box.vue'
    import modal from '../vue-strap/src/Modal.vue'


    import {
        SurveyResource
    }
    from '../../api'

    export default {
        ready() {

            },
            replace: true,
            data: function() {
                return {
                    isAdding: false,
                    curSection: null,
                    sections: [{
                        'questions': [],
                        'name': 'Value exploration: Strategy'
                    }, {
                        'questions': [],
                        'name': 'Value exploration: Risk Management and Financial Measurement'
                    }, {
                        'questions': [],
                        'name': 'Value exploration: Capital raising and allocation'
                    }, {
                        'questions': [],
                        'name': 'Value exploration: Compliance and communication'
                    }, {
                        'questions': [],
                        'name': 'Value exploration: Succession Planning'
                    }, {
                        'questions': [],
                        'name': 'Value exploration: Remuneration'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: External and internal'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: communication and Engagement with management team'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: Board structure and membership'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: Ownership within the Board'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: Alignment of Board and Board members'
                    }, {
                        'questions': [],
                        'name': 'Dynamic Review Question: Board efficiency'
                    }, {
                        'questions': [],
                        'name': 'Strategy'
                    }, {
                        'questions': [],
                        'name': 'Risk Management'
                    }, {
                        'questions': [],
                        'name': 'Capital allocation or investment'
                    }, {
                        'questions': [],
                        'name': 'Reporting or compliance'
                    }, {
                        'questions': [],
                        'name': 'Recruitment'
                    }, {
                        'questions': [],
                        'name': 'Remuneration'
                    }, {
                        'questions': [],
                        'name': 'Communication'
                    }, {
                        'questions': [],
                        'name': 'Board Dynamics'
                    }, {
                        'questions': [],
                        'name': 'Performance Evaluation'
                    }, {
                        'questions': [],
                        'name': 'Constraint'
                    }]
                }
            },
            methods: {
                createSurvey() {
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
                                sections: []
                            }
                            let questions = self.questions
                            for (var i = 0; i < questions.length; i++) {
                                let n = questions[i].section
                                if (payload.sections[n] === undefined) {
                                    payload.sections[n] = {
                                        name: self.sections[n],
                                        questions: []
                                    }
                                }
                                payload.sections[n].questions.push(questions[i])
                            }
                            SurveyResource.save({
                                payload
                            }).then(
                                (xhr) => {
                                    swal({
                                        title: "Congratulation!",
                                        text: `You have successfully create a survey! <br> survey link: <input type="text" style="display:initial" class="form-class" value="http://man.land:8000/${xhr.data.slug}" readonly>`,
                                        type: 'success',
                                        html: true
                                    })

                                    ;

                                }, (err) => {
                                    swal("Error!", err.data, "error");

                                }
                            )

                        }
                    });
                    console.log(this.questions)
                },
                setSection(section) {
                    this.curSection = section
                },
                addingQuestion(section) {

                    this.isAdding = true
                    this.newQuestion = {
                        'section': section,
                        'type': 'truefalse',
                        'options': [],
                        'multiple': false
                    }
                },
                addQuestion() {

                    this.curSection.questions.push({
                        'type': this.newQuestion.type,
                        'text': this.newQuestion.text,
                        'multiple': this.newQuestion.multiple,
                        'options': this.newQuestion.options
                    })

                    this.$nextTick(function() {
                        console.log(this.curSection) // => 'updated'
                    })
                    this.isAdding = false

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
                addSection() {
                    var self = this
                    swal({
                        title: "Add Section!",
                        text: "Write the title of this section",
                        type: "input",
                        showCancelButton: true,
                        closeOnConfirm: false,
                        animation: "slide-from-top",
                        inputPlaceholder: "Section name"
                    }, function(inputValue) {
                        if (inputValue === false) return false;
                        if (inputValue === "") {
                            swal.showInputError("You need to write something!");
                            return false
                        }
                        self.sections.push({
                            'name': inputValue,
                            'questions': []
                        })
                        swal("Nice!", "Section " + inputValue + " Created!", 'success');
                    });
                },
                listOptions(q) {
                    if (!q.options)
                        return ''
                    if (q.options.length !== 0)
                        return 'Options:(' + q.options.join(',') + ')'
                },
                excerpt(text, len) {
                    if (!len)
                        len = 20
                    if (text.length > len)
                        return text.substring(0, len) + '...'
                    return text

                },
                deleteSection(item) {
                    var self = this

                    swal({
                        title: "Are you sure?",
                        text: "All question belong to this section will removed either!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Remove",
                        cancelButtonText: "Cancel",
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function(isConfirm) {
                        if (isConfirm) {

                            self.sections.$remove(item)


                        }

                        return true;

                    })


                },
                removeQuestion(q) {
                    var index = this.questions.indexOf(q)
                    if (index > -1) {
                        this.questions.splice(index, 1);
                    }
                }
            },
            components: {
                StarRating,
                Question,
                Tag,
                Box,
                modal
            }
    }
</script>