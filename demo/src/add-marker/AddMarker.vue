<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <MMMarker ref="fucker"  :lnglat="markerLngLat" :anchor="'top-right'">
        <h3 slot="content" :class="markerClass" class="marker-base">你好</h3>
        <MMPopup id="111" :offset="markerOffset">
          <h1 slot="content">我是popup</h1>
        </MMPopup>
      </MMMarker>

      <button class="button" @click="onClick" >toggle</button>
    </MineMap>
  </div>
</template>

<script>
  import MineMap from '../../../src/component/MineMap'
  import MMMarker from '../../../src/component/MMMarker'
  import MMPopup from '../../../src/component/MMPopup'


  export default {
    name: "AddMarker",
    data() {
      return {
        show: true,
        id: 0,
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
        markerClass: [],
        markerOffset: [50,0],
        markerLngLat: [116.1866179, 39.992559],
      }
    },
    mounted() {
      console.log(this.$refs);
    },
    components: {
      MineMap,
      MMMarker,
      MMPopup,
    },
    methods: {
      onClick(){
        this.markerClass = this.markerClass.length? [] : ['marker-special'];
        this.markerOffset = this.markerOffset[0] === 50? [0,0]: [50,0];
        this.markerLngLat = this.markerLngLat[0] < 117? [117.1866179, 39.992559] : [116.1866179, 39.992559];
      },
      onMarkerClick(){
        alert('你好')
      }
    }
  };
</script>

<style scoped>
  .demo-container {
    height: 100%
  }

  .marker-base{
    color: red;
    background: black;
    height: 100px;
    width: 100px;
  }

  .marker-special{
    background: lightgrey;
  }

  .button{
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 100;
  }

</style>

