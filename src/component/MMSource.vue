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
        map: this.map,
        sourceId: this.id,
      }
    },
    data(){
      return {
        isSourceAdd: false,
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
      map: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.addSource();
    },
    beforeDestroy() {
      this.rmSource()
    },
    methods: {
      addSource() {
        const {id, options, map} = this;
        if (map) {
          map.addSource(id, options);
          this.isSourceAdd = true;
          this.$emit('load');
        }
      },
      rmSource() {
        const {id, map} = this;
        if (map) {
          map.removeSource(id);
          this.isSourceAdd = false;
        }
      },
    },
    watch: {
      options: {
        deep: true,
        handler() {
          console.log('111111');
          this.rmSource();
          this.addSource();
        }
      }
    }
  }

</script>

<style scoped>

</style>
