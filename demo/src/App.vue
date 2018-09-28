<template>
  <div id="app">
    <div id="map"></div>
    <MMSource v-if="isMapLoaded" :id="'test'" :map="map" :options="sourceOp">
      <MMLayer :id="'test'" :type="'circle'" :source-layer="sourceLayer" :paint="paint"></MMLayer>
    </MMSource>
    <button class="add" @click='onClick'>++++++</button>
  </div>
</template>

<script>
  import MMSource from '../../src/component/MMSource.vue'
  import MMLayer from '../../src/component/MMLayer'

  export default {
    name: "app",
    data() {
      return {
        map: null,
        isMapLoaded: false,
        sourceLayer: '',
        sourceOp: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [116.1866179, 39.992559],
                }
              }
            ]
          }
        },
        sourceOp1: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [117.1866179, 39.992559],
                }
              }
            ]
          }

        },
        sourceOp2:{
          type: 'vector',
          tiles: ['http://36.111.84.170:8004/data/pbf/{z}/{x}/{y}?name=beijing_poi_jingjian']
        },
        paint: {
          'circle-color': 'red',
          'circle-radius': 10,
        }
      }
    },
    mounted() {
      minemap.accessToken = 'e919a6f32ce242f5aec22652d9dc1fdb';
      minemap.solution = '7185';
      this.map = new minemap.Map({
        container: 'map',
        style: `http://minedata.cn/service/solu/style/id/7185`,
        center: [116.1866179, 39.992559],
        zoom: 9,
        minZoom: 3,
        maxZoom: 17,
      })
      this.map.on('load', () => {
        this.isMapLoaded = true;
      })
    },
    components: {
      MMSource,
      MMLayer,
    },
    methods: {
      onClick() {
        // this.sourceOp.data.features[0].geometry.coordinates[0] += 0.1
        this.sourceLayer = 'position';
        this.sourceOp = this.sourceOp2;
      }
    }
  };
</script>

<style>
  * {margin: 0;padding: 0}

  html, body {height: 100%}

  #app { height: 100%; position: relative; }
  .add{
    position: absolute;
    top: 50px;
    right: 50px;
  }

  #map { height: 100%}
</style>

