<template>
  <div id="app">
    <DemoList class="preview"/>
    <router-view/>
  </div>
</template>

<script>
  import DemoList from './DemoList'
  export default {
    name:'app',
    components:{
      DemoList,
    }
  };
</script>

<style>
  * {margin: 0;padding: 0}

  html, body {height: 100%}

  #app { height: 100%; position: relative; }

  .preview{
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 100;
  }
</style>

