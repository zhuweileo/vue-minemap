<p align="center"><img src="https://rawgit.com/mauricius/vue-draggable-resizable/master/docs/resources/logo.png" alt="logo"></p>
<h1 align="center">vue-minemap</h1>

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-draggable-resizable.svg?style=flat-square)](https://npmjs.com/package/vue-draggable-resizable)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![npm](https://img.shields.io/npm/dt/vue-draggable-resizable.svg?style=flat-square)](https://www.npmjs.com/package/vue-draggable-resizable)


> minemap api的vue实现

## 目录 

* [特性](#特性)
* [demo](#demo)
* [安装和基本使用](#安装和基本使用)
  * [参数](#参数)
  * [事件](#事件)
* [参与贡献](#参与贡献)
* [许可证](#许可证)

### 特性

* 使用vue组件风格创建minemap图层
* 减少minemap api调用，专注于业务逻辑
* 使用简单，易上手

### 组件列表
* MineMap
* MMSource
* MMLayer

### Demo

[Demo](https://zhuweileo.github.io/vue-minemap/demo)

---

## 安装 和 基本使用

```bash
$ npm install --save vue-minemap
```

使用地图

```vue
<tempalte>
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
</tempalte>
<script>
  import {MineMap} from 'vue-minemap'
  export default {
    name:'app',
  }
</script>
```
添加source和layer
```vue
<tempalte>
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

### Props

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

### Events

#### MineMap
##### map-load 

Required: `false`<br>
Parameters: `map实例`

当地图加载完时调用

```html
<mine-map @map-load="onLoad" />
```

### Gotchas

Be careful to use appropriate values for `x`, `y`, `w`, `h`, `minh` and `minh` props when you want to restrict the component in its parent element.

### Bonus

If `resizing`, `parent` and `maximize` props are `true` you can double-click on the element to make it fill the parent.

## Roadmap

- [x] Touch support (thanks @ojczeo)
- [ ] Fix grid issues (#34, #58) - In progress
- [ ] Implement Storybook - In progress
- [ ] Aspect ratio on resizing (#26) - In progress
- [ ] `maxWidth` and `maxHeight` props (#76) - In progress
- [ ] Different approach with CSS styles (#73)
- [ ] Watching props for changes (requires refactoring and possibly breaking changes)

## Contributing

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

``` bash
# serve with hot reload at localhost:8080
npm run dev

# distribution build
npm run build

# build the docs into gh-pages
npm run docs

# run unit tests
npm run test

```

## License

[MIT license](LICENSE)
