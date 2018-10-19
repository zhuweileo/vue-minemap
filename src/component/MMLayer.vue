<template>
</template>

<script>
  export default {
    name: "MMLayer",
    inject: ['sourceId', 'getMap'],
    props: {
      id: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      sourceLayer: {
        type: String,
        default: '',
      },
      layout: {
        type: Object,
        default: null,
      },
      paint: {
        type: Object,
        default: null,
      },
      filter: {
        type: Array,
        default: null,
      },
    },
    data() {
      return {}
    },
    mounted() {
      this.$parent.$on('source-load', (map) => {
        this.map = map;
        this.addLayer();
      });
      if (this.$parent.isSourceLoaded) {
        this.map = this.getMap;
        this.addLayer();
      }
    },
    beforeDestroy() {
      this.rmLayer();
    },
    computed: {
      layerOptions() {
        const option = {
          id: this.id,
          source: this.sourceId,
          type: this.type,
        };
        const ops = ['paint', 'layout', 'filter'];
        ops.forEach((op) => {
          if (this[op]) option[op] = this[op]
        });
        if (this.sourceLayer) option['source-layer'] = this.sourceLayer;
        return option
      }
    },
    methods: {
      addLayer() {
        const {map, id, layerOptions} = this;
        if (map) {
          // console.log('addlayer')
          if (map.getLayer(id)) this.rmLayer();
          map.addLayer(layerOptions);
        }
      },
      rmLayer() {
        const {map} = this;
        if (map) {
          map.removeLayer(this.id);
        }
      }
    },
    watch: {
      layout: {
        deep: true,
        handler(val, old) {
          if (this.$parent.isSourceLoaded) {
            Object.keys(val).forEach((key) => {
              this.map.setLayoutProperty(this.id, key, val[key])
            });
          } else {
            this.$parent.$once('source-load', (map) => {
              Object.keys(val).forEach((key) => {
                map.setLayoutProperty(this.id, key, val[key])
              });
            })
          }
        }
      },
      paint: {
        deep: true,
        handler(val, old) {
          if (this.$parent.isSourceLoaded) {
            Object.keys(val).forEach((key) => {
              this.map.setPaintProperty(this.id, key, val[key])
            });
          } else {
            this.$parent.$once('source-load', (map) => {
              Object.keys(val).forEach((key) => {
                map.setPaintProperty(this.id, key, val[key])
              });
            })
          }
        }
      },
      filter: {
        deep: true,
        handler(val, old) {
          this.map.setFilter(this.id, this.filter);
        },
      }
    }
  }
</script>

<style scoped>

</style>
