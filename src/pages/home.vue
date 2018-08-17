<config>
{
  "usingComponents": {
    "author": "../components/author.vue"
  }
}
</config>

<template lang="wxml" minapp="native">
  <view>
    Hi <author />
    <view class="what" bind:tap="handleClick">
      <view>
        what the handleClick
      </view>
    </view>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  onLoad () {
    this.haha()
  },
  methods: {
    handleClick () {
      console.log(' what the hack')
    },
    haha () {
      console.log(this.$day())
    }
  }
})
</script>

<style lang="scss">
.what {
  font-size: 14px;
}
</style>




