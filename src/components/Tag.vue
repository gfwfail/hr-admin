<style lang="scss" scoped>

.bootstrap-tagsinput {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    display: block;
    padding: 4px 6px;
    color: #555;
    vertical-align: middle;
    border-radius: 4px;
    max-width: 100%;
    line-height: 22px;
    cursor: text;
}

.bootstrap-tagsinput .has-error {
    border: 1px solid #a94442 !important;
}

.bootstrap-tagsinput input {
    border: none;
    box-shadow: none;
    outline: none;
    background-color: transparent;
    padding: 0 6px;
    margin: 0;
    width: auto;
    max-width: inherit;
}

.bootstrap-tagsinput.form-control input::-moz-placeholder {
    color: #777;
    opacity: 1;
}

.bootstrap-tagsinput.form-control input:-ms-input-placeholder {
    color: #777;
}

.bootstrap-tagsinput.form-control input::-webkit-input-placeholder {
    color: #777;
}

.bootstrap-tagsinput input:focus {
    border: none;
    box-shadow: none;
}

.bootstrap-tagsinput .tag {
    margin-right: 2px;
    display: inline-block;
    color: white;
    font-size: 14px;
}

.bootstrap-tagsinput .tag .tag-remove {
    margin-left: 8px;
    cursor: pointer;
}

.bootstrap-tagsinput .tag .tag-remove:after {
    content: "x";
    padding: 0px 2px;
}

.bootstrap-tagsinput .tag .tag-remove:hover {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.bootstrap-tagsinput .tag .tag-remove:hover:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}

</style>

<template>

<div class="bootstrap-tagsinput" :class="class" @click="onClick">
    <span class="tag label label-info" v-for="tag in value">{{tag}}<span @click="removeTag(tag)" class="tag-remove"></span></span>

    <input v-el:taginput type="text" :placeholder="placeholder" @keyup.enter="addTag(tag)" @blur="addTag(tag)" @keydown.8="backspace()" v-model="tag">
</div>

</template>

<script>


export default {
    props: {
        class: {
            type: String
        },
        value: {
            twoWay: true
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Nothing'
        },
        default: {
            type: String,
            required: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,

            default: false
        }
    },
    data: () => {
        return {
            tag: ""
        }
    },
    created() {
        if (this.value === null || this.value === undefined) {
            this.value = []
        }
    },
    methods: {
            onClick() {
              var self = this;
                this.$nextTick(function () {
                self.$els.taginput.focus()
                  })
            },
            addTag(tag) {
                if (tag.trim() == '') {
                    return
                }

                for(var i = 0; i < this.value.length; i++)
                  {
                if(this.value[i].name === tag )
                   return false;
                  }
                    this.value.push(tag)

                this.tag = ""
            },
            removeTag(tag) {
                var i = this.value.indexOf(tag)
                if (i != -1) {
                    this.value.splice(i, 1)
                }
            },
            backspace() {
                if (this.tag.length === 0) {
                    this.value.pop()
                }
            }
    }
}

</script>
