<template>
  <div>

    <div class="register-box" id="register-page">
    <div class="register-logo">
      <!--<a href=""><b>注册</b></a>-->
    </div>

      <div class="register-box-body">
        <p class="login-box-msg">信息填写</p>

        <form  >
          <div class="form-group has-feedback">
            <input type="text" class="form-control" placeholder="Full name" name="username" v-model="reg_username">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" name="email" v-model="reg_email">
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" name="password" v-model="reg_password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Retype password" v-model="reg_retype_password">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-4">

            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button  class="btn btn-primary btn-block btn-flat" v-on:click.prevent="register">注册</button>
            </div>
            <!-- /.col -->
          </div>
        </form>



      </div>
    <!-- /.form-box -->
  </div>
  </div>

</template>

<script>
  export default{
      name:"register",
      data:function () {
        return {
          reg_username:"",
          reg_email:"",
          reg_password:"",
          reg_retype_password:""
        }
      },
      methods:{

        reset_box:function () {
          this.reg_username="";
          this.reg_email="";
          this.reg_password="";
          this.reg_retype_password=""
        },

        validate:function () {
          return true
        },

        register:function () {
          if (this.validate()){
            var info = {
              username:this.reg_username,
              email:this.reg_email,
              password:this.reg_password
            }
            this.$http.post('/api/register', info).then(function (response) {
              if (response.body.register_success==true){
                this.$http.post('/api/login',{username:info.username,password:info.password}).then(
                  function(response){
                    location="/#/";
                  },
                  function (err) {

                  }
                )

              } else{
                var error_message = response.body.message;
                alert(error_message);
                this.reset_box();

              }
            },function (response) {
              console.log("err");
            })
          }
        }
      }



  }


</script>
