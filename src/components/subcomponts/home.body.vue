<template>
  <div class="container">

    <div class="row row-offcanvas row-offcanvas-right" style="margin-top: 50px">


      <div class="col-xs-12 col-sm-9">

      </div><!--/.col-xs-12.col-sm-9-->

      <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div class="list-group">
          <a href="/#/editor" class="list-group-item" v-if="is_login">写博客</a>
          <a href="#" class="list-group-item">...</a>
        </div>
      </div><!--/.sidebar-offcanvas-->
    </div><!--/row-->

  </div>
</template>


<script>
    export default{
        computed:{
          is_login(){
              return this.$store.state.is_login
          }
        },
        name:"home_body",
        data:function () {
            return {
            }
        }
    }
</script>
