<config>
{
  "component": true
}
</config>

<template lang="wxml" minapp="native">
  <view>
    <slot></slot>
  </view>
</template>

<script>

Component({
  methods: {
    watch () {
      // const day = this.$day()
    }
  }
})
</script>

<style lang="less">

</style>

