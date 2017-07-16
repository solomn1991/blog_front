<template>
  <div class="container">

    <div class="row row-offcanvas row-offcanvas-right" style="margin-top: 50px">


      <div class="col-xs-12 col-sm-9">
        <div class="box" style="min-height: 700px">
          <div class="box-header with-border">
            <h3 class="box-title">最新文章 </h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <table class="table">
              <tbody>
                <tr>
                  <th>标题</th>
                  <th style="width:25%">时间</th>
                  <th style="width:10%">作者</th>
                </tr>
                <tr v-for="passage in passages">
                  <td><a :href="'/#/passage/'+passage.id">{{passage.title}}</a></td>
                  <td style="width:15%">{{passage.create_date}}</td>
                  <td style="width:10%">{{passage.user.username}}</td>
                </tr>

              </tbody></table>
          </div>
          <!-- /.box-body -->
          <!--<div class="box-footer clearfix">-->
            <!--<ul class="pagination pagination-sm no-margin pull-right">-->
              <!--<li><a href="#">«</a></li>-->
              <!--<li><a href="#">1</a></li>-->
              <!--<li><a href="#">2</a></li>-->
              <!--<li><a href="#">3</a></li>-->
              <!--<li><a href="#">»</a></li>-->
            <!--</ul>-->
          <!--</div>-->
        </div>

      </div><!--/.col-xs-12.col-sm-9-->

      <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div class="list-group">
          <a href="/#/new/passage" class="list-group-item" v-if="is_login">写博客</a>
          <a href="/#/mypassages" class="list-group-item" v-if="is_login">我的文章</a>
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
                passages:[]
            }
        },
        methods:{
            fetch_data:function () {
              this.$http.get("/api/home/passagelist/").then(function (response) {
                var result = response.body;
                this.passages = result;
              })
            }
        },
        created:function () {
            this.fetch_data()

        }
    }
</script>
