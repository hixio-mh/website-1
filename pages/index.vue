<template>
  <main :class="classes">
    <index-head />

    <index-other-features />

    <index-foot />
  </main>
</template>

<style scoped>
  .light-mode {
    background-color: #E5E5E5;
    color: #272727;
  }

  .dark-mode {
    background-color: #303030;
    color: #CCCCCC;
  }
</style>

<script>
  import IndexFoot from '~/components/index/foot'
  import IndexHead from '~/components/index/head'
  import IndexOtherFeatures from '~/components/index/other-features'
  import color from '~/mixins/color'

  export default {
    components: {
      IndexFoot,
      IndexHead,
      IndexOtherFeatures
    },

    mixins: [
      color
    ]
  }
</script>
