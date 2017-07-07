<template>
  <div class="layout-top-nav">

    <nav_bar></nav_bar>
    <home_body></home_body>
  </div>

</template>


<script>
  import nav from './subcomponts/nav'
  import homebody from './subcomponts/home.body'

  export default{
      name:'Home',
      components:{
        "nav_bar":nav,
        "home_body":homebody
      }

  }
</script>
