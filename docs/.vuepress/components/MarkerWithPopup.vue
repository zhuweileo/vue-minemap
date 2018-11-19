<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <MMMarker :lnglat="markerLngLat" :offset="markerOffset" :anchor="'top-right'">
        <h3 slot="content" class="marker-base">vue</h3>
        <MMPopup :offset="[75,10]">
          <h3 slot="content" class="popup-base">minemap</h3>
        </MMPopup>
      </MMMarker>
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
    },
    components: {
      MineMap,
      MMMarker,
      MMPopup,
    },
  };
</script>

<style scoped>
  .demo-container {
    height: 500px;
  }

  .marker-base{
    color: rgb(53,73,94);
    background: rgb(65,184,131);
    text-align: center;
    height: 50px;
    line-height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .popup-base{
    color: rgb(65,184,131);
  }

</style>

