<template>
  <div id="app">
    <demo1></demo1>
  </div>
</template>

<script>
  import demo1 from './move-layer/MoveLayer'
  export default {
    name:'app',
    components: {
      demo1
    }
  };
</script>

<style>
  * {margin: 0;padding: 0}

  html, body {height: 100%}

  #app { height: 100%; position: relative; }

</style>

