---
sidebar: auto
---
# 指引

## 安装

```bash
$ npm install --save vue-minemap
or
$ yarn add vue-minemap
```

## 引入minemap api

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <!--引入 css-->
    <link rel="stylesheet" href="//minedata.cn/minemapapi/v2.0.0/minemap.css">
    <title>vue-minemap-demo2</title>
  </head>
  <body>
    <div id="app"></div>
    <!--引入 js-->
    <script src="//minedata.cn/minemapapi/v2.0.0/minemap.js"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```

## 使用地图组件
```vue
<tempalte>
  <div id="app">
    <mine-map 
          :accessToken= "'xxxxxxxxxxxxxxxxxxxxxxxxx'"
          :solution= "'xxxx'"
          :options= "{
            container: 'map',
            style: `http://minedata.cn/service/solu/style/id/xxxx`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }"
    ></mine-map>
  </div>
</tempalte>
<script>
  import {MineMap} from 'vue-minemap'
  export default {
    name:'app',
  }
</script>
<style>
  html,body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>
```
## 添加source和layer
```vue
<tempalte>
  <mine-map 
          :accessToken= "'xxxxxxxxxxxxxxxxxxxxxxxxx'"
          :solution= "'7185'"
          :options= "{
            container: 'map',
            style: `http://minedata.cn/service/solu/style/id/xxxx`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }"
  >
      <MMSource :id="sourceId" :options="sourceOption">
        <MMLayer 
        :id="layerOption.id"
        :type="layerOption.type"
        :paint="layerOption.paint"
        ></MMLayer>
      </MMSource>
  </mine-map>
</tempalte>
<script>
  import {MineMap,MMSource,MMLayer} from 'vue-minemap'
  export default {
    name:'app',
    data(){
      return {
        sourceId: 'test',
        sourceOption:{
           type: 'geojson',
           data: {type: 'Point', coordinates: [116.1866179, 39.992559],}
        },
        layerOption:{
           id: 'test',
           type: 'circle',
           paint: {'circle-radius': 10, 'circle-color': '#ccc'}
        }
      }
    }
  }
</script>
```

