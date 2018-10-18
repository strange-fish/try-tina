<template minapp="native" lang="wxml">
  <view>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  data: {
  },
  onLoad () {
  },
  /**
   * param 为data
   */
  compute (data) {
    return {
      name: data ? 'what' : 'shit'
    }
  },
  methods: {

  }
})
</script>

<style lang="scss">
</style>
