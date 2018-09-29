<template>
  <div id="app">
    <MineMap v-bind="mapProps">
      <MMSource v-for="layer in layerList" :key="layer.sourceId" :id="layer.sourceId" :options="layer.sourceOp">
        <MMLayer v-bind="layer.layerOp"></MMLayer>
      </MMSource>
    </MineMap>
    <ul class="layer-list">
      <li v-for="(layer,index) in layerList" :key="layer.sourceId">{{layer.sourceId}} <button @click="onClick(index)">X</button></li>
    </ul>
  </div>
</template>

<script>
  import MMSource from '../../src/component/MMSource.vue'
  import MMLayer from '../../src/component/MMLayer'
  import MineMap from '../../src/component/MineMap'

  export default {
    name: "app",
    data() {
      return {
        map: null,
        isMapLoaded: false,
        mapProps:{
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: '7185',
          options:{
            container: 'map',
            style: `http://minedata.cn/service/solu/style/id/7185`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }
        },
        layerList:[
          {
            sourceId: '0',
            sourceOp: {
              type: 'geojson',
              data: { type: 'Point', coordinates: [116.1866179, 39.992559], }
            },
            layerOp:{
              id: '0',
              type: 'circle',
              paint:{'circle-radius':20,'circle-color':'red'}
            }
          },
          {
            sourceId: '1',
            sourceOp: {
              type: 'geojson',
              data: { type: 'Point', coordinates: [116.1866179, 39.992559], }
            },
            layerOp:{
              id: '1',
              type: 'circle',
              paint:{'circle-radius':15,'circle-color':'green'}
            }
          },
          {
            sourceId: '2',
            sourceOp: {
              type: 'geojson',
              data: { type: 'Point', coordinates: [116.1866179, 39.992559], }
            },
            layerOp:{
              id: '2',
              type: 'circle',
              paint:{'circle-radius':10,'circle-color':'blue'}
            }
          }
        ]
      }
    },
    mounted() {
    },
    components: {
      MMSource,
      MMLayer,
      MineMap,
    },
    methods: {
      onClick(index) {
        this.layerList = this.layerList.filter((l,i) => i !== index);
      },
    }
  };
</script>

<style>
  * {margin: 0;padding: 0}

  html, body {height: 100%}

  #app { height: 100%; position: relative; }

  .layer-list{
    position: absolute;
    top: 50px;
    right: 50px;
    list-style: none;
    background: rgba(0,0,0,.5);
    color: white;
    width: 100px;
    padding: 10px;
  }
  .layer-list>li{
    display: flex;
    justify-content: space-between;
  }
  .layer-list>li>button{
    padding: 0.5em 1em;
  }
</style>

