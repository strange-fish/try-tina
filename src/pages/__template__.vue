<config></config>

<template minapp="native" lang="wxml">
  <view>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  data: {
  },
  compute (data) {
    return {
      name: data ? 'what' : 'how'
    }
  },
  onLoad () {
    this.getInfo()
  },
  methods: {
    getInfo () {
    }
  }
})
</script>

<style lang="scss">
</style>
