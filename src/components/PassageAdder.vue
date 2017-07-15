<template>
  <div >
    <div class="container">
      <div class="input-group" style="padding-top: 50px">
        <div class="input-group-btn">
          <button type="button" class="btn">标题</button>
        </div>
        <!-- /btn-group -->
        <input type="text" class="form-control" v-model="title">
      </div>
    </div>

    <editor :content="content" ref="editor"></editor>

    <div class="row " >
    <span class="col-xs-1 col-xs-push-5">
    <button type="button" class="btn btn-block btn-primary btn-sm " v-on:click="save">保存</button>
    </span>
      <span class="col-xs-1 col-xs-push-5">
    <button type="button" class="btn btn-block btn-primary btn-sm " v-on:click="">取消</button>
    </span>
    </div>

  </div>


</template>

<script>
  import editor from './subcomponts/editor.vue'
  export default {
    data:function () {
      return {
        title:"",
        content:""
      }
    },

    name :"passage_editor",
    components:{
      "editor":editor
    },
    methods:{

      save:function () {
        var content = this.$refs.editor.getContent();
        console.log(content)
        this.$http.post('/api/passage',{title:this.title,content:content}).then(function (response) {
          console.log(response)
        },function (err) {
          console.log(err)
        })
      },

      cancel:function () {

      }


    }


  }
</script>
