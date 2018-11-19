# 添加marker

## 效果
<AddMarker/>

## 代码

```vue
<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <MMMarker :lnglat="markerLngLat" :offset="markerOffset" :anchor="'top-right'">
        <h3 slot="content" class="marker-base">vue</h3>
      </MMMarker>
    </MineMap>
  </div>
</template>

<script>
  import {MineMap,MMMarker} from 'vue-minemap';
  export default {
    name: "AddMarker",
    data() {
      return {
        mapProps: {
          //省略
          ...
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
</style>
```
