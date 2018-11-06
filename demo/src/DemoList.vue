<template>
  <ul class="demo-list">
    <li class="demo-list-item" v-for="demo in demoList">
      <router-link class="link" :to="demo.path">{{demo.name}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "DemoList",
    data() {
      return {
        demoList: [
          {
            id: 'move-layer',
            name: '移动图层',
            path: '/movelayer',
          },
          {
            id: 'multi-map',
            name: '多个地图',
            path: '/multimap',
          },
          {
            id: 'add-marker',
            name: '添加marker',
            path: '/addmarker',
          },
        ]

      }
    }
  }
</script>

<style scoped>
  .demo-list {
    display: inline-block;
    list-style: none;
    background: rgba(0, 0, 0, .8);
  }
  .demo-list-item{
    padding: 10px 10px
  }
  .demo-list-item>.link{
    color: white;
    text-decoration: none;
  }
</style>
