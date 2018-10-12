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
Type: `string | number`<br>
Required: `true`<br>
Default: `true`

地图solution

```html
<mine-map :solution="'xxxx'"/>
```

### options
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

## 参数/MMSource

### id
Type: `string`<br>
Required: `true`<br>

source的id

```html
<m-m-source :id="'test'"/>
```

### options
Type: `object`<br>
Required: `true`<br>

source的初始化参数，格式和minemap api兼容通用

```html
<m-m-source :options="{
  type:'geojson',
  data: {}
}"/>
```

### mapInstance
Type: `minemap.Map`<br>
Required: `false`<br>

minemap.Map 的实例化对象，当该组件不作为`MineMap`组件的子组件，而是单独使用时，需要传入

```html
<m-m-source :mapInstance="map"/>
```

## 参数/MMLayer

### id
Type: `string`<br>
Required: `true`<br>

layer的id

```html
<m-m-layer :id="'test'"/>
```

### type 
Type: `string`<br>
Required: `true`<br>

图层类型。 `circle`,`line`,`fill`,`symbol`,`background`,`raster`,`extrusion`,`heatmap`,`hillshade`中的一种。

```html
<m-m-layer :type="'circle'"/>
```

### sourceLayer 
Type: `string`<br>
Required: `false`<br>
Default: `''`

矢量数据时，需要传入

```html
<m-m-layer :sourceLayer="'link'"/>
```

### layout
Type: `object`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的 layout部分，格式和minemap api 兼容

```html
<m-m-layer :layout="{
  visibility: 'visible'
}">
```

### paint 
Type: `object`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的paint部分，格式和minemap api 兼容

```html
<m-m-layer :paint="{
  'circle-color': '#000'
}">
```

### filter
Type: `array`<br>
Required: `false`<br>
Default: `null`

图层初始换参数中的filter部分，格式和minemap api 兼容

```html
<m-m-layer :filter="['==','name','leo']">
```

## 事件/MineMap

### map-load 

Required: `false`<br>
Parameters: `map实例`

当地图加载完时调用

```html
<mine-map @map-load="onLoad" />
```
