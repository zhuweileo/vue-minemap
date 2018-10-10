<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps" @click="" @onload="">
      <MMSource v-if="show" v-for="(layer,index) in layerList" :key="layer.sourceId" :id="layer.sourceId"
                :options="layer.sourceOp">
        <MMLayer v-bind="layer.layerOp"></MMLayer>
      </MMSource>
    </MineMap>

    <div class="action-panel">
      <Vdrag v-model="layerList" class="layer-list" @end="onDragEnd">
        <div
                v-for="(layer,index) in layerList"
                :key="layer.sourceId"
                :style="{color: layer.layerOp.paint['circle-color']}"
        >
          <div class="panel-row">
            {{layer.sourceId}}
            <button @click="onDelClick(index)">X</button>
          </div>
          <div class="panel-row">
            radius: <input type="text" :value="layer.layerOp.paint['circle-radius']" @change="onInputChange(index,$event)">
          </div>
        </div>
      </Vdrag>
      <button class="add-layer" @click="onAdd">添加</button>
    </div>

  </div>
</template>

<script>
  import MMSource from '../../../src/component/MMSource.vue'
  import MMLayer from '../../../src/component/MMLayer'
  import MineMap from '../../../src/component/MineMap'
  import Vdrag from 'vuedraggable'

  export default {
    name: "MoveLayer",
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
        layerList: [],
      }
    },
    mounted() {
    },
    components: {
      MMSource,
      MMLayer,
      MineMap,
      Vdrag,
    },
    methods: {
      onDelClick(index) {
        this.layerList = this.layerList.filter((l, i) => i !== index);
      },
      onDragEnd() {
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        })
      },
      onAdd() {
        const getRandom = (range) => parseInt(Math.random() * range);
        const color = `rgb(${getRandom(255)},${getRandom(255)},${getRandom(255)})`;
        const radius = getRandom(100);
        const id = this.id++;

        this.layerList.push(
          {
            sourceId: id + '',
            sourceOp: {
              type: 'geojson',
              data: {type: 'Point', coordinates: [116.1866179, 39.992559],}
            },
            layerOp: {
              id: id + '',
              type: 'circle',
              paint: {'circle-radius': radius, 'circle-color': color}
            }
          }
        )
      },
      onInputChange(index,e){
        this.layerList[index].layerOp.paint['circle-radius'] = parseInt(e.target.value);
      },
    }
  };
</script>

<style scoped>
  .demo-container {
    height: 100%
  }

  .action-panel {
    position: absolute;
    top: 50px;
    right: 50px;
    list-style: none;
    background: rgba(0, 0, 0, .5);
    color: white;
    width: 100px;
    padding: 10px;
  }

  .action-panel .panel-row{
    display: flex;
    justify-content: space-between;
  }
  .action-panel .panel-row>input{
    width: 60%;
  }


  .layer-list  .panel-row > button {
    padding: 0.5em 1em;
  }
</style>
