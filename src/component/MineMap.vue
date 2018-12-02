<template>
  <div :id="options.container" class="vue-minemap">
    <slot></slot>
  </div>
</template>

<script>
  let mapCenter = [];

  export function getMap(id) {
    return mapCenter.filter(map => map.id === id)[0].mapInstace;
  }

  function rmFromMapCenter(id) {
    let index = null;
    mapCenter.forEach((map, i) => {
      if (map.id === id) {
        index = i
      }
    });
    mapCenter.splice(index, 1);
  }

  export default {
    name: "MineMap",
    provide() {
      return {
        getMap: this.getMap,
      }
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
      },
      urls: {
        type: Object,
        required: false,
      }
    },
    data() {
      return {
        isMapLoaded: false,
      }
    },
    mounted() {
      this.initMap()
    },
    beforeDestroy() {
    },
    destroyed() {
      this.rmMap()
    },
    methods: {
      initMap() {
        const minemap = minemap || window.minemap;
        const {accessToken, solution, options,urls} = this;

        if(urls) this.initParameter(minemap);

        minemap.accessToken = accessToken;
        minemap.solution = solution;

        this.rmMap();
        this.isMapLoaded = false;

        this.map = new minemap.Map(options);
        mapCenter.push({id: this.options.container, mapInstace: this.map});

        this.map.on('load', () => {
          this.$emit('map-load', this.map);
          this.isMapLoaded = true;
        })

      },
      rmMap() {
        if (this.map) {
          this.map.remove();
          this.map = null;
          rmFromMapCenter(this.options.container);
        }
      },
      getMap() {
        return this.map
      },
      initParameter(minemap){
        [
          'domainUrl','dataDomainUrl',
          'spriteUrl','serviceUrl'
        ].forEach(p => {
          if(this.urls[p]) minemap[p] = this.urls[p];
        })
      }
    },
    watch: {
      solution() {
        this.initMap();
      }
    }
  }
</script>

<style scoped>
  .vue-minemap {
    height: 100%;
  }
</style>
