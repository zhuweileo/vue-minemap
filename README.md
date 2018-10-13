<p align="center"><img src="./src/assets/logo.png" alt="logo"></p>
<h1 align="center">vue-minemap</h1>

> minemap api的vue实现

## 目录 

* [特性](#特性)
* [demo](#demo)
* [安装和基本使用](#安装和基本使用)
  * [参数](#参数)
  * [事件](#事件)
* [待完成工作](#待完成工作)
* [参与贡献](#参与贡献)
* [许可证](#许可证)

## 特性

* 使用vue组件风格创建minemap图层
* 减少minemap api调用，专注于业务逻辑
* 使用简单，易上手

## 组件列表
* MineMap
* MMSource
* MMLayer

## Demo

[Demo](https://zhuweileo.github.io/vue-minemap/demo)

---

## 安装 和 基本使用

```bash
$ npm install --save vue-minemap
```

首先，引入minemap api

index.html
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="//minedata.cn/minemapapi/v2.0.0/minemap.css">
    <title>vue-minemap-demo2</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="//minedata.cn/minemapapi/v2.0.0/minemap.js"></script>
    <!-- built files will be auto injected -->
  </body>
</html>
```
使用地图组件
```vue
<tempalte>
  <div id="app">
    <mine-map 
          :accessToken= "'e919a6f32ce242f5aec22652d9dc1fdb'"
          :solution= "'7185'"
          :options= "{
            container: 'map',
            style: `http://minedata.cn/service/solu/style/id/7185`,
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
添加source和layer
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

### 参数

#### MineMap
##### accessToken
Type: `string`<br>
Required: `true`<br>

地图token值

```html
<mine-map :accessToken="'xxxxxxxxxxxxxxxxxx'"/>
```

##### solution
Type: `string | number`<br>
Required: `true`<br>
Default: `true`

地图solution

```html
<mine-map :solution="'xxxx'"/>
```

##### options
Type: `object`<br>
Required: `true`<br>

地图初始化参数，格式和minemap api兼容通用

```html
<mine-map :options="{
   container: 'map',
   style: `http://minedata.cn/service/solu/style/id/xxxx`,
   center: [116.1866179, 39.992559],
   zoom: 9,
   minZoom: 3,
   maxZoom: 17,
}"/>
```

#### MMSource

##### id
Type: `string`<br>
Required: `true`<br>

source的id

```html
<m-m-source :id="'test'"/>
```

##### options
Type: `object`<br>
Required: `true`<br>

source的初始化参数，格式和minemap api兼容通用

```html
<m-m-source :options="{
  type:'geojson',
  data: {}
}"/>
```

##### mapInstance
Type: `minemap.Map`<br>
Required: `false`<br>

minemap.Map 的实例化对象，当该组件不作为`MineMap`组件的子组件，而是单独使用时，需要传入

```html
<m-m-source :mapInstance="map"/>
```

#### MMLayer

##### id
Type: `string`<br>
Required: `true`<br>

layer的id

```html
<m-m-layer :id="'test'"/>
```

##### type 
Type: `string`<br>
Required: `true`<br>

图层类型。 `circle`,`line`,`fill`,`symbol`,`background`,`raster`,`extrusion`,`heatmap`,`hillshade`中的一种。

```html
<m-m-layer :type="'circle'"/>
```

##### sourceLayer 
Type: `string`<br>
Required: `false`<br>
Default: `''`

矢量数据时，需要传入

```html
<m-m-layer :sourceLayer="'link'"/>
```

##### layout
Type: `object`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的 layout部分，格式和minemap api 兼容

```html
<m-m-layer :layout="{
  visibility: 'visible'
}">
```

##### paint 
Type: `object`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的paint部分，格式和minemap api 兼容

```html
<m-m-layer :paint="{
  'circle-color': '#000'
}">
```

##### filter
Type: `array`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的filter部分，格式和minemap api 兼容

```html
<m-m-layer :filter="['==','name','leo']">
```

---

### 事件

#### MineMap
##### map-load 

Required: `false`<br>
Parameters: `map实例`

当地图加载完时调用

```html
<mine-map @map-load="onLoad" />
```

## 待完成工作

- [ ] 写单元测试
- [ ] marker组件
- [ ] popup组件
- [ ] 路径规划组件
- [ ] poi搜索组件
- [ ] 城市搜索组件

## 参与贡献

欢迎参与代码贡献

``` bash

# 打包组件代码
npm run build

# 运行demo
npm run demo:dev

# 打包demo
npm run demo:build

# 运行单元测试
npm run test

```

## 许可证

[MIT license](LICENSE)
