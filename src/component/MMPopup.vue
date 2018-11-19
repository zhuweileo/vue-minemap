<template>
  <div class="MMPopup-container" style="display: none;">
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "MMPopup",
    props: {
      lnglat: {
        type: Array,
      },
      mapInstace: {
        type: Object,
      },
      offset: {
        type: Array,
      },
      anchor: {
        type: String,
      },
      closeButton: {
        type: Boolean,
        default: true,
      },
      closeOnClick: {
        type: Boolean,
        default: true,
      },
    },
    mounted() {
      if (this.$parent.$options.name === 'MineMap') {
        this.$parent.$on('map-load', (map) => {
          this.map = map;
          this.addPopup();
        });
        if (this.$parent.isMapLoaded) {
          this.map = this.getMap();
          this.addPopup();
        }
      } else if (this.$parent.$options.name === 'MMMarker'){
        this.map = null;
        this.addPopup();
      } else if (this.mapInstace) {
        this.map = this.mapInstace;
        this.addPopup();
      }
    },
    beforeDestroy() {
      this.rmPopup();
    },
    methods: {
      addPopup() {
        const minemap = minemap || window.minemap;
        const map = this.map;

        let el;

        try{
          el = this.$slots.content[0].elm;
        } catch (e) {
          throw new Error('请添加一个名为content的具名slot，使其作为popup的内容，例如：<h1 slot="content">hello world</h1>');
        }

        const {lnglat,offset,anchor,closeButton,closeOnClick} = this;

        const options = {closeButton,closeOnClick};

        if (offset) options.offset = offset;
        if (anchor) options.anchor = anchor;

        this.popup = new minemap.Popup(options).setDOMContent(el);

        if(lnglat){ this.popup.setLngLat(lnglat) }
        if(map){ this.popup.addTo(map) }
      },
      rmPopup() {
        if (!this.popup) return;
        this.popup.remove();
      }
    },
    watch: {
      lnglat(val) {
        if (this.$parent.$options.name === 'MineMap') {
          if (this.$parent.isMapLoaded) {
            this.popup.setLngLat(val);
          } else {
            this.$parent.$once('map-load', (map) => {
              this.popup.setLngLat(val);
            })
          }
        } else {
          this.popup.setLngLat(val);
        }
      },
    }

  }
</script>

<style scoped>

</style>
