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
import { Component } from '@tinajs/tina'

Component.define({
  data: {
  },
  methods: {
    handleClick () {
      this.$bus.on('click', () => {})
    }
  }
})
</script>

<style lang="scss">

</style>

