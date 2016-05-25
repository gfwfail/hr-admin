<template>
  <div class="row" style="position:fixed;bottom:0px;;width:60%;right:20%;">
      <div class="text-center" style="padding:10px;height:60px;background-color: rgba(0, 0, 0, 0.2);">
          <a @click="submitAction()" class="btn btn-success btn-lg"><strong>{{submitText}}</strong></a>
          <a @click="cancelAction()" class="btn btn-default btn-lg"><strong>{{cancelText}}</strong></a>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    cancelText:String,
    submitText:String,
    cancelAction:Function,
    submitAction:Function
  }
}
</script>
