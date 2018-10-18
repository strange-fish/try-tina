<template minapp="native" lang="wxml">
  <view>
    <view wx:if="{{crazy}}">
      i am crazy
    </view>
    <button bind:tap="turnCrazyIntoSb">
      {{name}}
    </button>
    <button bind:tap="turnOff">
      Turn off
    </button>
  </view>
</template>

<script>
import { Page } from '@tinajs/tina'

Page.define({
  data: {
    crazy: true
  },
  onLoad () {
    this.$bus.on('hack', this.myEvent)
  },
  compute ({ crazy }) {
    return {
      name: crazy ? 'what' : 'shit'
    }
  },
  methods: {
    turnCrazyIntoSb () {
      this.$bus.emit('hack', 'geek')
      this.setData({ crazy: false })
    },
    myEvent (str) {
      console.log('you are a fool!', str)
    },
    turnOff () {
      this.$bus.off('hack', this.myEvent)
    }
  }
})
</script>

<style>
</style>
