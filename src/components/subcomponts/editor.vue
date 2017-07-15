<template>
  <div class="container">



    <form style="padding-top: 5px">
      <hr>
      <!--富文本编辑器-->
      <textarea id="editor"></textarea>

    </form>
    <hr>




  </div>
</template>

<script>


  export default{

      props:{
          content: {
            type: String,
            required:true

          },


      },

      methods:{
          getContent:function () {
             return this.instance.getData()
          },
          setContent:function (html) {
              this.instance.setData(html)

          }
      },

      mounted:function () {
        CKEDITOR.replace("editor",{
          extraPlugins:'autogrow',
          autoGrow_minHeight:360,
          autoGrow_maxHeight:600,
          autoGrow_onStartup:true,
          autoGrow_bottomSpace:50
        });
        console.log(this.content)

      },
      computed:{
          instance:function () {
            return CKEDITOR.instances.editor;
          },
      },
      watch:{
          content: function (val) {
              this.setContent(val);

          }
      }


  }
</script>
