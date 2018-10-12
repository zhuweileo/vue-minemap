<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps" style="flex:0 1 50%;position:relative">
      <button class="zoom-btn" @click="zoom1">zoom</button>
    </MineMap>
    <MineMap v-bind="mapProps1" style="flex: 0 1 50%;position:relative">
      <button class="zoom-btn" @click="zoom2">zoom</button>
    </MineMap>
  </div>
</template>

<script>
  import MineMap,{getMap} from '../../../src/component/MineMap'

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
        mapProps1: {
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: '4287',
          options: {
            container: 'map1',
            style: `//minedata.cn/service/solu/style/id/4287`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }
        },
      }
    },
    methods:{
      zoom1(){
        const map = getMap('map');
        map.zoomIn();
      },
      zoom2(){
        const map = getMap('map1');
        map.zoomIn();
      },
    }
  }
</script>

<style scoped>
  .demo-container{
    height: 500px;
    display: flex;
  }

  .zoom-btn{
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 20;
  }
</style>
