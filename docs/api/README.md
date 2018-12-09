---
sidebar: auto
sidebarDepth: 1
---

# 文档


## 参数/MineMap

### accessToken
* **Type**: `string`<br>
* **Required**: `true`<br>

地图token值

```html
<mine-map :accessToken="'xxxxxxxxxxxxxxxxxx'"/>
```

### solution
* **Type**: `string | number`<br>
* **Required**: `true`<br>
* **Default**: `true`

地图solution

```html
<mine-map :solution="'xxxx'"/>
```

### options
* **Type**: `object`<br>
* **Required**: `true`<br>

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

## 参数/MMSource

### id
* **Type**: `string`<br>
* **Required**: `true`<br>

source的id

```html
<m-m-source :id="'test'"/>
```

### options
* **Type**: `object`<br>
* **Required**: `true`<br>

source的初始化参数，格式和minemap api兼容通用

```html
<m-m-source :options="{
  type:'geojson',
  data: {}
}"/>
```

### mapInstance
* **Type**: `minemap.Map`<br>
* **Required**: `false`<br>

minemap.Map 的实例化对象，当该组件不作为`MineMap`组件的子组件，而是单独使用时，需要传入

```html
<m-m-source :mapInstance="map"/>
```

## 参数/MMLayer

### id
* **Type**: `string`<br>
* **Required**: `true`<br>

layer的id

```html
<m-m-layer :id="'test'"/>
```

### type 
* **Type**: `string`<br>
* **Required**: `true`<br>

图层类型。 `circle`,`line`,`fill`,`symbol`,`background`,`raster`,`extrusion`,`heatmap`,`hillshade`中的一种。

```html
<m-m-layer :type="'circle'"/>
```

### sourceLayer 
* **Type**: `string`<br>
* **Required**: `false`<br>
* **Default**: `''`

矢量数据时，需要传入

```html
<m-m-layer :sourceLayer="'link'"/>
```

### layout
* **Type**: `object`<br>
* **Required**: `false`<br>
* **Default**: `null`

图层初始换参数中的 layout部分，格式和minemap api 兼容

```html
<m-m-layer :layout="{
  visibility: 'visible'
}">
```

### paint 
* **Type**: `object`<br>
* **Required**: `false`<br>
* **Default**: `null`

图层初始换参数中的paint部分，格式和minemap api 兼容

```html
<m-m-layer :paint="{
  'circle-color': '#000'
}">
```

### filter
* **Type**: `array`<br>
* **Required**: `false`<br>
* **Default**: `null`

图层初始换参数中的filter部分，格式和minemap api 兼容

```html
<m-m-layer :filter="['==','name','leo']">
```

## 参数/MMMarker

### lnglat
* **Type**: `array`<br>
* **Required**: `true`<br>

marker的坐标点
```html
<m-m-marker :lnglat="[116.34,39.45]"></m-m-marker>
```

### offset
* **Type**: `array`<br>
* **Required**: `false`<br>

marker位置偏移<br>
offset[0]: 相对于左上角向右偏移多少像素，
offset[1]: 相对于左上角向下偏移多少像素
```html
<m-m-marker :offset="[50,0]"></m-m-marker>
```

## 参数/MMPopup

### lnglat
* **Type**: `array`<br>
* **Required**: `false`<br>

popup的坐标点
```html
<m-m-popup :lnglat="[116.34,39.45]"></m-m-popup>
```

### offset
* **Type**: `array`<br>
* **Required**: `false`<br>

popup位置偏移<br>
offset[0]: 相对于锚点向右偏移多少像素，
offset[1]: 相对于锚点向下偏移多少像素
```html
<m-m-popup :offset="[50,0]"></m-m-popup>
```

### anchor
* **Type**: `string`<br>
* **Required**: `false`<br>

popup的偏移锚点<br>
可选值`'center' ,  'top' ,  'bottom' , 'left' ,  'right' ,  'top-left' ,  'top-right' ,  'bottom-left' , 'bottom-right'`
```html
<m-m-popup :anchor="'top'"></m-m-popup>
```

### closeButton
* **Type**: `boolean`<br>
* **Required**: `false`<br>
* **Default** `true`<br>

popup是否显示关闭按钮
```html
<m-m-popup :closeButton="false"></m-m-popup>
```

### closeOnClick
* **Type**: `boolean`<br>
* **Required**: `false`<br>
* **Default** `true`<br>

点击地图是否可以关闭popup
```html
<m-m-popup :closeOnClick="false"></m-m-popup>
```

## 事件/MineMap

### map-load 

* **Required**: `false`<br>
* **Parameters**: `map实例`

当地图加载完时调用

```html
<mine-map @map-load="onLoad" />
```
## 方法/MineMap

### getMap
* **return**: `map实例`

```vue
<template>
  <div class="demo-container">
    <MineMap ref="map" v-bind="mapProps"/>
  </div>
</template>
<script >
  export default {
    name: 'app',
    mounted(){
      //可以通过该方法获取map实例
      const map = this.$refs.map.getMap()
    }
  }
</script>
```

## 方法/vue-minemap

### getMap

* **parameters**:<br>
  map的container 
  - type: string
  - required: true
  
* **return**: `map实例`

```vue
<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps" style="flex:0 1 50%;position:relative">
      <button class="zoom-btn" @click="zoom1">zoom</button>
    </MineMap>
    <MineMap v-bind="mapProps1" style="flex: 0 1 50%;position:relative">
      <button class="zoom-btn" @click="zoom2">zoom</button>
    </MineMap>
  </div>
</template>
<script>
  //可以从组件库中引入getMap方法
  import {MineMap,getMap} from 'vue-minemap'
  export default {
    name: 'multimap',
    data(){
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
        mapProps1: {
          accessToken: 'e919a6f32ce242f5aec22652d9dc1fdb',
          solution: '4287',
          options: {
            container: 'map1',
            style: `//minedata.cn/service/solu/style/id/4287`,
            center: [116.1866179, 39.992559],
            zoom: 9,
            minZoom: 3,
            maxZoom: 17,
          }
        },
      }
    },
    mounted(){
      // mapProps中 options.container的值
      const map = getMap('map');
      const map1 = getMap('map1');
    },
  }
</script>

```
::: tip
MineMap实例上的getMap方法和vue-minemap中导出的getMap方法，都可获取到你想要的map实例，但是后者需要你传入map初始化参数中的container值，因为组件是根据该值去区分不同的MineMap组件的。
<br>获取map实例是为了可以调用minemap的api，实现该组件没有实现的api功能。
:::
