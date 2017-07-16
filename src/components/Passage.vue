<template>
  <div class="layout-top-nav">
    <nav_bar></nav_bar>


    <div class="container">

      <div class="row row-offcanvas row-offcanvas-right" style="margin-top: 50px">


        <div class="col-xs-12 col-sm-9">
          <h3>{{title}}</h3>
          <div id="passage">

          </div>

        </div><!--/.col-xs-12.col-sm-9-->

        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
          <div class="list-group">
            <a :href="'/#/passage/edit/'+$route.params.id" class="list-group-item" v-if="">更改</a>
            <a href="#" class="list-group-item">...</a>
          </div>
        </div><!--/.sidebar-offcanvas-->
      </div><!--/row-->

    </div>
  </div>


</template>


<script>
  import nav from './subcomponts/nav'
  export default{
    name:'Passage',
    methods:{

    },
    data:function () {
      return {
          passage:null,
          title:"文章"
      }
    },
    components:{
        "nav_bar":nav
    },
    created:function () {
      this.$http.get('/api/passage',{params:{id:this.$route.params.id}}).then(function (response) {
        var result = response.body;
        if (result.fetch_success){
            this.title = result.passage.title;
            var passage_ele = $(result.passage.content);
            this.passage=result.passage
            $('#passage').append(passage_ele)
        }else{

        }
      },function (err) {

      })
    }

  }
</script>
