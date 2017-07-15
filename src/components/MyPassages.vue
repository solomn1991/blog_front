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
          </tr>
          <tr v-for="passage in mypasssages">
            <td>{{passage.create_date}}</td>
            <td>

              <span class="label label-success">发布</span>
              <span class="label label-primary">未发布</span>
            </td>
            <td><a :href="'/#/passage/'+passage.id">{{passage.title}}</a></td>
          </tr>
          </tbody></table>
      </div>
      <!-- /.box-body -->
    </div>

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
        mypasssages: []
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

    },
    created:function () {
      this.fetch_passages()
    }

  }
</script>
