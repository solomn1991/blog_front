<template>
  <div class="layout-top-nav">

    <nav_bar></nav_bar>
    <div class="box">
      <div class="box-header">
        <h3 class="box-title">我的文章</h3>

        <div class="box-tools">
          <div class="input-group input-group-sm" style="width: 150px;">
            <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

            <div class="input-group-btn">
              <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
      <!-- /.box-header -->
      <div class="box-body table-responsive no-padding">
        <table class="table table-hover">
          <tbody>
          <tr>
            <th>创建日期</th>
            <th>状态</th>
            <th>标题</th>
            <th>操作</th>
          </tr>
          <tr v-for="passage in mypasssages">
            <td>{{passage.create_date}}</td>
            <td>

              <span class="label label-success" v-if="passage.is_publish">已发布</span>
              <span class="label label-primary" v-if="!passage.is_publish">未发布</span>
            </td>
            <td><a :href="'/#/passage/'+passage.id">{{passage.title}}</a></td>
            <td>
              <button class="btn btn-default" v-if="!passage.is_publish" data-toggle="modal" data-target="#publish_modal" v-on:click="setTopublish(passage)">发布</button>
              <button class="btn btn-warning" v-if="passage.is_publish" data-toggle="modal" data-target="#cancel_publish_modal" v-on:click="setTounpublish(passage)">取消发布</button>
              <button class="btn btn-danger" data-toggle="modal" data-target="#delete_modal" v-on:click="setTodelete(passage)">删除</button>
            </td>
          </tr>
          </tbody></table>
      </div>
      <!-- /.box-body -->
    </div>

    <div id="publish_modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div class="modal-body">
            <p>是否发布此文章？</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="publish">发布</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="delete_modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div class="modal-body">
            <p>是否删除此文章？</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="delete_passage" >删除</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

    <div id="cancel_publish_modal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div class="modal-body">
            <p>是否取消发布此文章？</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-warning" data-dismiss="modal" v-on:click="unpublish">取消发布</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->


  </div>

</template>


<script>
  import nav from './subcomponts/nav'
  export default{
    name: 'MyPassages',
    components: {
      "nav_bar": nav,
    },

    data: function () {
      return {
        mypasssages: [],
        to_delete:null,
        to_unpubish:null,
        to_publish:null
      }
    },
    computed: {
      is_login: function () {
        return this.$store.state.is_login
      },
    },
    watch: {
      is_login: function (new_val) {
          this.fetch_passages();
      }
    },
    methods: {
      fetch_passages: function () {
        this.$http.get("/api/passagelist").then(function (response) {
          var result = response.body;
          this.mypasssages = result;
        }, function (err) {

        })
      },
      setTodelete:function (passage) {
          this.to_delete = passage;
      },
      setTopublish:function (passage) {
          this.to_publish = passage;
      },
      setTounpublish:function (passage) {
          this.to_unpublish = passage
      },
      publish:function () {
          var id = this.to_publish.id
          this.$http.put("/api/passage",{is_publish:true,id:id}).then(
            (response)=>{
                this.fetch_passages()
            },
            (err)=>{}
          )
      },
      unpublish:function () {
          var id = this.to_unpublish.id;
          this.$http.put("/api/passage",{is_publish:false,id:id}).then(
            (response)=>{
              this.fetch_passages()
            },
            (err)=>{}
          )
      },
      delete_passage:function () {
        var id = this.to_delete.id;
        this.$http.delete("/api/passage/"+id).then(
          (response)=>{
            this.fetch_passages()
          },
          (err)=>{console.log(id)}
        )
      }

    },
    created:function () {
      this.fetch_passages()
    }

  }
</script>
