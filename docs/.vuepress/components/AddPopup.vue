<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <MMPopup ref="pop" :lnglat="popupLngLat" :offset="popupOffset" :close-on-click="true">
        <p slot="content" class="popup-base">你好</p>
      </MMPopup>
      <button class="btn" @click="onClick">显示popup</button>
    </MineMap>
  </div>
</template>

<script>
  import MineMap,{getMap} from '../../../src/component/MineMap'
  import MMPopup from '../../../src/component/MMPopup'

  export default {
    name: "AddPopup",
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
        popupClass: [],
        popupOffset: [50,0],
        popupLngLat: [116.1866179, 39.992559],
      }
    },
    components: {
      MineMap,
      MMPopup,
    },
    methods:{
      onClick(){
        const map = getMap('map');
        this.$refs.pop.popup.addTo(map);
      }
    }
  };
</script>

<style scoped>
  .demo-container {
    height: 500px;
  }

  .popup-base{
    color: #3eaf7c;
    font-size: 16px;
  }

  .btn{
    position: absolute;
    top: 10px;right:10px;
    z-index: 100;
    height: 2.5em;
  }
</style>

