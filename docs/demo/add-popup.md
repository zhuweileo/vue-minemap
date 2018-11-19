# 添加popup

## 效果
<AddPopup/>

## 代码

```vue
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
  import {MineMap,MMPopup,getMap} from 'vue-minemap';

  export default {
    name: "AddPopup",
    data() {
      return {
        mapProps: {
          //省略
          ...
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
```
