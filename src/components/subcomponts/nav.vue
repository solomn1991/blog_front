<template>
  <!--登录判断-->
  <div>
    <header class="main-header">
      <nav class="navbar navbar-static-top">
        <div class="container">
          <div class="navbar-header">
            <a href="#" class="navbar-brand">Blog of <b>Solomn</b></a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
              <i class="fa fa-bars"></i>
            </button>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
            <ul class="nav navbar-nav">
              <li class=""><a href="#">Home</a></li>
              <li><a href="/">...</a></li>
            </ul>

          </div>




          <div class="navbar-custom-menu pull-right" id="login_box">
            <ul class="nav navbar-nav">

              <li v-if="is_login"><a href="#" >{{user.username}}</a></li>
              <li v-if="!is_login" data-toggle="modal" data-target="#login_box_modal" ><a>登录</a></li>
              <li v-if="is_login" v-on:click="logout"><a>注销</a></li>
              <li v-if="!is_login"><a href="/#/register" >注册</a></li>
            </ul>



          </div>





          <!--Navbar Right Menu -->


        </div>
        <!-- /.container-fluid -->
      </nav>
    </header>
    <div class="modal fade" id="login_box_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel"></h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>

                  <div class="col-sm-10">
                    <input  v-model="user.username" class="form-control" id="inputEmail3" placeholder="...">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">密码</label>

                  <div class="col-sm-10">
                    <input type="password" v-model="user.password" class="form-control" id="inputPassword3" placeholder="***">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <span  style="color: red">{{alert_message}}</span>
                  </div>
                </div>
              </div>
              <!-- /.box-body -->

              <!-- /.box-footer -->
            </form>
          </div>
          <!--<div class="modal-footer">-->

          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" v-on:click="login">登录</button>
          </div>
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default{
      name:"nav",
      computed:{
          is_login(){
              return this.$store.state.is_login;
          }
      },
      data:function () {
          return {
              user:{
                  username:"",
                  password:""
              },
              alert_message:"",
              result:null,

          }
      },
      methods:{
        reset_alertmessage:function () {
            this.alert_message = "";
        },

        login:function (hint) {
          this.$http.post('/api/login',{username:this.user.username,password:this.user.password}).then(response => {
            var component = this;


            var result = response.body;
            if (result.login_success){
              this.user.username = result.user.username;

              $("#login_box_modal").modal("hide");
              console.log("登录成功");


              //emit login
              var user = response.body.user
              this.$store.commit("login",user)
            }else{
                if (hint){
                  this.alert_message=result.reason;
                  setTimeout(this.reset_alertmessage,3000);
                }

            }

            //this.someData = response.body;

          }, response => {
            // error callback
            console.log(response)
          });

        },

        logout:function () {
          this.$http.post('/api/logout').then(response => {

            var result = response.body;
            if (!result.is_login){
              this.is_login = false;
              console.log("登出成功")

              //emit logout
              this.$store.commit("logout");
              window.location = "/#/"
            }



            //this.someData = response.body;

          }, response => {
            // error callback
          });

        }
      },

      created:function () {
        this.login()
      }
  }
</script>
