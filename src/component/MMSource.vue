<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MMSource",
    provide() {
      return {
        sourceId: this.id,
      }
    },
    data(){
      return {
      }
    },
    props: {
      id: {
        type: String,
        required: true,
      },
      options: {
        type: Object,
        required: true,
      },
      mapInstace: {
        type: Object,
      },
    },
    mounted() {
      if(this.$parent.$options.name === 'MineMap'){
        this.$parent.$on('map-load',(map) =>  {
          this.map = map;
          this.addSource();
        })
      } else {
        this.map = this.mapInstace;
        this.addSource();
      }
    },
    beforeDestroy() {
      this.rmSource()
    },
    methods: {
      addSource() {
        const {id, options, map} = this;
        if (map) {
          // console.log('addsource')
          if(map.getSource(id)) map.removeSource(id);
          map.addSource(id, options);
          this.$emit('source-load',map);
        }
      },
      rmSource() {
        const {id, map} = this;
        if (map) {
          map.removeSource(id);
        }
      },
    },
    watch: {
      options: {
        deep: true,
        handler() {
          this.rmSource();
          this.addSource();
        }
      }
    }
  }

</script>

<style scoped>

</style>
