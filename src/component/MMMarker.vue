<template>
  <div class="MMMarker-container" style="display: none;">
    <slot></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "MMMarker",
    // data(){
    //   return {
    //     marker: null
    //   }
    // },
    props: {
      lnglat: {
        type: Array,
        required: true,
      },
      mapInstace: {
        type: Object,
      },
      // draggable: {
      //   type: Boolean,
      // },
      offset: {
        type: Array,
      },
      // anchor: {
      //   type: String,
      // },
    },
    mounted() {
      if (this.$parent.$options.name === 'MineMap') {
        this.$parent.$on('map-load', (map) => {
          this.map = map;
          this.addMarker();
        });
        if (this.$parent.isMapLoaded) {
          this.map = this.getMap();
          this.addMarker();
        }
      } else {
        this.map = this.mapInstace;
        this.addMarker();
      }
    },
    beforeDestroy() {
      this.rmMarker();
    },
    methods: {
      addMarker() {
        const minemap = minemap || window.minemap;
        const map = this.map;

        let el;
        try{
          el = this.$slots.content[0].elm;
        } catch (e) {
          throw new Error('请添加一个名为content的具名slot，使其作为marker的内容，例如：<h1 slot="content">hello world</h1>');
        }

        const lnglat = this.lnglat;
        // const draggable = this.draggable;
        const offset = this.offset;
        const anchor = this.anchor;
        const options = {};

        // if(draggable) options.draggable = draggable;
        if (offset) options.offset = offset;
        if (anchor) options.anchor = anchor;

        this.marker = new minemap.Marker(el, options).setLngLat(lnglat).addTo(map);

        //添加popup;
        this.$children.forEach((c) => {
          if(c.$options.name === 'MMPopup'){
            const popup = c.popup;
            this.marker.setPopup(popup);
          }
        });
      },
      rmMarker() {
        if (!this.marker) return;
        this.marker.remove();
      },
      getMarker(){
        return this.marker;
      }
    },
    watch: {
      offset(val) {
        if (this.$parent.$options.name === 'MineMap') {
          if (this.$parent.isMapLoaded) {
            this.marker.setOffset(val);
          } else {
            this.$parent.$once('map-load', (map) => {
              this.marker.setOffset(val);
            })
          }
        } else {
          this.marker.setOffset(val);
        }
      },
      lnglat(val) {
        if (this.$parent.$options.name === 'MineMap') {
          if (this.$parent.isMapLoaded) {
            this.marker.setLngLat(val);
          } else {
            this.$parent.$once('map-load', (map) => {
              this.marker.setLngLat(val);
            })
          }
        } else {
          this.marker.setLngLat(val);
        }
      },
    }

  }
</script>

<style scoped>

</style>
