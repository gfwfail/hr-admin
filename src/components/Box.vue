<template>

<div class="box" :class="'box-'+type">
    <div class="box-header with-border">
        <slot name="head"></slot>
        <h3 class="box-title" v-if="title">{{title}}</h3>
        <span class="text-muted" style="margin-left:20px" v-if="smallTitle">{{smallTitle}}</span>
        <div class="box-tools pull-right" v-show="tools">
            <slot name="tools"></slot>
        </div>
        <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <slot name="body"></slot>
    </div>
    <!-- /.box-body -->
    <div class="box-footer" v-show="hasFoot">
        <slot name="foot"></slot>
    </div>
    <!-- box-footer -->
    <div class="overlay" v-show="loading">
        <i class="fa fa-refresh fa-spin"></i>
    </div>

</div>
<!-- /.box -->

</template>


<script>
    export default {
        name: 'Box',
        data: () => {
            return {
                hasFoot: false
            }
        },
        ready() {
            this.hasFoot = (this.$el.querySelector('[slot="foot"]') !== null)
        },
        props: {
            type: {
                type: String,
                default: 'primary'
            },
            title: String,
            smallTitle: String,
            loading: {
                type: Boolean,
                default: false
            },
            tools: {
                type: Boolean,
                default: false
            }

        }

    }
</script>