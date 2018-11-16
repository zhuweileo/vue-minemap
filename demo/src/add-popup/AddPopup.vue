<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <MMPopup :id="'aaa'" :lnglat="popupLngLat" :offset="popupOffset" :close-button="false" :close-on-click="false">
        <h3 slot="content" :class="popupClass" class="popup-base">你好</h3>
        <!--<h1></h1>-->
      </MMPopup>

      <button class="button" @click="onClick" >toggle</button>
    </MineMap>
  </div>
</template>

<script>
  import MineMap from '../../../src/component/MineMap'
  import MMPopup from '../../../src/component/MMPopup'

  export default {
    name: "AddPopup",
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
        popupClass: [],
        popupOffset: [50,0],
        popupLngLat: [116.1866179, 39.992559],
      }
    },
    mounted() {
    },
    components: {
      MineMap,
      MMPopup,
    },
    methods: {
      onClick(){
        this.popupClass = this.popupClass.length? [] : ['popup-special'];
        this.popupOffset = this.popupOffset[0] === 50? [0,0]: [50,0];
        this.popupLngLat = this.popupLngLat[0] < 117? [117.1866179, 39.992559] : [116.1866179, 39.992559];
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

  .popup-base{
    color: red;
    background: black;
    height: 100px;
    width: 100px;
  }

  .popup-special{
    background: lightgrey;
  }

  .button{
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 100;
  }

</style>

