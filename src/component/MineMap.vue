<template>
  <div :id="options.container" class="vue-minemap" style="height:100%">
    <slot></slot>
  </div>
</template>

<script>
  let map = null;

  export function getMap() {
    return map
  }

  export default {
    name: "MineMap",
    provide: {
      getMap,
    },
    props: {
      accessToken: {
        type: String,
        required: true,
      },
      solution: {
        type: [String, Number],
        required: true,
      },
      options: {
        type: Object,
        required: true,
      }
    },
    mounted() {
      this.initMap()
    },
    beforeDestroy(){
      this.rmMap()
    },
    methods:{
      initMap(){
        const minemap = minemap || window.minemap;
        const {accessToken, solution, options} = this;
        minemap.accessToken = accessToken;
        minemap.solution = solution;
        this.rmMap();
        map = new minemap.Map(options);
        map.on('load', () => {
          this.$emit('map-load', map)
        })
      },
      rmMap(){
        if(map){
          map.remove();
          map = null;
        }
      }
    },
    watch: {
      solution(){
        this.initMap();
      }
    }
  }
</script>

<style scoped>

</style>
