# 基础地图

## 效果
<BasicMap/>

## 代码
```vue
<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps"/>
  </div>
</template>

<script>
  import {MineMap,getMap} from 'vue-minemap'

  export default {
    name: "MultiMap",
    components: {
      MineMap
    },
    data(){
      return {
        mapProps: {
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: '7185',
          options: {
            container: 'map',
            style: `//minedata.cn/service/solu/style/id/7185`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }
        },
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .demo-container{
    height: 500px;
  }

</style>
```


