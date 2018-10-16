<template>
  <div class="demo-container">
    <MineMap v-bind="mapProps">
      <div class="action-panel">
        <h4>更换地图样式</h4>
        <input id='white' type='radio' name='rtoggle' value='7185' checked='checked' @input="onInput">
        <label for='white'>白色</label>
        <input id='black' type='radio' name='rtoggle' value='4287' @input="onInput">
        <label for='black'>黑色</label>
      </div>
    </MineMap>
  </div>
</template>

<script>
  import MineMap,{getMap} from '../../../src/component/MineMap'

  export default {
    name: "MultiMap",
    components: {
      MineMap
    },
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
      }
    },
    methods:{
      onInput(e){
        const solution = e.target.value;
        this.mapProps.solution = solution;
        this.mapProps.options.style = `//minedata.cn/service/solu/style/id/${solution}`
      }
    }
  }
</script>

<style scoped>
  .demo-container{
    height: 500px;
    position: relative;
  }
  .action-panel{
    background: rgba(200,200,200,5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>

